import dayjs, { Dayjs } from "dayjs";
import { WageDataByDay } from "./ShiftData";
import { SHIFTFORMAT } from "../utils";

/**
 * Represents information about a week.
 */
export type WeekInfo = {
  /**
   * The year of the week.
   */
  year: number;
  /**
   * The week number.
   */
  week: number;
  /**
   * The start date of the week.
   */
  start: Dayjs;
  /**
   * The end date of the week.
   */
  end: Dayjs;
};

/**
 * Represents options for wage calculations.
 */
export type WageOptions = {
  /**
   * The mode of wage calculation ("weekly" or "daily").
   */
  mode: "weekly" | "daily";
  /**
   * The limit of hours for wage calculation.
   */
  hoursLimit: number;
  /**
   * The multiplier for wage calculation.
   */
  multiplier: number;
};

/**
 * Represents wage data for a shift.
 */
export type WageDataRecord = {
  /**
   * The summary of wage data by day.
   */
  summary: WageDataByDay;
  /**
   * Map of shift IDs to wage data and ISO weekday.
   */
  shifts: Map<
    string,
    {
      wageData: ShiftWage;
      isoWeekDay: number;
    }
  >;
};

/**
 * Represents wage information for a shift.
 */
export type ShiftWage = {
  /**
   * The number of normal hours worked.
   */
  normalHours: number;
  /**
   * The number of overtime hours worked.
   */
  overtimeHours: number;
  /**
   * The total number of hours worked.
   */
  totalHours: number;
  /**
   * The wage for normal hours worked.
   */
  normalWage: number;
  /**
   * The wage for overtime hours worked.
   */
  overtimeWage: number;
  /**
   * The total wage for the shift.
   */
  totalWage: number;
};

/**
 * Represents the primary data of a shift.
 */
export interface IPrimaryShiftData {
  /**
   * The start time of the shift.
   */
  start: string;
  /**
   * The end time of the shift.
   */
  end: string;
  /**
   * The position of the employee during the shift.
   */
  position?: string;
  /**
   * Additional notes about the shift.
   */
  notes?: string;
  /**
   * The hourly wage for the shift.
   */
  hourlyWage?: number;
}

/**
 * Shift status and metadata.
 */
export interface IShift extends IPrimaryShiftData {
  id: string;
  status: "draft" | "published";
  pendingUpdate?: Partial<IPrimaryShiftData>;
  deleting?: boolean;
  updatedAt: number;
  locationName: string;
  locationId: string;
  weekId: string;
  employeeId: string;
  weekOrderFactor: number;
}

/**
 * Provides utility functions for working with shift dates.
 */
export class Shift {
  /**
   * Converts a string date to a Dayjs object.
   * @param date - The date string to convert.
   * @returns The Dayjs object representing the input date.
   */
  static toDate(date: string): Dayjs {
    return dayjs(date, SHIFTFORMAT);
  }

  /**
   * Converts a Date object to a string in the SHIFTFORMAT format.
   * @param date - The Date object to convert.
   * @returns The date string in the SHIFTFORMAT format.
   */
  static toString(date: Date): string {
    return dayjs(date).format(SHIFTFORMAT);
  }
}
