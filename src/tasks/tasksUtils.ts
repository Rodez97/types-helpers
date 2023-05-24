import type { ITask } from "./ITask";

/**
 * Sorts tasks based on their order property.
 * @param tasks - The tasks to be sorted.
 * @returns The sorted tasks as a new object.
 */
export function sortTasks(
  tasks: Record<string, ITask>
): Record<string, ITask> | undefined {
  if (!tasks) {
    return;
  }
  const sortedTasks: Record<string, ITask> = {};
  const taskKeys = Object.keys(tasks);
  taskKeys.sort((a, b) => {
    const taskA = tasks[a];
    const taskB = tasks[b];
    return taskA.order - taskB.order;
  });
  taskKeys.forEach((key) => {
    sortedTasks[key] = tasks[key];
  });
  return sortedTasks;
}
