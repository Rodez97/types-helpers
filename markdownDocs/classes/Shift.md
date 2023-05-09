[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / Shift

# Class: Shift

Provides utility functions for working with shift dates.

## Table of contents

### Constructors

- [constructor](Shift.md#constructor)

### Methods

- [toDate](Shift.md#todate)
- [toString](Shift.md#tostring)

## Constructors

### constructor

• **new Shift**()

## Methods

### toDate

▸ `Static` **toDate**(`date`): `Dayjs`

Converts a string date to a Dayjs object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` | The date string to convert. |

#### Returns

`Dayjs`

The Dayjs object representing the input date.

#### Defined in

schedule/Shift.ts:146

___

### toString

▸ `Static` **toString**(`date`): `string`

Converts a Date object to a string in the SHIFTFORMAT format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | The Date object to convert. |

#### Returns

`string`

The date string in the SHIFTFORMAT format.

#### Defined in

schedule/Shift.ts:155
