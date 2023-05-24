import dayjs, { Dayjs } from "dayjs";
import type { RecurrenceObject } from "./RecurrenceObject";
import utc from "dayjs/plugin/utc.js";
import isoWeek from "dayjs/plugin/isoWeek.js";
import type { IRecurringTaskDoc } from "./IRecurringTaskDoc";
import dayjsRecur from "dayjs-recur";
import type { IRecurringTask } from "./IRecurringTask";
dayjs.extend(utc);
dayjs.extend(isoWeek);
dayjs.extend(dayjsRecur);

export interface Recurrence {
  every(
    unit: number | string | number[] | string[],
    measurementType?: string
  ): Recurrence;
  day(unit?: string): Recurrence;
  days(unit?: string): Recurrence;
  week(unit?: string): Recurrence;
  weeks(unit?: string): Recurrence;
  month(unit?: string): Recurrence;
  months(unit?: string): Recurrence;
  year(unit?: string): Recurrence;
  years(unit?: string): Recurrence;
  dayOfWeek(unit?: string): Recurrence;
  daysOfWeek(unit?: string): Recurrence;
  dayOfMonth(unit?: string): Recurrence;
  daysOfMonth(unit?: string): Recurrence;
  weekOfMonth(unit?: string): Recurrence;
  weeksOfMonth(unit?: string): Recurrence;
  weekOfYear(unit?: string): Recurrence;
  weeksOfYear(unit?: string): Recurrence;
  monthOfYear(unit?: string): Recurrence;
  monthsOfYear(unit?: string): Recurrence;
  forget(date: string): Recurrence;
  except(date: string): Recurrence;
  matches(date: string, outbound?: boolean): boolean;
  fromDate(date: string | Dayjs): Recurrence;
  next(): Dayjs;
  next(count: number): Dayjs[];
  previous(): Dayjs;
  previous(count: number): Dayjs[];
  all(): Dayjs[];
}

/**
 * Returns the Recurrence Rule from the Recurrence Object
 * @param param Recurrence Object
 */
export function getRecurrenceFromObject(
  recurrenceOptions: RecurrenceObject
): Recurrence {
  let recurrenceRule: Recurrence;

  switch (recurrenceOptions.unit) {
    case "daily":
      {
        const { interval, startingOn } = recurrenceOptions;
        recurrenceRule = dayjs.unix(startingOn).recur().every(interval).days();
      }
      break;
    case "weekly":
      {
        const { byWeekday, startingOn } = recurrenceOptions;
        recurrenceRule = (startingOn ? dayjs.unix(startingOn) : dayjs())
          .recur()
          .every(byWeekday)
          .daysOfWeek();
      }
      break;
    case "monthly":
      {
        const { onDay, startingOn } = recurrenceOptions;
        recurrenceRule = (startingOn ? dayjs.unix(startingOn) : dayjs())
          .recur()
          .every(onDay)
          .dayOfMonth();
      }
      break;
    default:
      throw new Error("Invalid unit");
  }

  return recurrenceRule;
}

/**
 * Get the next occurrence of the task
 */
export function getNextOccurrence(rt: IRecurringTask): dayjs.Dayjs {
  const recurrenceRule = getRecurrenceFromObject(rt.recurrence);
  recurrenceRule.fromDate(dayjs().subtract(1, "day"));
  const [nextOccurrence] = recurrenceRule.next(1);
  return nextOccurrence;
}

export function recurringTaskIsToday(rt: IRecurringTask): boolean {
  const recurrenceRule = getRecurrenceFromObject(rt.recurrence);
  return recurrenceRule.matches(dayjs().toISOString());
}

/**
 * Return an array of all recurring tasks extracted from the tasks object
 */
export function extractRecurringTasksArray(
  rtd: IRecurringTaskDoc
): [string, IRecurringTask][] {
  if (!rtd.tasks || Object.keys(rtd.tasks).length === 0) {
    return [];
  }
  return Object.entries(rtd.tasks).sort((a, b) => {
    const aNextOccurrence = getNextOccurrence(a[1]) ?? dayjs(0);
    const bNextOccurrence = getNextOccurrence(b[1]) ?? dayjs(0);
    return aNextOccurrence.diff(bNextOccurrence);
  });
}

/**
 * Task completion status
 */
export function recurringTaskIsCompleted(rt: IRecurringTask): boolean {
  return Boolean(rt.completed && rt.completed === dayjs().format("YYYY-MM-DD"));
}
