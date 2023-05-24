import type { BaseUser, ICuttinboardUser } from "../account";
import { RoleAccessLevels } from "../utils/RoleAccessLevels";
import type { EmployeeLocationInfo } from "./EmployeeLocationInfo";

/**
 * Interface representing the employees document.
 */
export interface IEmployeesDocument {
  organizationId: string;
  employees?: Record<string, IEmployee>;
}

/**
 * Interface representing an employee.
 * Extends the `BaseUser` interface and includes additional properties from `EmployeeLocationInfo`.
 */
export interface IEmployee extends BaseUser, EmployeeLocationInfo {
  organizationId: string;
}

/**
 * Interface representing an employee within an organization.
 * Extends the `BaseUser` interface and includes the organization ID and role information.
 */
export interface IOrganizationEmployee extends BaseUser {
  organizationId: string;
  role: RoleAccessLevels.ADMIN | RoleAccessLevels.OWNER;
  supervisingLocations?: string[];
}

/**
 * Retrieves the full name of an employee.
 * @param employee - The employee object.
 * @returns The full name of the employee.
 */
export function getEmployeeFullName(employee: ICuttinboardUser): string {
  return `${employee.name} ${employee.lastName}`;
}

/**
 * Retrieves the hourly wage of an employee for a specific position.
 * @param employee - The employee object.
 * @param position - The position for which to retrieve the hourly wage.
 * @returns The hourly wage of the employee for the specified position.
 */
export function getEmployeeHourlyWage(
  employee: IEmployee,
  position: string
): number {
  if (
    !employee.positions ||
    !employee.positions.includes(position) ||
    !employee.wagePerPosition ||
    !employee.wagePerPosition[position]
  ) {
    return 0;
  }
  return employee.wagePerPosition[position];
}

/**
 * Checks if an employee has any of the specified positions.
 * @param employee - The employee object.
 * @param positions - An array of positions to check against.
 * @returns A boolean indicating if the employee has any of the specified positions.
 */
export function checkEmployeePositions(
  employee: IEmployee,
  positions: string[]
): boolean {
  if (!employee.positions) {
    return false;
  }
  return positions.some((position) => employee.positions?.includes(position));
}
