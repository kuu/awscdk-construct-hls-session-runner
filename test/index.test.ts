import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { SessionRunner } from '../src';

test('Create MediaLive', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  const eventStartTime = new Date('2025-03-26T00:00:00Z');
  const eventEndTime = new Date('2025-03-26T00:30:00Z');
  const graph = [
    { pointInSeconds: 0 * 60, sessionVolume: 10 },
    { pointInSeconds: 5 * 60, sessionVolume: 30 },
    { pointInSeconds: 10 * 60, sessionVolume: 50 }, // 50 viewers join 10 minutes after the event start
    { pointInSeconds: 20 * 60, sessionVolume: 50 },
    { pointInSeconds: 25 * 60, sessionVolume: 30 },
    { pointInSeconds: 30 * 60, sessionVolume: 10 },
  ];
  const hlsEndpointUrl = 'https://example.com/live/index.m3u8';

  // Create a session runner
  new SessionRunner(stack, 'SessionRunner', {
    eventStartTime,
    eventEndTime,
    intervalInSeconds: 2,
    sessionRequirements: {
      growthPattern: 'LINEAR',
      graph,
    },
    hlsEndpointUrl,
    requestHeaders: {
      Host: 'example.com',
    },
    concurrency: 10, // Requests will be made by 10 different SFN state machines
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::Lambda::Function', 1);
  template.hasResource('AWS::StepFunctions::StateMachine', 10);
  template.hasResource('AWS::Events::Rule', 1);
});
