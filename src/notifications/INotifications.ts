/**
 * Represents a collection of different types of notifications.
 */
export interface INotifications {
  /**
   * Notification counts for direct messages.
   */
  dm?: {
    [dmId: string]: number;
  };

  /**
   * Notification count for scheduling.
   */
  sch?: number;

  /**
   * Notification counts for conversations.
   */
  conv?: {
    [convId: string]: number;
  };

  /**
   * Notification count for claims.
   */
  claims?: number;
}
