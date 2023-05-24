import type { IRecurringTask } from "./IRecurringTask";

/**
 * Interface for a recurring task document.
 */
export interface IRecurringTaskDoc {
  /**
   * The location ID associated with the recurring task document.
   */
  locationId: string;
  /**
   * An object containing recurring tasks, where the keys are task IDs and the values are `IRecurringTask` objects.
   */
  tasks?: {
    [key: string]: IRecurringTask;
  };
  /**
   * The timestamp indicating the creation date of the recurring task document.
   */
  createdAt: number;
  /**
   * The timestamp indicating the last update date of the recurring task document.
   */
  updatedAt?: number;
  /**
   * The reference path of the recurring task document.
   */
  refPath: string;
  /**
   * The ID of the recurring task document.
   */
  id: string;
}
