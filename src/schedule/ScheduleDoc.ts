import { WeekSummary } from "./WeekSummary";

/**
 * Represents the properties for publishing a schedule.
 */
export interface PublishProps {
  /**
   * The timestamp when the schedule was published.
   */
  publishedAt: number;
  /**
   * An optional array of recipient IDs for notification.
   */
  notificationRecipients?: string[];
}

/**
 * Represents a schedule document.
 */
export interface IScheduleDoc {
  /**
   * The ID of the schedule document.
   */
  id: string;
  /**
   * The year of the schedule.
   */
  year: number;
  /**
   * The week number of the schedule.
   */
  weekNumber: number;
  /**
   * The ID of the location associated with the schedule.
   */
  locationId: string;
  /**
   * The ID of the week.
   */
  weekId: string;
  /**
   * The projected sales for each day of the week.
   * It is a record where the key is the day number (0-6) and the value is the projected sales amount.
   */
  projectedSalesByDay?: Record<number, number>;
  /**
   * The summary information for the week's schedule.
   */
  scheduleSummary: WeekSummary;
  /**
   * The timestamp when the schedule document was created.
   */
  createdAt: number;
  /**
   * The timestamp when the schedule document was last updated.
   */
  updatedAt?: number;
  /**
   * The publishing data for the schedule.
   */
  publishData?: PublishProps;
  /**
   * The factor used for ordering the weeks.
   */
  weekOrderFactor: number;
}
