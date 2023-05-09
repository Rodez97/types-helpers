[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / IScheduleSettings

# Interface: IScheduleSettings

Represents the settings for a schedule.

## Table of contents

### Properties

- [ot\_day](IScheduleSettings.md#ot_day)
- [ot\_week](IScheduleSettings.md#ot_week)
- [presetTimes](IScheduleSettings.md#presettimes)

## Properties

### ot\_day

• **ot\_day**: `Object`

The settings for daily overtime.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | Specifies whether daily overtime is enabled. |
| `hours` | `number` | The number of hours for daily overtime. |
| `multiplier` | `number` | The overtime multiplier for daily overtime. |

#### Defined in

schedule/ScheduleSettings.ts:25

___

### ot\_week

• **ot\_week**: `Object`

The settings for weekly overtime.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | Specifies whether weekly overtime is enabled. |
| `hours` | `number` | The number of hours for weekly overtime. |
| `multiplier` | `number` | The overtime multiplier for weekly overtime. |

#### Defined in

schedule/ScheduleSettings.ts:8

___

### presetTimes

• `Optional` **presetTimes**: { `end`: `string` ; `start`: `string`  }[]

Optional preset times for scheduling.

#### Defined in

schedule/ScheduleSettings.ts:42
