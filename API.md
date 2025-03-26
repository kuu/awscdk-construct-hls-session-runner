# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventBridgeSchedule <a name="EventBridgeSchedule" id="awscdk-construct-hls-session-runner.EventBridgeSchedule"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-hls-session-runner.EventBridgeSchedule.Initializer"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-hls-session-runner'

new EventBridgeSchedule(scope: Construct, id: string, props: EventBridgeScheduleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.EventBridgeSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.EventBridgeSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.EventBridgeSchedule.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-hls-session-runner.EventBridgeScheduleProps">EventBridgeScheduleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-hls-session-runner.EventBridgeSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-hls-session-runner.EventBridgeSchedule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-hls-session-runner.EventBridgeSchedule.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-hls-session-runner.EventBridgeScheduleProps">EventBridgeScheduleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.EventBridgeSchedule.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-hls-session-runner.EventBridgeSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.EventBridgeSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-hls-session-runner.EventBridgeSchedule.isConstruct"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-hls-session-runner'

EventBridgeSchedule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-hls-session-runner.EventBridgeSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.EventBridgeSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-hls-session-runner.EventBridgeSchedule.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-hls-session-runner.EventBridgeSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `rule`<sup>Required</sup> <a name="rule" id="awscdk-construct-hls-session-runner.EventBridgeSchedule.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---


### FetchLambda <a name="FetchLambda" id="awscdk-construct-hls-session-runner.FetchLambda"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-hls-session-runner.FetchLambda.Initializer"></a>

```typescript
import { FetchLambda } from 'awscdk-construct-hls-session-runner'

new FetchLambda(scope: Construct, id: string, props: FetchLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambda.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-hls-session-runner.FetchLambdaProps">FetchLambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-hls-session-runner.FetchLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-hls-session-runner.FetchLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-hls-session-runner.FetchLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-hls-session-runner.FetchLambdaProps">FetchLambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-hls-session-runner.FetchLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-hls-session-runner.FetchLambda.isConstruct"></a>

```typescript
import { FetchLambda } from 'awscdk-construct-hls-session-runner'

FetchLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-hls-session-runner.FetchLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambda.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-hls-session-runner.FetchLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-hls-session-runner.FetchLambda.property.func"></a>

```typescript
public readonly func: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---


### SessionRunner <a name="SessionRunner" id="awscdk-construct-hls-session-runner.SessionRunner"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-hls-session-runner.SessionRunner.Initializer"></a>

```typescript
import { SessionRunner } from 'awscdk-construct-hls-session-runner'

new SessionRunner(scope: Construct, id: string, __2: SessionRunnerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunner.Initializer.parameter.__2">__2</a></code> | <code><a href="#awscdk-construct-hls-session-runner.SessionRunnerProps">SessionRunnerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-hls-session-runner.SessionRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-hls-session-runner.SessionRunner.Initializer.parameter.id"></a>

- *Type:* string

---

##### `__2`<sup>Required</sup> <a name="__2" id="awscdk-construct-hls-session-runner.SessionRunner.Initializer.parameter.__2"></a>

- *Type:* <a href="#awscdk-construct-hls-session-runner.SessionRunnerProps">SessionRunnerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunner.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-hls-session-runner.SessionRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-hls-session-runner.SessionRunner.isConstruct"></a>

```typescript
import { SessionRunner } from 'awscdk-construct-hls-session-runner'

SessionRunner.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-hls-session-runner.SessionRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunner.property.rules">rules</a></code> | <code>aws-cdk-lib.aws_events.Rule[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-hls-session-runner.SessionRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `rules`<sup>Required</sup> <a name="rules" id="awscdk-construct-hls-session-runner.SessionRunner.property.rules"></a>

```typescript
public readonly rules: Rule[];
```

- *Type:* aws-cdk-lib.aws_events.Rule[]

---


## Structs <a name="Structs" id="Structs"></a>

### EventBridgeScheduleProps <a name="EventBridgeScheduleProps" id="awscdk-construct-hls-session-runner.EventBridgeScheduleProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-hls-session-runner.EventBridgeScheduleProps.Initializer"></a>

```typescript
import { EventBridgeScheduleProps } from 'awscdk-construct-hls-session-runner'

const eventBridgeScheduleProps: EventBridgeScheduleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.EventBridgeScheduleProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.EventBridgeScheduleProps.property.target">target</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction \| aws-cdk-lib.aws_stepfunctions.StateMachine</code> | *No description.* |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="awscdk-construct-hls-session-runner.EventBridgeScheduleProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

---

##### `target`<sup>Required</sup> <a name="target" id="awscdk-construct-hls-session-runner.EventBridgeScheduleProps.property.target"></a>

```typescript
public readonly target: NodejsFunction | StateMachine;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction | aws-cdk-lib.aws_stepfunctions.StateMachine

---

### FetchLambdaProps <a name="FetchLambdaProps" id="awscdk-construct-hls-session-runner.FetchLambdaProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-hls-session-runner.FetchLambdaProps.Initializer"></a>

```typescript
import { FetchLambdaProps } from 'awscdk-construct-hls-session-runner'

const fetchLambdaProps: FetchLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambdaProps.property.eventStartTime">eventStartTime</a></code> | <code>Date</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambdaProps.property.hlsEndpointUrl">hlsEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambdaProps.property.indexOfRenditions">indexOfRenditions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambdaProps.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambdaProps.property.sessionRequirements">sessionRequirements</a></code> | <code><a href="#awscdk-construct-hls-session-runner.SessionRequirements">SessionRequirements</a></code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambdaProps.property.requestSegments">requestSegments</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.FetchLambdaProps.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `eventStartTime`<sup>Required</sup> <a name="eventStartTime" id="awscdk-construct-hls-session-runner.FetchLambdaProps.property.eventStartTime"></a>

```typescript
public readonly eventStartTime: Date;
```

- *Type:* Date

---

##### `hlsEndpointUrl`<sup>Required</sup> <a name="hlsEndpointUrl" id="awscdk-construct-hls-session-runner.FetchLambdaProps.property.hlsEndpointUrl"></a>

```typescript
public readonly hlsEndpointUrl: string;
```

- *Type:* string

---

##### `indexOfRenditions`<sup>Required</sup> <a name="indexOfRenditions" id="awscdk-construct-hls-session-runner.FetchLambdaProps.property.indexOfRenditions"></a>

```typescript
public readonly indexOfRenditions: number;
```

- *Type:* number

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="awscdk-construct-hls-session-runner.FetchLambdaProps.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sessionRequirements`<sup>Required</sup> <a name="sessionRequirements" id="awscdk-construct-hls-session-runner.FetchLambdaProps.property.sessionRequirements"></a>

```typescript
public readonly sessionRequirements: SessionRequirements;
```

- *Type:* <a href="#awscdk-construct-hls-session-runner.SessionRequirements">SessionRequirements</a>

---

##### `requestSegments`<sup>Optional</sup> <a name="requestSegments" id="awscdk-construct-hls-session-runner.FetchLambdaProps.property.requestSegments"></a>

```typescript
public readonly requestSegments: boolean;
```

- *Type:* boolean

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="awscdk-construct-hls-session-runner.FetchLambdaProps.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

### SessionRequirements <a name="SessionRequirements" id="awscdk-construct-hls-session-runner.SessionRequirements"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-hls-session-runner.SessionRequirements.Initializer"></a>

```typescript
import { SessionRequirements } from 'awscdk-construct-hls-session-runner'

const sessionRequirements: SessionRequirements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRequirements.property.graph">graph</a></code> | <code><a href="#awscdk-construct-hls-session-runner.SessionSnapshot">SessionSnapshot</a>[]</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRequirements.property.growthPattern">growthPattern</a></code> | <code>string</code> | *No description.* |

---

##### `graph`<sup>Required</sup> <a name="graph" id="awscdk-construct-hls-session-runner.SessionRequirements.property.graph"></a>

```typescript
public readonly graph: SessionSnapshot[];
```

- *Type:* <a href="#awscdk-construct-hls-session-runner.SessionSnapshot">SessionSnapshot</a>[]

---

##### `growthPattern`<sup>Required</sup> <a name="growthPattern" id="awscdk-construct-hls-session-runner.SessionRequirements.property.growthPattern"></a>

```typescript
public readonly growthPattern: string;
```

- *Type:* string

---

### SessionRunnerProps <a name="SessionRunnerProps" id="awscdk-construct-hls-session-runner.SessionRunnerProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-hls-session-runner.SessionRunnerProps.Initializer"></a>

```typescript
import { SessionRunnerProps } from 'awscdk-construct-hls-session-runner'

const sessionRunnerProps: SessionRunnerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunnerProps.property.eventEndTime">eventEndTime</a></code> | <code>Date</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunnerProps.property.eventStartTime">eventStartTime</a></code> | <code>Date</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunnerProps.property.hlsEndpointUrl">hlsEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunnerProps.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunnerProps.property.sessionRequirements">sessionRequirements</a></code> | <code><a href="#awscdk-construct-hls-session-runner.SessionRequirements">SessionRequirements</a></code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunnerProps.property.concurrency">concurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunnerProps.property.indexOfRenditions">indexOfRenditions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunnerProps.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunnerProps.property.requestSegments">requestSegments</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionRunnerProps.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `eventEndTime`<sup>Required</sup> <a name="eventEndTime" id="awscdk-construct-hls-session-runner.SessionRunnerProps.property.eventEndTime"></a>

```typescript
public readonly eventEndTime: Date;
```

- *Type:* Date

---

##### `eventStartTime`<sup>Required</sup> <a name="eventStartTime" id="awscdk-construct-hls-session-runner.SessionRunnerProps.property.eventStartTime"></a>

```typescript
public readonly eventStartTime: Date;
```

- *Type:* Date

---

##### `hlsEndpointUrl`<sup>Required</sup> <a name="hlsEndpointUrl" id="awscdk-construct-hls-session-runner.SessionRunnerProps.property.hlsEndpointUrl"></a>

```typescript
public readonly hlsEndpointUrl: string;
```

- *Type:* string

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="awscdk-construct-hls-session-runner.SessionRunnerProps.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `sessionRequirements`<sup>Required</sup> <a name="sessionRequirements" id="awscdk-construct-hls-session-runner.SessionRunnerProps.property.sessionRequirements"></a>

```typescript
public readonly sessionRequirements: SessionRequirements;
```

- *Type:* <a href="#awscdk-construct-hls-session-runner.SessionRequirements">SessionRequirements</a>

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="awscdk-construct-hls-session-runner.SessionRunnerProps.property.concurrency"></a>

```typescript
public readonly concurrency: number;
```

- *Type:* number

---

##### `indexOfRenditions`<sup>Optional</sup> <a name="indexOfRenditions" id="awscdk-construct-hls-session-runner.SessionRunnerProps.property.indexOfRenditions"></a>

```typescript
public readonly indexOfRenditions: number;
```

- *Type:* number

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="awscdk-construct-hls-session-runner.SessionRunnerProps.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestSegments`<sup>Optional</sup> <a name="requestSegments" id="awscdk-construct-hls-session-runner.SessionRunnerProps.property.requestSegments"></a>

```typescript
public readonly requestSegments: boolean;
```

- *Type:* boolean

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="awscdk-construct-hls-session-runner.SessionRunnerProps.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

### SessionSnapshot <a name="SessionSnapshot" id="awscdk-construct-hls-session-runner.SessionSnapshot"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-hls-session-runner.SessionSnapshot.Initializer"></a>

```typescript
import { SessionSnapshot } from 'awscdk-construct-hls-session-runner'

const sessionSnapshot: SessionSnapshot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-hls-session-runner.SessionSnapshot.property.pointInSeconds">pointInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-hls-session-runner.SessionSnapshot.property.sessionVolume">sessionVolume</a></code> | <code>number</code> | *No description.* |

---

##### `pointInSeconds`<sup>Required</sup> <a name="pointInSeconds" id="awscdk-construct-hls-session-runner.SessionSnapshot.property.pointInSeconds"></a>

```typescript
public readonly pointInSeconds: number;
```

- *Type:* number

---

##### `sessionVolume`<sup>Required</sup> <a name="sessionVolume" id="awscdk-construct-hls-session-runner.SessionSnapshot.property.sessionVolume"></a>

```typescript
public readonly sessionVolume: number;
```

- *Type:* number

---



