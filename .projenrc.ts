import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kuu Miyazaki',
  authorAddress: 'miyazaqui@gmail.com',
  cdkVersion: '2.184.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'awscdk-construct-hls-session-runner',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/kuu/awscdk-construct-hls-session-runner.git',
  keywords: [
    'cdk',
    'cdk-construct',
    'MediaTailor',
  ],
  license: 'MIT',
  licensed: true,

  deps: [
    'aws-cdk-lib',
    'constructs',
  ],
  bundledDeps: [
    'hls-parser',
    'node-fetch',
  ],
  description: 'AWS CDK construct for deploying a Lambda function and SFN state machines to fetch an HLS manifest',
});
project.synth();
