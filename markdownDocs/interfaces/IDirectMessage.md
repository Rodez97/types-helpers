[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / IDirectMessage

# Interface: IDirectMessage

Represents a direct message chat.

## Table of contents

### Properties

- [createdAt](IDirectMessage.md#createdat)
- [id](IDirectMessage.md#id)
- [members](IDirectMessage.md#members)
- [muted](IDirectMessage.md#muted)
- [onlyOneMember](IDirectMessage.md#onlyonemember)
- [recentMessage](IDirectMessage.md#recentmessage)
- [updatedAt](IDirectMessage.md#updatedat)

## Properties

### createdAt

• **createdAt**: `number`

#### Defined in

IDirectMessage.ts:11

___

### id

• **id**: `string`

#### Defined in

IDirectMessage.ts:7

___

### members

• **members**: `Record`<`string`, [`Sender`](../modules.md#sender)\>

#### Defined in

IDirectMessage.ts:8

___

### muted

• `Optional` **muted**: `string`[]

#### Defined in

IDirectMessage.ts:9

___

### onlyOneMember

• `Optional` **onlyOneMember**: `boolean`

Indicates if the chat has only one member.
If there is only one member, the chat has to be deleted when the user leaves.

#### Defined in

IDirectMessage.ts:17

___

### recentMessage

• `Optional` **recentMessage**: `number`

#### Defined in

IDirectMessage.ts:10

___

### updatedAt

• `Optional` **updatedAt**: `number`

#### Defined in

IDirectMessage.ts:12
