[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / IChecklist

# Interface: IChecklist

A checklist is a list of tasks that can be completed.

## Table of contents

### Properties

- [createdAt](IChecklist.md#createdat)
- [createdBy](IChecklist.md#createdby)
- [description](IChecklist.md#description)
- [id](IChecklist.md#id)
- [name](IChecklist.md#name)
- [order](IChecklist.md#order)
- [tasks](IChecklist.md#tasks)

## Properties

### createdAt

• `Optional` **createdAt**: `number`

The timestamp indicating when the checklist was created.

#### Defined in

checklistsGroups/IChecklist.ts:26

___

### createdBy

• `Optional` **createdBy**: `string`

The identifier of the user who created the checklist.

#### Defined in

checklistsGroups/IChecklist.ts:31

___

### description

• `Optional` **description**: `string`

A description of the checklist.

#### Defined in

checklistsGroups/IChecklist.ts:15

___

### id

• **id**: `string`

The unique identifier of the checklist.

#### Defined in

checklistsGroups/IChecklist.ts:41

___

### name

• **name**: `string`

The name of the checklist.

#### Defined in

checklistsGroups/IChecklist.ts:10

___

### order

• **order**: `number`

The order of the checklist.

#### Defined in

checklistsGroups/IChecklist.ts:36

___

### tasks

• `Optional` **tasks**: `Record`<`string`, [`ITask`](ITask.md)\>

An object representing the tasks within the checklist.
Each task is identified by a string key and has a value of type `ITask`.

#### Defined in

checklistsGroups/IChecklist.ts:21
