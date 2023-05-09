/**
 * Represents different types of recurrence patterns for tasks.
 */
export type RecurrenceObject =
  | {
      /**
       * The interval between each occurrence of the task.
       */
      interval: number;
      /**
       * The unit of recurrence, set to "daily".
       */
      unit: "daily";
      /**
       * The starting date of the recurrence.
       */
      startingOn: number;
    }
  | {
      /**
       * The unit of recurrence, set to "weekly".
       */
      unit: "weekly";
      /**
       * The starting date of the recurrence.
       */
      startingOn?: number;
      /**
       * The weekdays on which the task occurs.
       * An array of numbers (0-6) representing Sunday to Saturday.
       */
      byWeekday: (0 | 1 | 2 | 3 | 4 | 5 | 6)[];
    }
  | {
      /**
       * The unit of recurrence, set to "monthly".
       */
      unit: "monthly";
      /**
       * The starting date of the recurrence.
       */
      startingOn?: number;
      /**
       * The day of the month on which the task occurs.
       */
      onDay: number;
    };
