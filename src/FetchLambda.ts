import * as fs from 'fs';
import * as path from 'path';
import { Duration, aws_logs as logs } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { SessionRequirements } from './SessionRunner';

export interface FetchLambdaProps {
  readonly hlsEndpointUrl: string; // Sessuib Initialization URL
  readonly requestHeaders: Record<string, string>; // Host name of the MediaTailor endpoint
  readonly indexOfRenditions: number; // N-th rendition to fetch
  readonly sessionRequirements: SessionRequirements;
  readonly eventStartTime: Date; // Start time of the event
  readonly requestSegments?: boolean; // Whether to request segments
}

export class FetchLambda extends Construct {
  public readonly func: NodejsFunction;

  constructor(scope: Construct, id: string, props: FetchLambdaProps) {
    super(scope, id);

    const {
      hlsEndpointUrl,
      requestHeaders,
      indexOfRenditions,
      sessionRequirements,
      eventStartTime,
      requestSegments = false,
    } = props;

    const TS_ENTRY = path.resolve(__dirname, 'lambda', 'index.ts');
    const JS_ENTRY = path.resolve(__dirname, 'lambda', 'index.js');

    this.func = new NodejsFunction(scope, `NodejsFunction${id}`, {
      runtime: Runtime.NODEJS_18_X,
      entry: fs.existsSync(TS_ENTRY) ? TS_ENTRY : JS_ENTRY,
      handler: 'handler',
      timeout: Duration.seconds(30),
      environment: {
        NODE_ENV: process.env.NODE_ENV as string,
        HLS_ENDPOINT_URL: hlsEndpointUrl,
        REQUEST_HEADERS: JSON.stringify(requestHeaders),
        INDEX_OF_RENDITIONS: indexOfRenditions.toString(10),
        SESSION_REQUIREMENTS: JSON.stringify(sessionRequirements),
        EVENT_START_TIME: eventStartTime.toISOString(),
        SEGMENT_REQUEST: requestSegments.toString(),
      },
      logRetention: logs.RetentionDays.TWO_WEEKS,
    });
  }
}