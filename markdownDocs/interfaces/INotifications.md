[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / INotifications

# Interface: INotifications

Represents a collection of different types of notifications.

## Table of contents

### Properties

- [claims](INotifications.md#claims)
- [conv](INotifications.md#conv)
- [dm](INotifications.md#dm)
- [sch](INotifications.md#sch)

## Properties

### claims

• `Optional` **claims**: `number`

Notification count for claims.

#### Defined in

notifications/INotifications.ts:27

___

### conv

• `Optional` **conv**: `Object`

Notification counts for conversations.

#### Index signature

▪ [convId: `string`]: `number`

#### Defined in

notifications/INotifications.ts:20

___

### dm

• `Optional` **dm**: `Object`

Notification counts for direct messages.

#### Index signature

▪ [dmId: `string`]: `number`

#### Defined in

notifications/INotifications.ts:8

___

### sch

• `Optional` **sch**: `number`

Notification count for scheduling.

#### Defined in

notifications/INotifications.ts:15
