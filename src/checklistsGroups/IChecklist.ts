import type { ITask } from "../tasks";

/**
 * A checklist is a list of tasks that can be completed.
 */
export interface IChecklist {
  /**
   * The name of the checklist.
   */
  name: string;

  /**
   * A description of the checklist.
   */
  description?: string;

  /**
   * An object representing the tasks within the checklist.
   * Each task is identified by a string key and has a value of type `ITask`.
   */
  tasks?: Record<string, ITask>;

  /**
   * The timestamp indicating when the checklist was created.
   */
  createdAt?: number;

  /**
   * The identifier of the user who created the checklist.
   */
  createdBy?: string;

  /**
   * The order of the checklist.
   */
  order: number;

  /**
   * The unique identifier of the checklist.
   */
  id: string;
}
