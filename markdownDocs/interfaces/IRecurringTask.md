[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / IRecurringTask

# Interface: IRecurringTask

Interface for a recurring task.

## Table of contents

### Properties

- [completed](IRecurringTask.md#completed)
- [description](IRecurringTask.md#description)
- [name](IRecurringTask.md#name)
- [recurrence](IRecurringTask.md#recurrence)

## Properties

### completed

• `Optional` **completed**: ``null`` \| `string`

The date when the task was last completed. It can be a string or null if the task has not been completed.

#### Defined in

recurringTasks/IRecurringTask.ts:22

___

### description

• `Optional` **description**: `string`

The description of the recurring task.

#### Defined in

recurringTasks/IRecurringTask.ts:14

___

### name

• **name**: `string`

The name of the recurring task.

#### Defined in

recurringTasks/IRecurringTask.ts:10

___

### recurrence

• **recurrence**: [`RecurrenceObject`](../modules.md#recurrenceobject)

The recurrence pattern of the task.

#### Defined in

recurringTasks/IRecurringTask.ts:18
