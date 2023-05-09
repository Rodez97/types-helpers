[@cuttinboard-solutions/types-helpers](README.md) / Exports

# @cuttinboard-solutions/types-helpers

## Table of contents

### Enumerations

- [PrivacyLevel](enums/PrivacyLevel.md)
- [RoleAccessLevels](enums/RoleAccessLevels.md)

### Classes

- [Shift](classes/Shift.md)

### Interfaces

- [CustomerData](interfaces/CustomerData.md)
- [IBoard](interfaces/IBoard.md)
- [IChecklist](interfaces/IChecklist.md)
- [IChecklistGroup](interfaces/IChecklistGroup.md)
- [IConversation](interfaces/IConversation.md)
- [ICuttinboardUser](interfaces/ICuttinboardUser.md)
- [ICuttinboard\_File](interfaces/ICuttinboard_File.md)
- [IDirectMessage](interfaces/IDirectMessage.md)
- [IEmployee](interfaces/IEmployee.md)
- [IEmployeesDocument](interfaces/IEmployeesDocument.md)
- [ILocation](interfaces/ILocation.md)
- [ILocationAddress](interfaces/ILocationAddress.md)
- [ILocationLimits](interfaces/ILocationLimits.md)
- [ILocationSettings](interfaces/ILocationSettings.md)
- [INote](interfaces/INote.md)
- [INotifications](interfaces/INotifications.md)
- [IOrganizationEmployee](interfaces/IOrganizationEmployee.md)
- [IOrganizationKey](interfaces/IOrganizationKey.md)
- [IPrimaryShiftData](interfaces/IPrimaryShiftData.md)
- [IRecurringTask](interfaces/IRecurringTask.md)
- [IRecurringTaskDoc](interfaces/IRecurringTaskDoc.md)
- [IScheduleDoc](interfaces/IScheduleDoc.md)
- [IScheduleSettings](interfaces/IScheduleSettings.md)
- [IShift](interfaces/IShift.md)
- [ITask](interfaces/ITask.md)
- [IUtensil](interfaces/IUtensil.md)
- [ManagerPermissions](interfaces/ManagerPermissions.md)
- [Price](interfaces/Price.md)
- [Product](interfaces/Product.md)
- [PublishProps](interfaces/PublishProps.md)
- [Recurrence](interfaces/Recurrence.md)
- [Recurring](interfaces/Recurring.md)
- [Subscription](interfaces/Subscription.md)
- [SubscriptionItem](interfaces/SubscriptionItem.md)
- [TaxRate](interfaces/TaxRate.md)
- [WeeklyAvailability](interfaces/WeeklyAvailability.md)

### Type Aliases

- [BaseUser](modules.md#baseuser)
- [BoardCollection](modules.md#boardcollection)
- [BoardUpdate](modules.md#boardupdate)
- [ChatPaths](modules.md#chatpaths)
- [ContactUpdate](modules.md#contactupdate)
- [EmergencyContact](modules.md#emergencycontact)
- [EmployeeLocationInfo](modules.md#employeelocationinfo)
- [IMessage](modules.md#imessage)
- [LocationSubscriptionStatus](modules.md#locationsubscriptionstatus)
- [MessageProviderMessagingType](modules.md#messageprovidermessagingtype)
- [Organization](modules.md#organization)
- [OrganizationRole](modules.md#organizationrole)
- [ParsedMedia](modules.md#parsedmedia)
- [ProfileUpdate](modules.md#profileupdate)
- [RealtimeDatabaseData](modules.md#realtimedatabasedata)
- [Recipient](modules.md#recipient)
- [RecurrenceObject](modules.md#recurrenceobject)
- [RegisterProps](modules.md#registerprops)
- [Sender](modules.md#sender)
- [ShiftWage](modules.md#shiftwage)
- [UtensilChange](modules.md#utensilchange)
- [WageDataByDay](modules.md#wagedatabyday)
- [WageDataRecord](modules.md#wagedatarecord)
- [WageOptions](modules.md#wageoptions)
- [WeekInfo](modules.md#weekinfo)
- [WeekSchedule](modules.md#weekschedule)
- [WeekSummary](modules.md#weeksummary)

### Variables

- [ANALYTICS\_EVENTS](modules.md#analytics_events)
- [AVAILABILITY\_TIME\_FORMAT](modules.md#availability_time_format)
- [DefaultScheduleSettings](modules.md#defaultschedulesettings)
- [MAX\_DOCUMENTS](modules.md#max_documents)
- [MAX\_FILE\_SIZE](modules.md#max_file_size)
- [MAX\_FILE\_SIZE\_STORAGE](modules.md#max_file_size_storage)
- [POSITIONS](modules.md#positions)
- [SHIFTFORMAT](modules.md#shiftformat)
- [STRIPE\_PRICE\_ID](modules.md#stripe_price_id)
- [STRIPE\_PRODUCT\_ID](modules.md#stripe_product_id)
- [WEEKFORMAT](modules.md#weekformat)
- [imageRegex](modules.md#imageregex)
- [mediaUrlRegex](modules.md#mediaurlregex)
- [videoRegex](modules.md#videoregex)
- [youtubeRegex](modules.md#youtuberegex)

### Functions

- [CompareRoles](modules.md#compareroles)
- [allDMBadges](modules.md#alldmbadges)
- [checkEmployeePositions](modules.md#checkemployeepositions)
- [extractRecurringTasksArray](modules.md#extractrecurringtasksarray)
- [generateChatPaths](modules.md#generatechatpaths)
- [getAllConversationBadges](modules.md#getallconversationbadges)
- [getChecklistsArray](modules.md#getchecklistsarray)
- [getChecklistsSummary](modules.md#getchecklistssummary)
- [getConversationBadges](modules.md#getconversationbadges)
- [getDMBadge](modules.md#getdmbadge)
- [getEmployeeFullName](modules.md#getemployeefullname)
- [getEmployeeHourlyWage](modules.md#getemployeehourlywage)
- [getLocationAccessStatus](modules.md#getlocationaccessstatus)
- [getLocationPositions](modules.md#getlocationpositions)
- [getLocationScheduleSettings](modules.md#getlocationschedulesettings)
- [getLocationStoragePath](modules.md#getlocationstoragepath)
- [getLocationUsage](modules.md#getlocationusage)
- [getNextOccurrence](modules.md#getnextoccurrence)
- [getRecurrenceFromObject](modules.md#getrecurrencefromobject)
- [getScheduleBadges](modules.md#getschedulebadges)
- [getTasksArray](modules.md#gettasksarray)
- [getTasksSummary](modules.md#gettaskssummary)
- [parseMediaFromText](modules.md#parsemediafromtext)
- [privacyLevelToString](modules.md#privacyleveltostring)
- [recurringTaskIsCompleted](modules.md#recurringtaskiscompleted)
- [recurringTaskIsToday](modules.md#recurringtaskistoday)
- [roleToString](modules.md#roletostring)
- [sortChecklistOrTask](modules.md#sortchecklistortask)
- [sortTasks](modules.md#sorttasks)

## Type Aliases

### BaseUser

Ƭ **BaseUser**: `Omit`<[`ICuttinboardUser`](interfaces/ICuttinboardUser.md), ``"customerId"`` \| ``"subscriptionId"`` \| ``"paymentMethods"``\>

Represents the base user properties, excluding specific fields related to Stripe integration.

#### Defined in

account.ts:55

___

### BoardCollection

Ƭ **BoardCollection**: ``"notes"`` \| ``"files"``

Represents the collection types for a board.

#### Defined in

board.ts:6

___

### BoardUpdate

Ƭ **BoardUpdate**: `Object`

Represents the properties for updating a board.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `name?` | `string` |
| `position?` | `string` |

#### Defined in

board.ts:31

___

### ChatPaths

Ƭ **ChatPaths**: `Object`

Represents the paths for a chat.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `messagesPath` | `string` |
| `storagePath` | `string` |
| `usersPath` | `string` |

#### Defined in

message.ts:26

___

### ContactUpdate

Ƭ **ContactUpdate**: `Object`

Represents the properties for updating user contacts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `contactComments?` | `string` |
| `emergencyContact?` | { `name?`: `string` ; `phoneNumber?`: `string`  } |
| `emergencyContact.name?` | `string` |
| `emergencyContact.phoneNumber?` | `string` |
| `phoneNumber?` | `string` |
| `preferredName?` | `string` |

#### Defined in

account.ts:42

___

### EmergencyContact

Ƭ **EmergencyContact**: `Object`

Represents an emergency contact.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `phoneNumber` | `string` |

#### Defined in

account.ts:6

___

### EmployeeLocationInfo

Ƭ **EmployeeLocationInfo**: `Object`

Interface representing additional information about an employee's location.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `employeeDataComments?` | `string` |
| `employeeDocuments?` | `Record`<`string`, `string`\> |
| `mainPosition?` | `string` |
| `permissions?` | [`ManagerPermissions`](interfaces/ManagerPermissions.md) |
| `positions?` | `string`[] |
| `role` | [`RoleAccessLevels`](enums/RoleAccessLevels.md) |
| `startDate` | `number` |
| `wagePerPosition?` | `Record`<`string`, `number`\> |
| `weeklyAvailability?` | `Record`<`number`, [`WeeklyAvailability`](interfaces/WeeklyAvailability.md)\> |

#### Defined in

employee/EmployeeLocationInfo.ts:6

___

### IMessage

Ƭ **IMessage**: `Object`

Represents a message in a chat.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `createdAt` | `number` |
| `image?` | `string` |
| `status?` | ``"pending"`` \| ``"sent"`` |
| `system?` | `boolean` |
| `systemType?` | ``"start"`` \| ``"other"`` |
| `text` | `string` |
| `user` | [`Sender`](modules.md#sender) |

#### Defined in

message.ts:4

___

### LocationSubscriptionStatus

Ƭ **LocationSubscriptionStatus**: ``"incomplete"`` \| ``"incomplete_expired"`` \| ``"trialing"`` \| ``"active"`` \| ``"past_due"`` \| ``"canceled"`` \| ``"unpaid"``

Represents the subscription status of a location.

#### Defined in

location.ts:6

___

### MessageProviderMessagingType

Ƭ **MessageProviderMessagingType**: `Object`

Represents the messaging type for a message provider.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chatId` | `string` |
| `type` | ``"dm"`` \| ``"conversation"`` |

#### Defined in

message.ts:18

___

### Organization

Ƭ **Organization**: `Object`

Represents an organization.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cancellationDate` | `number` |
| `customerId` | `string` |
| `hadMultipleLocations?` | `boolean` |
| `limits` | { `storage`: `string`  } |
| `limits.storage` | `string` |
| `locations` | `number` |
| `storageUsed` | `number` |
| `subItemId` | `string` |
| `subscriptionId` | `string` |
| `subscriptionStatus` | ``"incomplete"`` \| ``"incomplete_expired"`` \| ``"trialing"`` \| ``"active"`` \| ``"past_due"`` \| ``"canceled"`` \| ``"unpaid"`` |

#### Defined in

Organization.ts:4

___

### OrganizationRole

Ƭ **OrganizationRole**: [`ADMIN`](enums/RoleAccessLevels.md#admin) \| [`OWNER`](enums/RoleAccessLevels.md#owner) \| ``"employee"``

Represents the possible organization roles.

#### Defined in

account.ts:14

___

### ParsedMedia

Ƭ **ParsedMedia**: `Object`

Represents parsed media information.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"image"`` \| ``"video"`` \| ``"youtube"`` |
| `url` | `string` |

#### Defined in

message.ts:74

___

### ProfileUpdate

Ƭ **ProfileUpdate**: `Object`

Represents the properties for updating a user's profile.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `avatar?` | `string` |
| `birthDate?` | `number` |
| `lastName` | `string` |
| `name` | `string` |

#### Defined in

account.ts:32

___

### RealtimeDatabaseData

Ƭ **RealtimeDatabaseData**<`T`\>: { [K in keyof T]: T[K] \| null }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

utils/TypeHelpers.ts:1

___

### Recipient

Ƭ **Recipient**: [`Sender`](modules.md#sender)

Represents a recipient of a message.

#### Defined in

message.ts:44

___

### RecurrenceObject

Ƭ **RecurrenceObject**: { `interval`: `number` ; `startingOn`: `number` ; `unit`: ``"daily"``  } \| { `byWeekday`: (``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6``)[] ; `startingOn?`: `number` ; `unit`: ``"weekly"``  } \| { `onDay`: `number` ; `startingOn?`: `number` ; `unit`: ``"monthly"``  }

Represents different types of recurrence patterns for tasks.

#### Defined in

recurringTasks/RecurrenceObject.ts:4

___

### RegisterProps

Ƭ **RegisterProps**: `Object`

Represents the properties required for user registration.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `lastName` | `string` |
| `name` | `string` |
| `password` | `string` |

#### Defined in

account.ts:22

___

### Sender

Ƭ **Sender**: `Object`

Represents a sender or recipient of a message.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `avatar?` | `string` |
| `name` | `string` |

#### Defined in

message.ts:35

___

### ShiftWage

Ƭ **ShiftWage**: `Object`

Represents wage information for a shift.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `normalHours` | `number` | The number of normal hours worked. |
| `normalWage` | `number` | The wage for normal hours worked. |
| `overtimeHours` | `number` | The number of overtime hours worked. |
| `overtimeWage` | `number` | The wage for overtime hours worked. |
| `totalHours` | `number` | The total number of hours worked. |
| `totalWage` | `number` | The total wage for the shift. |

#### Defined in

schedule/Shift.ts:68

___

### UtensilChange

Ƭ **UtensilChange**: `Object`

Represents a change in utensil quantity.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `date` | `number` |
| `quantity` | `number` |
| `reason?` | `string` |
| `user` | { `userId`: `string` ; `userName`: `string`  } |
| `user.userId` | `string` |
| `user.userName` | `string` |

#### Defined in

utensil.ts:21

___

### WageDataByDay

Ƭ **WageDataByDay**: `Object`

Wage and hour data for an employee for a given ISO week day number.

#### Index signature

▪ [weekday: `number`]: { `normalHours`: `number` ; `normalWage`: `number` ; `overtimeHours`: `number` ; `overtimeWage`: `number` ; `people`: `number` ; `totalHours`: `number` ; `totalShifts`: `number` ; `totalWage`: `number`  }

#### Defined in

schedule/ShiftData.ts:12

___

### WageDataRecord

Ƭ **WageDataRecord**: `Object`

Represents wage data for a shift.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `shifts` | `Map`<`string`, { `isoWeekDay`: `number` ; `wageData`: [`ShiftWage`](modules.md#shiftwage)  }\> | Map of shift IDs to wage data and ISO weekday. |
| `summary` | [`WageDataByDay`](modules.md#wagedatabyday) | The summary of wage data by day. |

#### Defined in

schedule/Shift.ts:48

___

### WageOptions

Ƭ **WageOptions**: `Object`

Represents options for wage calculations.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hoursLimit` | `number` | The limit of hours for wage calculation. |
| `mode` | ``"weekly"`` \| ``"daily"`` | The mode of wage calculation ("weekly" or "daily"). |
| `multiplier` | `number` | The multiplier for wage calculation. |

#### Defined in

schedule/Shift.ts:30

___

### WeekInfo

Ƭ **WeekInfo**: `Object`

Represents information about a week.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `end` | `Dayjs` | The end date of the week. |
| `start` | `Dayjs` | The start date of the week. |
| `week` | `number` | The week number. |
| `year` | `number` | The year of the week. |

#### Defined in

schedule/Shift.ts:8

___

### WeekSchedule

Ƭ **WeekSchedule**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `shifts` | [`IShift`](interfaces/IShift.md)[] |
| `summary` | [`IScheduleDoc`](interfaces/IScheduleDoc.md) |

#### Defined in

schedule/ShiftData.ts:4

___

### WeekSummary

Ƭ **WeekSummary**: `Object`

Total summary of a week's worth of shifts.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `byDay` | [`WageDataByDay`](modules.md#wagedatabyday) | Summary of each day of the week. |
| `total` | { `laborPercentage`: `number` ; `normalHours`: `number` ; `normalWage`: `number` ; `overtimeHours`: `number` ; `overtimeWage`: `number` ; `projectedSales`: `number` ; `totalHours`: `number` ; `totalPeople`: `number` ; `totalShifts`: `number` ; `totalWage`: `number`  } | Summary of the whole week. |
| `total.laborPercentage` | `number` | Percentage of wages spent on labor relative to projected sales. |
| `total.normalHours` | `number` | The hours worked without overtime. |
| `total.normalWage` | `number` | The amount of money earned without overtime. |
| `total.overtimeHours` | `number` | The hours worked with overtime. |
| `total.overtimeWage` | `number` | The amount of money earned in overtime hours. |
| `total.projectedSales` | `number` | Total projected sales for the week. |
| `total.totalHours` | `number` | The total hours worked. - This is the sum of normalHours and overtimeHours. |
| `total.totalPeople` | `number` | How many people are scheduled to work. |
| `total.totalShifts` | `number` | How may shifts are scheduled for this week. |
| `total.totalWage` | `number` | The total amount of money earned. |

#### Defined in

schedule/WeekSummary.ts:7

## Variables

### ANALYTICS\_EVENTS

• `Const` **ANALYTICS\_EVENTS**: `string`[]

The list of analytics events.

#### Defined in

utils/CONSTANTS.ts:75

___

### AVAILABILITY\_TIME\_FORMAT

• `Const` **AVAILABILITY\_TIME\_FORMAT**: ``"h:mm A"``

The format for displaying availability time, using hour:minute AM/PM format.

#### Defined in

utils/CONSTANTS.ts:14

___

### DefaultScheduleSettings

• `Const` **DefaultScheduleSettings**: [`IScheduleSettings`](interfaces/IScheduleSettings.md)

The default schedule settings.

#### Defined in

schedule/ScheduleSettings.ts:57

___

### MAX\_DOCUMENTS

• `Const` **MAX\_DOCUMENTS**: ``20``

The maximum number of documents allowed.

#### Defined in

utils/CONSTANTS.ts:60

___

### MAX\_FILE\_SIZE

• `Const` **MAX\_FILE\_SIZE**: `number`

The maximum file size allowed in bytes (8MB).

#### Defined in

utils/CONSTANTS.ts:65

___

### MAX\_FILE\_SIZE\_STORAGE

• `Const` **MAX\_FILE\_SIZE\_STORAGE**: `number`

The maximum file size allowed for storage in bytes (50MB).

#### Defined in

utils/CONSTANTS.ts:70

___

### POSITIONS

• `Const` **POSITIONS**: `string`[]

Default positions.

#### Defined in

utils/CONSTANTS.ts:19

___

### SHIFTFORMAT

• `Const` **SHIFTFORMAT**: ``"DD-MM-YYYY HH:mm"``

The format for shift representation, using day-month-year hour:minute format.

#### Defined in

utils/CONSTANTS.ts:9

___

### STRIPE\_PRICE\_ID

• `Const` **STRIPE\_PRICE\_ID**: ``"price_1LzJiRCYVoOESVglTGNse4Wr"``

The price ID for Stripe integration.

#### Defined in

utils/CONSTANTS.ts:55

___

### STRIPE\_PRODUCT\_ID

• `Const` **STRIPE\_PRODUCT\_ID**: ``"prod_MINsulkDhsnMys"``

The product ID for Stripe integration.

#### Defined in

utils/CONSTANTS.ts:50

___

### WEEKFORMAT

• `Const` **WEEKFORMAT**: ``"[W]-W-YYYY"``

The format for displaying the week identifier, using week-year format.

#### Defined in

utils/CONSTANTS.ts:4

___

### imageRegex

• `Const` **imageRegex**: `RegExp`

Regular expression for matching image URLs.

#### Defined in

message.ts:49

___

### mediaUrlRegex

• `Const` **mediaUrlRegex**: `RegExp`

Regular expression for matching media URLs (images, videos, and YouTube videos).

#### Defined in

message.ts:66

___

### videoRegex

• `Const` **videoRegex**: `RegExp`

Regular expression for matching video URLs.

#### Defined in

message.ts:54

___

### youtubeRegex

• `Const` **youtubeRegex**: `RegExp`

Regular expression for matching YouTube video URLs.

#### Defined in

message.ts:60

## Functions

### CompareRoles

▸ **CompareRoles**(`userRole`, `employeeRole`): `boolean`

Compares two role access levels to determine if the user role has lower access than the employee role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userRole` | [`RoleAccessLevels`](enums/RoleAccessLevels.md) | The role access level of the user. |
| `employeeRole` | [`RoleAccessLevels`](enums/RoleAccessLevels.md) | The role access level of the employee. |

#### Returns

`boolean`

`true` if the user role has lower access, `false` otherwise.

#### Defined in

utils/RoleAccessLevels.ts:18

___

### allDMBadges

▸ **allDMBadges**(`notifications`): `number`

Returns the total number of badges for all direct messages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notifications` | [`INotifications`](interfaces/INotifications.md) | The notification object containing direct message badges. |

#### Returns

`number`

The total number of badges for all direct messages.

#### Defined in

notifications/notificationsUtils.ts:8

___

### checkEmployeePositions

▸ **checkEmployeePositions**(`employee`, `positions`): `boolean`

Checks if an employee has any of the specified positions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `employee` | [`IEmployee`](interfaces/IEmployee.md) | The employee object. |
| `positions` | `string`[] | An array of positions to check against. |

#### Returns

`boolean`

A boolean indicating if the employee has any of the specified positions.

#### Defined in

employee/Employee.ts:68

___

### extractRecurringTasksArray

▸ **extractRecurringTasksArray**(`rtd`): [`string`, [`IRecurringTask`](interfaces/IRecurringTask.md)][]

Return an array of all recurring tasks extracted from the tasks object

#### Parameters

| Name | Type |
| :------ | :------ |
| `rtd` | [`IRecurringTaskDoc`](interfaces/IRecurringTaskDoc.md) |

#### Returns

[`string`, [`IRecurringTask`](interfaces/IRecurringTask.md)][]

#### Defined in

recurringTasks/recurringTaskHelpers.ts:105

___

### generateChatPaths

▸ **generateChatPaths**(`messagingType`, `uid`): [`ChatPaths`](modules.md#chatpaths)

Generates chat paths based on the messaging type and user ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messagingType` | [`MessageProviderMessagingType`](modules.md#messageprovidermessagingtype) | The messaging type. |
| `uid` | `string` | The user ID. |

#### Returns

[`ChatPaths`](modules.md#chatpaths)

The chat paths.

#### Defined in

message.ts:109

___

### getAllConversationBadges

▸ **getAllConversationBadges**(`notifications`): `number`

Returns the total number of badges for all conversations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notifications` | [`INotifications`](interfaces/INotifications.md) | The notification object containing conversation badges. |

#### Returns

`number`

The total number of badges for all conversations.

#### Defined in

notifications/notificationsUtils.ts:68

___

### getChecklistsArray

▸ **getChecklistsArray**(`checklistObject`): [`IChecklist`](interfaces/IChecklist.md)[]

Convert the checklists object in the checklist group to an array and sort them by order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `checklistObject` | [`IChecklistGroup`](interfaces/IChecklistGroup.md) | The checklist group object. |

#### Returns

[`IChecklist`](interfaces/IChecklist.md)[]

An array of checklists.

#### Defined in

checklistsGroups/checklistGroupUtils.ts:10

___

### getChecklistsSummary

▸ **getChecklistsSummary**(`checklistObject`): `Object`

Get a summary of the completion status of all the tasks in the checklists of this group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `checklistObject` | [`IChecklistGroup`](interfaces/IChecklistGroup.md) | The checklist group object. |

#### Returns

`Object`

An object containing the total number of tasks and the number of completed tasks.

| Name | Type |
| :------ | :------ |
| `completed` | `number` |
| `total` | `number` |

#### Defined in

checklistsGroups/checklistGroupUtils.ts:26

___

### getConversationBadges

▸ **getConversationBadges**(`notifications`, `convId`): `number`

Returns the number of badges for a specific conversation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notifications` | [`INotifications`](interfaces/INotifications.md) | The notification object containing conversation badges. |
| `convId` | `string` | The ID of the conversation. |

#### Returns

`number`

The number of badges for the specified conversation.

#### Defined in

notifications/notificationsUtils.ts:52

___

### getDMBadge

▸ **getDMBadge**(`notifications`, `dmId`): `number`

Returns the number of badges for a specific direct message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notifications` | [`INotifications`](interfaces/INotifications.md) | The notification object containing direct message badges. |
| `dmId` | `string` | The ID of the direct message. |

#### Returns

`number`

The number of badges for the specified direct message.

#### Defined in

notifications/notificationsUtils.ts:26

___

### getEmployeeFullName

▸ **getEmployeeFullName**(`employee`): `string`

Retrieves the full name of an employee.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `employee` | [`ICuttinboardUser`](interfaces/ICuttinboardUser.md) | The employee object. |

#### Returns

`string`

The full name of the employee.

#### Defined in

employee/Employee.ts:37

___

### getEmployeeHourlyWage

▸ **getEmployeeHourlyWage**(`employee`, `position`): `number`

Retrieves the hourly wage of an employee for a specific position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `employee` | [`IEmployee`](interfaces/IEmployee.md) | The employee object. |
| `position` | `string` | The position for which to retrieve the hourly wage. |

#### Returns

`number`

The hourly wage of the employee for the specified position.

#### Defined in

employee/Employee.ts:47

___

### getLocationAccessStatus

▸ **getLocationAccessStatus**(`location`): ``"inactive"`` \| ``"error"`` \| ``"canceled"`` \| ``"active"``

Retrieves the access status of a location based on its subscription status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`ILocation`](interfaces/ILocation.md) | The location object. |

#### Returns

``"inactive"`` \| ``"error"`` \| ``"canceled"`` \| ``"active"``

The access status ("active", "inactive", "canceled", or "error").

#### Defined in

location.ts:100

___

### getLocationPositions

▸ **getLocationPositions**(`location`): `string`[]

Retrieves the positions associated with a location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`ILocation`](interfaces/ILocation.md) | The location object. |

#### Returns

`string`[]

An array of positions.

#### Defined in

location.ts:68

___

### getLocationScheduleSettings

▸ **getLocationScheduleSettings**(`location`): [`IScheduleSettings`](interfaces/IScheduleSettings.md)

Retrieves the schedule settings for a location.
If the location does not have schedule settings, the default schedule settings are returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`ILocation`](interfaces/ILocation.md) | The location object. |

#### Returns

[`IScheduleSettings`](interfaces/IScheduleSettings.md)

The schedule settings.

#### Defined in

location.ts:87

___

### getLocationStoragePath

▸ **getLocationStoragePath**(`location`): `string`

Retrieves the storage path for a location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`ILocation`](interfaces/ILocation.md) | The location object. |

#### Returns

`string`

The storage path.

#### Defined in

location.ts:77

___

### getLocationUsage

▸ **getLocationUsage**(`location`): `Object`

Retrieves the usage information of a location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`ILocation`](interfaces/ILocation.md) | The location object. |

#### Returns

`Object`

The usage information.

| Name | Type |
| :------ | :------ |
| `employeesCount` | `number` |
| `employeesLimit` | `number` |
| `storageLimit` | `number` |
| `storageUsed` | `number` |

#### Defined in

location.ts:118

___

### getNextOccurrence

▸ **getNextOccurrence**(`rt`): `dayjs.Dayjs`

Get the next occurrence of the task

#### Parameters

| Name | Type |
| :------ | :------ |
| `rt` | [`IRecurringTask`](interfaces/IRecurringTask.md) |

#### Returns

`dayjs.Dayjs`

#### Defined in

recurringTasks/recurringTaskHelpers.ts:90

___

### getRecurrenceFromObject

▸ **getRecurrenceFromObject**(`recurrenceOptions`): [`Recurrence`](interfaces/Recurrence.md)

Returns the Recurrence Rule from the Recurrence Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `recurrenceOptions` | [`RecurrenceObject`](modules.md#recurrenceobject) |

#### Returns

[`Recurrence`](interfaces/Recurrence.md)

#### Defined in

recurringTasks/recurringTaskHelpers.ts:50

___

### getScheduleBadges

▸ **getScheduleBadges**(`notifications`): `number`

Returns the number of badges for scheduling.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notifications` | [`INotifications`](interfaces/INotifications.md) | The notification object containing scheduling badges. |

#### Returns

`number`

The number of badges for scheduling.

#### Defined in

notifications/notificationsUtils.ts:42

___

### getTasksArray

▸ **getTasksArray**(`checklist`): [`ITask`](interfaces/ITask.md)[]

Convert the tasks object in the checklist to an array and sort them by order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `checklist` | [`IChecklist`](interfaces/IChecklist.md) | The checklist object. |

#### Returns

[`ITask`](interfaces/ITask.md)[]

An array of tasks.

#### Defined in

checklistsGroups/checklistUtils.ts:27

___

### getTasksSummary

▸ **getTasksSummary**(`checklist`): `Object`

Get a summary of the completion status of the tasks in the checklist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `checklist` | [`IChecklist`](interfaces/IChecklist.md) | The checklist object. |

#### Returns

`Object`

An object containing the total number of tasks and the number of completed tasks.

| Name | Type |
| :------ | :------ |
| `completed` | `number` |
| `total` | `number` |

#### Defined in

checklistsGroups/checklistUtils.ts:41

___

### parseMediaFromText

▸ **parseMediaFromText**(`str`): [`ParsedMedia`](modules.md#parsedmedia)[] \| ``null``

Parses media URLs from a text string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The text string to parse. |

#### Returns

[`ParsedMedia`](modules.md#parsedmedia)[] \| ``null``

An array of parsed media objects, or null if no media URLs were found.

#### Defined in

message.ts:84

___

### privacyLevelToString

▸ **privacyLevelToString**(`privacyLevel`): `string`

Converts a privacy level enum value to its corresponding string representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `privacyLevel` | [`PrivacyLevel`](enums/PrivacyLevel.md) | The privacy level enum value. |

#### Returns

`string`

The string representation of the privacy level.

#### Defined in

utils/PrivacyLevel.ts:24

___

### recurringTaskIsCompleted

▸ **recurringTaskIsCompleted**(`rt`): `boolean`

Task completion status

#### Parameters

| Name | Type |
| :------ | :------ |
| `rt` | [`IRecurringTask`](interfaces/IRecurringTask.md) |

#### Returns

`boolean`

#### Defined in

recurringTasks/recurringTaskHelpers.ts:121

___

### recurringTaskIsToday

▸ **recurringTaskIsToday**(`rt`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rt` | [`IRecurringTask`](interfaces/IRecurringTask.md) |

#### Returns

`boolean`

#### Defined in

recurringTasks/recurringTaskHelpers.ts:97

___

### roleToString

▸ **roleToString**(`role`): `string`

Converts a role access level to its corresponding string representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `role` | [`RoleAccessLevels`](enums/RoleAccessLevels.md) | The role access level. |

#### Returns

`string`

The string representation of the role access level.

#### Defined in

utils/RoleAccessLevels.ts:30

___

### sortChecklistOrTask

▸ **sortChecklistOrTask**(`data`, `mode`): ([`IChecklist`](interfaces/IChecklist.md) \| [`ITask`](interfaces/ITask.md))[] \| `undefined`

Sort an array of checklists or tasks based on their order property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | ([`ITask`](interfaces/ITask.md) \| [`IChecklist`](interfaces/IChecklist.md))[] | The array of checklists or tasks to be sorted. |
| `mode` | ``"desc"`` \| ``"asc"`` | The sorting mode, either "asc" for ascending or "desc" for descending. |

#### Returns

([`IChecklist`](interfaces/IChecklist.md) \| [`ITask`](interfaces/ITask.md))[] \| `undefined`

The sorted array of checklists or tasks, or undefined if the input is undefined.

#### Defined in

checklistsGroups/checklistUtils.ts:10

___

### sortTasks

▸ **sortTasks**(`tasks`): `Record`<`string`, [`ITask`](interfaces/ITask.md)\> \| `undefined`

Sorts tasks based on their order property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tasks` | `Record`<`string`, [`ITask`](interfaces/ITask.md)\> | The tasks to be sorted. |

#### Returns

`Record`<`string`, [`ITask`](interfaces/ITask.md)\> \| `undefined`

The sorted tasks as a new object.

#### Defined in

tasks/tasksUtils.ts:8
