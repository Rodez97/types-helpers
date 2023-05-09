[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / IRecurringTaskDoc

# Interface: IRecurringTaskDoc

Interface for a recurring task document.

## Table of contents

### Properties

- [createdAt](IRecurringTaskDoc.md#createdat)
- [id](IRecurringTaskDoc.md#id)
- [locationId](IRecurringTaskDoc.md#locationid)
- [refPath](IRecurringTaskDoc.md#refpath)
- [tasks](IRecurringTaskDoc.md#tasks)
- [updatedAt](IRecurringTaskDoc.md#updatedat)

## Properties

### createdAt

• **createdAt**: `number`

The timestamp indicating the creation date of the recurring task document.

#### Defined in

recurringTasks/IRecurringTaskDoc.ts:20

___

### id

• **id**: `string`

The ID of the recurring task document.

#### Defined in

recurringTasks/IRecurringTaskDoc.ts:32

___

### locationId

• **locationId**: `string`

The location ID associated with the recurring task document.

#### Defined in

recurringTasks/IRecurringTaskDoc.ts:10

___

### refPath

• **refPath**: `string`

The reference path of the recurring task document.

#### Defined in

recurringTasks/IRecurringTaskDoc.ts:28

___

### tasks

• `Optional` **tasks**: `Object`

An object containing recurring tasks, where the keys are task IDs and the values are `IRecurringTask` objects.

#### Index signature

▪ [key: `string`]: [`IRecurringTask`](IRecurringTask.md)

#### Defined in

recurringTasks/IRecurringTaskDoc.ts:14

___

### updatedAt

• `Optional` **updatedAt**: `number`

The timestamp indicating the last update date of the recurring task document.

#### Defined in

recurringTasks/IRecurringTaskDoc.ts:24
