import { INotifications } from "./INotifications";

/**
 * Returns the total number of badges for all direct messages.
 * @param notifications - The notification object containing direct message badges.
 * @returns The total number of badges for all direct messages.
 */
export function allDMBadges(notifications: INotifications): number {
  if (!notifications.dm || Object.keys(notifications.dm).length === 0) {
    return 0;
  }

  const values = Object.values(notifications.dm);

  const total = values.reduce((acc, quantity) => acc + quantity, 0);

  return total;
}

/**
 * Returns the number of badges for a specific direct message.
 * @param notifications - The notification object containing direct message badges.
 * @param dmId - The ID of the direct message.
 * @returns The number of badges for the specified direct message.
 */
export function getDMBadge(
  notifications: INotifications,
  dmId: string
): number {
  if (!notifications.dm || !notifications.dm[dmId]) {
    return 0;
  }

  return notifications.dm[dmId];
}

/**
 * Returns the number of badges for scheduling.
 * @param notifications - The notification object containing scheduling badges.
 * @returns The number of badges for scheduling.
 */
export function getScheduleBadges(notifications: INotifications): number {
  return notifications.sch || 0;
}

/**
 * Returns the number of badges for a specific conversation.
 * @param notifications - The notification object containing conversation badges.
 * @param convId - The ID of the conversation.
 * @returns The number of badges for the specified conversation.
 */
export function getConversationBadges(
  notifications: INotifications,
  convId: string
): number {
  if (!notifications.conv || !notifications.conv[convId]) {
    return 0;
  }

  return notifications.conv[convId];
}

/**
 * Returns the total number of badges for all conversations.
 * @param notifications - The notification object containing conversation badges.
 * @returns The total number of badges for all conversations.
 */
export function getAllConversationBadges(
  notifications: INotifications
): number {
  if (!notifications.conv || Object.keys(notifications.conv).length === 0) {
    return 0;
  }

  return Object.values(notifications.conv).reduce((acc, quantity) => {
    return acc + quantity;
  }, 0);
}
