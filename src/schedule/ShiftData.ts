import type { IShift } from "./Shift";
import type { IScheduleDoc } from "./ScheduleDoc";

export type WeekSchedule = {
  shifts: IShift[];
  summary: IScheduleDoc;
};

/**
 * Wage and hour data for an employee for a given ISO week day number.
 */
export type WageDataByDay = {
  /**
   * ISO week day number
   */
  [weekday: number]: {
    /**
     * Number of hours worked without overtime
     */
    normalHours: number;
    /**
     * Number of overtime hours worked
     */
    overtimeHours: number;
    /**
     * The sum of the normal and overtime hours
     */
    totalHours: number;
    /**
     * The total wage for normal hours
     */
    normalWage: number;
    /**
     * The wage for overtime hours
     */
    overtimeWage: number;
    /**
     * The total wage for the day
     * - normalWage + overtimeWage
     */
    totalWage: number;
    /**
     * Number of shifts for the day
     */
    totalShifts: number;
    /**
     * How many people were scheduled for the day
     */
    people: number;
  };
};
