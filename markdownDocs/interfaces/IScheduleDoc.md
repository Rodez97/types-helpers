[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / IScheduleDoc

# Interface: IScheduleDoc

Represents a schedule document.

## Table of contents

### Properties

- [createdAt](IScheduleDoc.md#createdat)
- [id](IScheduleDoc.md#id)
- [locationId](IScheduleDoc.md#locationid)
- [projectedSalesByDay](IScheduleDoc.md#projectedsalesbyday)
- [publishData](IScheduleDoc.md#publishdata)
- [scheduleSummary](IScheduleDoc.md#schedulesummary)
- [updatedAt](IScheduleDoc.md#updatedat)
- [weekId](IScheduleDoc.md#weekid)
- [weekNumber](IScheduleDoc.md#weeknumber)
- [weekOrderFactor](IScheduleDoc.md#weekorderfactor)
- [year](IScheduleDoc.md#year)

## Properties

### createdAt

• **createdAt**: `number`

The timestamp when the schedule document was created.

#### Defined in

schedule/ScheduleDoc.ts:53

___

### id

• **id**: `string`

The ID of the schedule document.

#### Defined in

schedule/ScheduleDoc.ts:24

___

### locationId

• **locationId**: `string`

The ID of the location associated with the schedule.

#### Defined in

schedule/ScheduleDoc.ts:36

___

### projectedSalesByDay

• `Optional` **projectedSalesByDay**: `Record`<`number`, `number`\>

The projected sales for each day of the week.
It is a record where the key is the day number (0-6) and the value is the projected sales amount.

#### Defined in

schedule/ScheduleDoc.ts:45

___

### publishData

• `Optional` **publishData**: [`PublishProps`](PublishProps.md)

The publishing data for the schedule.

#### Defined in

schedule/ScheduleDoc.ts:61

___

### scheduleSummary

• **scheduleSummary**: [`WeekSummary`](../modules.md#weeksummary)

The summary information for the week's schedule.

#### Defined in

schedule/ScheduleDoc.ts:49

___

### updatedAt

• `Optional` **updatedAt**: `number`

The timestamp when the schedule document was last updated.

#### Defined in

schedule/ScheduleDoc.ts:57

___

### weekId

• **weekId**: `string`

The ID of the week.

#### Defined in

schedule/ScheduleDoc.ts:40

___

### weekNumber

• **weekNumber**: `number`

The week number of the schedule.

#### Defined in

schedule/ScheduleDoc.ts:32

___

### weekOrderFactor

• **weekOrderFactor**: `number`

The factor used for ordering the weeks.

#### Defined in

schedule/ScheduleDoc.ts:65

___

### year

• **year**: `number`

The year of the schedule.

#### Defined in

schedule/ScheduleDoc.ts:28
