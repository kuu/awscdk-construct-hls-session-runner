# awscdk-construct-hls-session-runner
AWS CDK construct for deploying a Lambda function and SFN state machines to fetch an HLS manifest

## Usage
```ts
import { SessionRunner } from 'awscdk-construct-hls-session-runner';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);
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
    new SessionRunner(this, 'SessionRunner', {
      eventStartTime,
      eventEndTime,
      intervalInSeconds: 2,
      sessionRequirements: {
        growthPattern: 'LINEAR',
        graph,
      },
      hlsEndpointUrl,
      concurrency: 10, // Requests will be made by 10 different SFN state machines
    });
  }
}
```