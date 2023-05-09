import { RecurrenceObject } from "./RecurrenceObject";

/**
 * Interface for a recurring task.
 */
export interface IRecurringTask {
  /**
   * The name of the recurring task.
   */
  name: string;
  /**
   * The description of the recurring task.
   */
  description?: string;
  /**
   * The recurrence pattern of the task.
   */
  recurrence: RecurrenceObject;
  /**
   * The date when the task was last completed. It can be a string or null if the task has not been completed.
   */
  completed?: string | null;
}
