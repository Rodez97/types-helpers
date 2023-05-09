[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / IChecklistGroup

# Interface: IChecklistGroup

A Checklist group is a group of checklists linked to a location.

## Table of contents

### Properties

- [checklists](IChecklistGroup.md#checklists)
- [createdAt](IChecklistGroup.md#createdat)
- [id](IChecklistGroup.md#id)
- [locationId](IChecklistGroup.md#locationid)
- [refPath](IChecklistGroup.md#refpath)
- [updatedAt](IChecklistGroup.md#updatedat)

## Properties

### checklists

• `Optional` **checklists**: `Object`

An object representing the checklists within the checklist group.
Each checklist is identified by a string key and has a value of type `IChecklist`.

#### Index signature

▪ [key: `string`]: [`IChecklist`](IChecklist.md)

#### Defined in

checklistsGroups/IChecklistGroup.ts:16

___

### createdAt

• **createdAt**: `number`

The timestamp indicating when the checklist group was created.

#### Defined in

checklistsGroups/IChecklistGroup.ts:23

___

### id

• **id**: `string`

The unique identifier of the checklist group.

#### Defined in

checklistsGroups/IChecklistGroup.ts:38

___

### locationId

• **locationId**: `string`

The identifier of the location associated with the checklist group.

#### Defined in

checklistsGroups/IChecklistGroup.ts:10

___

### refPath

• **refPath**: `string`

The reference path of the checklist group.

#### Defined in

checklistsGroups/IChecklistGroup.ts:33

___

### updatedAt

• `Optional` **updatedAt**: `number`

The timestamp indicating when the checklist group was last updated.

#### Defined in

checklistsGroups/IChecklistGroup.ts:28
