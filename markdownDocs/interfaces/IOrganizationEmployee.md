[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / IOrganizationEmployee

# Interface: IOrganizationEmployee

Interface representing an employee within an organization.
Extends the `BaseUser` interface and includes the organization ID and role information.

## Hierarchy

- [`BaseUser`](../modules.md#baseuser)

  ↳ **`IOrganizationEmployee`**

## Table of contents

### Properties

- [avatar](IOrganizationEmployee.md#avatar)
- [contactComments](IOrganizationEmployee.md#contactcomments)
- [createdAt](IOrganizationEmployee.md#createdat)
- [email](IOrganizationEmployee.md#email)
- [emergencyContact](IOrganizationEmployee.md#emergencycontact)
- [id](IOrganizationEmployee.md#id)
- [lastName](IOrganizationEmployee.md#lastname)
- [name](IOrganizationEmployee.md#name)
- [organizationId](IOrganizationEmployee.md#organizationid)
- [phoneNumber](IOrganizationEmployee.md#phonenumber)
- [preferredName](IOrganizationEmployee.md#preferredname)
- [refPath](IOrganizationEmployee.md#refpath)
- [role](IOrganizationEmployee.md#role)
- [supervisingLocations](IOrganizationEmployee.md#supervisinglocations)
- [updatedAt](IOrganizationEmployee.md#updatedat)
- [userDocuments](IOrganizationEmployee.md#userdocuments)

## Properties

### avatar

• `Optional` **avatar**: `string`

#### Inherited from

BaseUser.avatar

#### Defined in

account.ts:64

___

### contactComments

• `Optional` **contactComments**: `string`

#### Inherited from

BaseUser.contactComments

#### Defined in

account.ts:75

___

### createdAt

• **createdAt**: `number`

#### Inherited from

BaseUser.createdAt

#### Defined in

account.ts:76

___

### email

• **email**: `string`

#### Inherited from

BaseUser.email

#### Defined in

account.ts:67

___

### emergencyContact

• `Optional` **emergencyContact**: [`EmergencyContact`](../modules.md#emergencycontact)

#### Inherited from

BaseUser.emergencyContact

#### Defined in

account.ts:74

___

### id

• **id**: `string`

#### Inherited from

BaseUser.id

#### Defined in

account.ts:79

___

### lastName

• **lastName**: `string`

#### Inherited from

BaseUser.lastName

#### Defined in

account.ts:66

___

### name

• **name**: `string`

#### Inherited from

BaseUser.name

#### Defined in

account.ts:65

___

### organizationId

• **organizationId**: `string`

#### Defined in

employee/Employee.ts:27

___

### phoneNumber

• `Optional` **phoneNumber**: `string`

#### Inherited from

BaseUser.phoneNumber

#### Defined in

account.ts:68

___

### preferredName

• `Optional` **preferredName**: `string`

#### Inherited from

BaseUser.preferredName

#### Defined in

account.ts:73

___

### refPath

• **refPath**: `string`

#### Inherited from

BaseUser.refPath

#### Defined in

account.ts:78

___

### role

• **role**: [`OWNER`](../enums/RoleAccessLevels.md#owner) \| [`ADMIN`](../enums/RoleAccessLevels.md#admin)

#### Defined in

employee/Employee.ts:28

___

### supervisingLocations

• `Optional` **supervisingLocations**: `string`[]

#### Defined in

employee/Employee.ts:29

___

### updatedAt

• `Optional` **updatedAt**: `number`

#### Inherited from

BaseUser.updatedAt

#### Defined in

account.ts:77

___

### userDocuments

• `Optional` **userDocuments**: `Record`<`string`, `string`\>

#### Inherited from

BaseUser.userDocuments

#### Defined in

account.ts:69
