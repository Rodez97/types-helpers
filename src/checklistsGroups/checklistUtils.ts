import type { ITask } from "../tasks/ITask";
import type { IChecklist } from "./IChecklist";

/**
 * Sort an array of checklists or tasks based on their order property.
 * @param data - The array of checklists or tasks to be sorted.
 * @param mode - The sorting mode, either "asc" for ascending or "desc" for descending.
 * @returns The sorted array of checklists or tasks, or undefined if the input is undefined.
 */
export function sortChecklistOrTask(
  data: (IChecklist | ITask)[],
  mode: "asc" | "desc"
): (IChecklist | ITask)[] | undefined {
  if (!data) {
    return;
  }
  return data.sort((a, b) => {
    return mode === "asc" ? a.order - b.order : b.order - a.order;
  });
}

/**
 * Convert the tasks object in the checklist to an array and sort them by order.
 * @param checklist - The checklist object.
 * @returns An array of tasks.
 */
export function getTasksArray(checklist: IChecklist): ITask[] {
  if (!checklist.tasks) {
    return [];
  }
  return Object.values(checklist.tasks).sort((a, b) => {
    return a.order - b.order;
  });
}

/**
 * Get a summary of the completion status of the tasks in the checklist.
 * @param checklist - The checklist object.
 * @returns An object containing the total number of tasks and the number of completed tasks.
 */
export function getTasksSummary(checklist: IChecklist): {
  total: number;
  completed: number;
} {
  // Initialize the summary object with zero values
  const summary = {
    total: 0,
    completed: 0,
  };

  const tasksArray = getTasksArray(checklist);

  // If there are no tasks, return the empty summary object
  if (tasksArray.length === 0) {
    return summary;
  }

  // Loop through the tasks and increment the total and completed counters
  tasksArray.forEach((task) => {
    summary.total++;
    if (task.status) {
      summary.completed++;
    }
  });

  // Return the summary object
  return summary;
}
