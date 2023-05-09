[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / IShift

# Interface: IShift

Shift status and metadata.

## Hierarchy

- [`IPrimaryShiftData`](IPrimaryShiftData.md)

  ↳ **`IShift`**

## Table of contents

### Properties

- [deleting](IShift.md#deleting)
- [employeeId](IShift.md#employeeid)
- [end](IShift.md#end)
- [hourlyWage](IShift.md#hourlywage)
- [id](IShift.md#id)
- [locationId](IShift.md#locationid)
- [locationName](IShift.md#locationname)
- [notes](IShift.md#notes)
- [pendingUpdate](IShift.md#pendingupdate)
- [position](IShift.md#position)
- [start](IShift.md#start)
- [status](IShift.md#status)
- [updatedAt](IShift.md#updatedat)
- [weekId](IShift.md#weekid)
- [weekOrderFactor](IShift.md#weekorderfactor)

## Properties

### deleting

• `Optional` **deleting**: `boolean`

#### Defined in

schedule/Shift.ts:128

___

### employeeId

• **employeeId**: `string`

#### Defined in

schedule/Shift.ts:133

___

### end

• **end**: `string`

The end time of the shift.

#### Inherited from

[IPrimaryShiftData](IPrimaryShiftData.md).[end](IPrimaryShiftData.md#end)

#### Defined in

schedule/Shift.ts:106

___

### hourlyWage

• `Optional` **hourlyWage**: `number`

The hourly wage for the shift.

#### Inherited from

[IPrimaryShiftData](IPrimaryShiftData.md).[hourlyWage](IPrimaryShiftData.md#hourlywage)

#### Defined in

schedule/Shift.ts:118

___

### id

• **id**: `string`

#### Defined in

schedule/Shift.ts:125

___

### locationId

• **locationId**: `string`

#### Defined in

schedule/Shift.ts:131

___

### locationName

• **locationName**: `string`

#### Defined in

schedule/Shift.ts:130

___

### notes

• `Optional` **notes**: `string`

Additional notes about the shift.

#### Inherited from

[IPrimaryShiftData](IPrimaryShiftData.md).[notes](IPrimaryShiftData.md#notes)

#### Defined in

schedule/Shift.ts:114

___

### pendingUpdate

• `Optional` **pendingUpdate**: `Partial`<[`IPrimaryShiftData`](IPrimaryShiftData.md)\>

#### Defined in

schedule/Shift.ts:127

___

### position

• `Optional` **position**: `string`

The position of the employee during the shift.

#### Inherited from

[IPrimaryShiftData](IPrimaryShiftData.md).[position](IPrimaryShiftData.md#position)

#### Defined in

schedule/Shift.ts:110

___

### start

• **start**: `string`

The start time of the shift.

#### Inherited from

[IPrimaryShiftData](IPrimaryShiftData.md).[start](IPrimaryShiftData.md#start)

#### Defined in

schedule/Shift.ts:102

___

### status

• **status**: ``"draft"`` \| ``"published"``

#### Defined in

schedule/Shift.ts:126

___

### updatedAt

• **updatedAt**: `number`

#### Defined in

schedule/Shift.ts:129

___

### weekId

• **weekId**: `string`

#### Defined in

schedule/Shift.ts:132

___

### weekOrderFactor

• **weekOrderFactor**: `number`

#### Defined in

schedule/Shift.ts:134
