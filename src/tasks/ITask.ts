/**
 * Represents a task with its properties.
 */
export interface ITask {
  /** The name of the task. */
  name: string;
  /** The status of the task. */
  status: boolean;
  /** The timestamp indicating when the task was created. */
  createdAt: number;
  /** The order of the task. */
  order: number;
  /** The unique identifier of the task. */
  id: string;
}
