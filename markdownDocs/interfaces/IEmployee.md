[@cuttinboard-solutions/types-helpers](../README.md) / [Exports](../modules.md) / IEmployee

# Interface: IEmployee

Interface representing an employee.
Extends the `BaseUser` interface and includes additional properties from `EmployeeLocationInfo`.

## Hierarchy

- [`BaseUser`](../modules.md#baseuser)

- [`EmployeeLocationInfo`](../modules.md#employeelocationinfo)

  ↳ **`IEmployee`**

## Table of contents

### Properties

- [avatar](IEmployee.md#avatar)
- [contactComments](IEmployee.md#contactcomments)
- [createdAt](IEmployee.md#createdat)
- [email](IEmployee.md#email)
- [emergencyContact](IEmployee.md#emergencycontact)
- [employeeDataComments](IEmployee.md#employeedatacomments)
- [employeeDocuments](IEmployee.md#employeedocuments)
- [id](IEmployee.md#id)
- [lastName](IEmployee.md#lastname)
- [mainPosition](IEmployee.md#mainposition)
- [name](IEmployee.md#name)
- [organizationId](IEmployee.md#organizationid)
- [permissions](IEmployee.md#permissions)
- [phoneNumber](IEmployee.md#phonenumber)
- [positions](IEmployee.md#positions)
- [preferredName](IEmployee.md#preferredname)
- [refPath](IEmployee.md#refpath)
- [role](IEmployee.md#role)
- [startDate](IEmployee.md#startdate)
- [updatedAt](IEmployee.md#updatedat)
- [userDocuments](IEmployee.md#userdocuments)
- [wagePerPosition](IEmployee.md#wageperposition)
- [weeklyAvailability](IEmployee.md#weeklyavailability)

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

### employeeDataComments

• `Optional` **employeeDataComments**: `string`

#### Inherited from

EmployeeLocationInfo.employeeDataComments

#### Defined in

employee/EmployeeLocationInfo.ts:10

___

### employeeDocuments

• `Optional` **employeeDocuments**: `Record`<`string`, `string`\>

#### Inherited from

EmployeeLocationInfo.employeeDocuments

#### Defined in

employee/EmployeeLocationInfo.ts:11

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

### mainPosition

• `Optional` **mainPosition**: `string`

#### Inherited from

EmployeeLocationInfo.mainPosition

#### Defined in

employee/EmployeeLocationInfo.ts:8

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

employee/Employee.ts:19

___

### permissions

• `Optional` **permissions**: [`ManagerPermissions`](ManagerPermissions.md)

#### Inherited from

EmployeeLocationInfo.permissions

#### Defined in

employee/EmployeeLocationInfo.ts:15

___

### phoneNumber

• `Optional` **phoneNumber**: `string`

#### Inherited from

BaseUser.phoneNumber

#### Defined in

account.ts:68

___

### positions

• `Optional` **positions**: `string`[]

#### Inherited from

EmployeeLocationInfo.positions

#### Defined in

employee/EmployeeLocationInfo.ts:13

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

• **role**: [`RoleAccessLevels`](../enums/RoleAccessLevels.md)

#### Inherited from

EmployeeLocationInfo.role

#### Defined in

employee/EmployeeLocationInfo.ts:12

___

### startDate

• **startDate**: `number`

#### Inherited from

EmployeeLocationInfo.startDate

#### Defined in

employee/EmployeeLocationInfo.ts:9

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

___

### wagePerPosition

• `Optional` **wagePerPosition**: `Record`<`string`, `number`\>

#### Inherited from

EmployeeLocationInfo.wagePerPosition

#### Defined in

employee/EmployeeLocationInfo.ts:7

___

### weeklyAvailability

• `Optional` **weeklyAvailability**: `Record`<`number`, [`WeeklyAvailability`](WeeklyAvailability.md)\>

#### Inherited from

EmployeeLocationInfo.weeklyAvailability

#### Defined in

employee/EmployeeLocationInfo.ts:14
