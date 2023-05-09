import { RoleAccessLevels } from "../utils";

/**
 * Interface representing additional information about an employee's location.
 */
export type EmployeeLocationInfo = {
  wagePerPosition?: Record<string, number>;
  mainPosition?: string;
  startDate: number;
  employeeDataComments?: string;
  employeeDocuments?: Record<string, string>;
  role: RoleAccessLevels;
  positions?: string[];
  weeklyAvailability?: Record<number, WeeklyAvailability>;
  permissions?: ManagerPermissions;
};

/**
 * Interface representing the weekly availability of an employee.
 */
export interface WeeklyAvailability {
  isoWeekday: number;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  allDay?: boolean;
}

/**
 * Interface representing the manager permissions for an employee.
 */
export interface ManagerPermissions {
  // Employee
  canManageStaff?: boolean;
  canManageStaffDocuments?: boolean;
  // Schedule
  canManageSchedule?: boolean;
  canSeeWages?: boolean;
}
