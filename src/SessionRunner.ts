import { Duration } from 'aws-cdk-lib';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { Pass, StateMachine, Wait, WaitTime, Chain, Choice, Condition, Succeed, DefinitionBody } from 'aws-cdk-lib/aws-stepfunctions';
import { LambdaInvoke } from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { Construct } from 'constructs';
import { EventBridgeSchedule } from './EventBridgeSchedule';
import { FetchLambda } from './FetchLambda';

const SHIFT_IN_SECONDS = 1;

export interface SessionSnapshot {
  readonly pointInSeconds: number;
  readonly sessionVolume: number;
}

export interface SessionRequirements {
  readonly growthPattern: 'LINEAR'; // | 'EXPONENTIAL';
  readonly graph: SessionSnapshot[];
}

export interface SessionRunnerProps {
  readonly eventStartTime: Date;
  readonly eventEndTime: Date;
  readonly intervalInSeconds: number;
  readonly sessionRequirements: SessionRequirements;
  readonly hlsEndpointUrl: string;
  readonly requestHeaders?: Record<string, string>;
  readonly indexOfRenditions?: number;
  readonly concurrency?: number;
  readonly requestSegments?: boolean;
}

export class SessionRunner extends Construct {
  public rules: Rule[] = [];

  constructor(scope: Construct, id: string, {
    eventStartTime,
    eventEndTime,
    intervalInSeconds,
    sessionRequirements,
    hlsEndpointUrl,
    requestHeaders = {},
    indexOfRenditions = 0,
    concurrency = 1,
    requestSegments = false,
  }: SessionRunnerProps) {
    super(scope, id);

    const sessionRequirementsList = createSessionRequirementsList(sessionRequirements, concurrency);

    for (const [i, requirements] of sessionRequirementsList.entries()) {
      const startTime = new Date(eventStartTime.getTime() + i * SHIFT_IN_SECONDS * 1000);
      const endTime = new Date(eventEndTime.getTime() + i * SHIFT_IN_SECONDS * 1000);
      // Create FetchLambda function to fetch the MediaTailor endpoint URL
      const fetchLambda = new FetchLambda(this, `FetchLambdaFunction${i}`, {
        hlsEndpointUrl,
        requestHeaders,
        indexOfRenditions,
        sessionRequirements: requirements,
        eventStartTime: startTime,
        requestSegments,
      });
      const invoke = new LambdaInvoke(this, `LambdaInvoke${i}`, {
        lambdaFunction: fetchLambda.func,
        inputPath: '$.Payload',
      });

      const prepare = new Wait(this, `Prepare${i}`, {
        time: WaitTime.duration(Duration.seconds(SHIFT_IN_SECONDS)),
      });

      const wait = new Wait(this, `Wait${i}`, {
        time: WaitTime.duration(Duration.seconds(intervalInSeconds)),
      });

      // Create a StateMachine that fetches the manifest
      const stateMachine = new StateMachine(this, `StateMachine${i}`, {
        definitionBody: DefinitionBody.fromChainable(Chain.start(
          new Pass(this, `Start${i}`, { parameters: { Payload: { urlList: [] } } }),
        )
          .next(prepare)
          .next(wait)
          .next(invoke)
          .next(
            new Choice(this, `Choice${i}`)
              .when(
                Condition.timestampLessThan('$.Payload.timestamp', endTime.toISOString()),
                wait,
              )
              .otherwise(new Succeed(this, `Done${i}`)),
          )),
      });
        // Create an EventBridge rule to invoke the lambda function
      const fetchSchedule = new EventBridgeSchedule(this, `EventBridgeSchedule${i}`, {
        target: stateMachine,
        schedule: Schedule.cron({
          year: `${eventStartTime.getUTCFullYear()}`,
          month: `${eventStartTime.getUTCMonth() + 1}`,
          day: `${eventStartTime.getUTCDate()}`,
          hour: `${eventStartTime.getUTCHours()}`,
          minute: `${eventStartTime.getUTCMinutes()}`,
        }),
      });
      this.rules.push(fetchSchedule.rule);
    }
  }
}

export function createSessionRequirementsList(requirements: SessionRequirements, concurrency: number): SessionRequirements[] {
  const { growthPattern, graph } = requirements;
  const sessionRequirementsList: SessionRequirements[] = [];
  const currentVolumes = graph.map(_ => 0);
  for (let i = 0; i < concurrency; i++) {
    const sessionRequirements: SessionRequirements = {
      growthPattern,
      graph: graph.map(({ pointInSeconds, sessionVolume }, j) => {
        const remainingVolume = Math.max(0, sessionVolume - currentVolumes[j]);
        const assignedVolume = i === concurrency - 1 ? remainingVolume
          : Math.ceil(remainingVolume / (concurrency - i));
        currentVolumes[j] += assignedVolume;
        return ({
          pointInSeconds,
          sessionVolume: assignedVolume,
        });
      }),
    };
    sessionRequirementsList.push(sessionRequirements);
  }
  return sessionRequirementsList;
}
