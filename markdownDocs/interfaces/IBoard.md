[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / IBoard

# Interface: IBoard

Represents a board in the application.

## Table of contents

### Properties

- [createdAt](IBoard.md#createdat)
- [description](IBoard.md#description)
- [details](IBoard.md#details)
- [global](IBoard.md#global)
- [id](IBoard.md#id)
- [name](IBoard.md#name)
- [refPath](IBoard.md#refpath)
- [updatedAt](IBoard.md#updatedat)

## Properties

### createdAt

• **createdAt**: `number`

#### Defined in

board.ts:17

___

### description

• `Optional` **description**: `string`

#### Defined in

board.ts:15

___

### details

• **details**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `admins?` | `string`[] |
| `members?` | `string`[] |
| `parentId` | `string` |
| `position?` | `string` |
| `privacyLevel` | [`PrivacyLevel`](../enums/PrivacyLevel.md) |

#### Defined in

board.ts:19

___

### global

• `Optional` **global**: `boolean`

#### Defined in

board.ts:16

___

### id

• **id**: `string`

#### Defined in

board.ts:12

___

### name

• **name**: `string`

#### Defined in

board.ts:14

___

### refPath

• **refPath**: `string`

#### Defined in

board.ts:13

___

### updatedAt

• `Optional` **updatedAt**: `number`

#### Defined in

board.ts:18
