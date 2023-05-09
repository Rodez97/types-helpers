[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / Recurrence

# Interface: Recurrence

## Table of contents

### Methods

- [all](Recurrence.md#all)
- [day](Recurrence.md#day)
- [dayOfMonth](Recurrence.md#dayofmonth)
- [dayOfWeek](Recurrence.md#dayofweek)
- [days](Recurrence.md#days)
- [daysOfMonth](Recurrence.md#daysofmonth)
- [daysOfWeek](Recurrence.md#daysofweek)
- [every](Recurrence.md#every)
- [except](Recurrence.md#except)
- [forget](Recurrence.md#forget)
- [fromDate](Recurrence.md#fromdate)
- [matches](Recurrence.md#matches)
- [month](Recurrence.md#month)
- [monthOfYear](Recurrence.md#monthofyear)
- [months](Recurrence.md#months)
- [monthsOfYear](Recurrence.md#monthsofyear)
- [next](Recurrence.md#next)
- [previous](Recurrence.md#previous)
- [week](Recurrence.md#week)
- [weekOfMonth](Recurrence.md#weekofmonth)
- [weekOfYear](Recurrence.md#weekofyear)
- [weeks](Recurrence.md#weeks)
- [weeksOfMonth](Recurrence.md#weeksofmonth)
- [weeksOfYear](Recurrence.md#weeksofyear)
- [year](Recurrence.md#year)
- [years](Recurrence.md#years)

## Methods

### all

▸ **all**(): `Dayjs`[]

#### Returns

`Dayjs`[]

#### Defined in

recurringTasks/recurringTaskHelpers.ts:43

___

### day

▸ **day**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:17

___

### dayOfMonth

▸ **dayOfMonth**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:27

___

### dayOfWeek

▸ **dayOfWeek**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:25

___

### days

▸ **days**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:18

___

### daysOfMonth

▸ **daysOfMonth**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:28

___

### daysOfWeek

▸ **daysOfWeek**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:26

___

### every

▸ **every**(`unit`, `measurementType?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `string` \| `number` \| `string`[] \| `number`[] |
| `measurementType?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:13

___

### except

▸ **except**(`date`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:36

___

### forget

▸ **forget**(`date`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:35

___

### fromDate

▸ **fromDate**(`date`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` \| `Dayjs` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:38

___

### matches

▸ **matches**(`date`, `outbound?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |
| `outbound?` | `boolean` |

#### Returns

`boolean`

#### Defined in

recurringTasks/recurringTaskHelpers.ts:37

___

### month

▸ **month**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:21

___

### monthOfYear

▸ **monthOfYear**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:33

___

### months

▸ **months**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:22

___

### monthsOfYear

▸ **monthsOfYear**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:34

___

### next

▸ **next**(): `Dayjs`

#### Returns

`Dayjs`

#### Defined in

recurringTasks/recurringTaskHelpers.ts:39

▸ **next**(`count`): `Dayjs`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Dayjs`[]

#### Defined in

recurringTasks/recurringTaskHelpers.ts:40

___

### previous

▸ **previous**(): `Dayjs`

#### Returns

`Dayjs`

#### Defined in

recurringTasks/recurringTaskHelpers.ts:41

▸ **previous**(`count`): `Dayjs`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`Dayjs`[]

#### Defined in

recurringTasks/recurringTaskHelpers.ts:42

___

### week

▸ **week**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:19

___

### weekOfMonth

▸ **weekOfMonth**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:29

___

### weekOfYear

▸ **weekOfYear**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:31

___

### weeks

▸ **weeks**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:20

___

### weeksOfMonth

▸ **weeksOfMonth**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:30

___

### weeksOfYear

▸ **weeksOfYear**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:32

___

### year

▸ **year**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:23

___

### years

▸ **years**(`unit?`): [`Recurrence`](Recurrence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit?` | `string` |

#### Returns

[`Recurrence`](Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:24
