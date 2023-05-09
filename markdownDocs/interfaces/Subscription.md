[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / Subscription

# Interface: Subscription<ReferenceType\>

## Type parameters

| Name |
| :------ |
| `ReferenceType` |

## Table of contents

### Properties

- [cancel\_at](Subscription.md#cancel_at)
- [cancel\_at\_period\_end](Subscription.md#cancel_at_period_end)
- [canceled\_at](Subscription.md#canceled_at)
- [created](Subscription.md#created)
- [current\_period\_end](Subscription.md#current_period_end)
- [current\_period\_start](Subscription.md#current_period_start)
- [ended\_at](Subscription.md#ended_at)
- [items](Subscription.md#items)
- [metadata](Subscription.md#metadata)
- [price](Subscription.md#price)
- [prices](Subscription.md#prices)
- [product](Subscription.md#product)
- [quantity](Subscription.md#quantity)
- [role](Subscription.md#role)
- [status](Subscription.md#status)
- [stripeLink](Subscription.md#stripelink)
- [trial\_end](Subscription.md#trial_end)
- [trial\_start](Subscription.md#trial_start)

## Properties

### cancel\_at

• **cancel\_at**: ``null`` \| `number`

#### Defined in

billing.ts:61

___

### cancel\_at\_period\_end

• **cancel\_at\_period\_end**: `boolean`

#### Defined in

billing.ts:56

___

### canceled\_at

• **canceled\_at**: ``null`` \| `number`

#### Defined in

billing.ts:62

___

### created

• **created**: `number`

#### Defined in

billing.ts:57

___

### current\_period\_end

• **current\_period\_end**: `number`

#### Defined in

billing.ts:59

___

### current\_period\_start

• **current\_period\_start**: `number`

#### Defined in

billing.ts:58

___

### ended\_at

• **ended\_at**: ``null`` \| `number`

#### Defined in

billing.ts:60

___

### items

• **items**: [`SubscriptionItem`](SubscriptionItem.md)[]

#### Defined in

billing.ts:44

___

### metadata

• **metadata**: `Object`

#### Index signature

▪ [name: `string`]: `string`

#### Defined in

billing.ts:38

___

### price

• **price**: `ReferenceType`

#### Defined in

billing.ts:46

___

### prices

• **prices**: `ReferenceType`[]

#### Defined in

billing.ts:47

___

### product

• **product**: `ReferenceType`

#### Defined in

billing.ts:45

___

### quantity

• **quantity**: `number`

#### Defined in

billing.ts:43

___

### role

• **role**: ``null`` \| `string`

#### Defined in

billing.ts:42

___

### status

• **status**: ``"active"`` \| ``"canceled"`` \| ``"incomplete"`` \| ``"incomplete_expired"`` \| ``"trialing"`` \| ``"past_due"`` \| ``"unpaid"``

#### Defined in

billing.ts:48

___

### stripeLink

• **stripeLink**: `string`

#### Defined in

billing.ts:41

___

### trial\_end

• **trial\_end**: ``null`` \| `number`

#### Defined in

billing.ts:64

___

### trial\_start

• **trial\_start**: ``null`` \| `number`

#### Defined in

billing.ts:63
