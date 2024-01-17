import { DefaultScheduleSettings, IScheduleSettings } from "./schedule";
import { SubTier } from "./utils";

/**
 * Represents the subscription status of a location.
 */
export type LocationSubscriptionStatus =
  | "incomplete"
  | "incomplete_expired"
  | "trialing"
  | "active"
  | "past_due"
  | "canceled"
  | "unpaid"
  | "paused";

/**
 * Represents the settings for a location.
 */
export interface ILocationSettings {
  positions?: string[];
  schedule: IScheduleSettings;
}

/**
 * Represents the address information for a location.
 */
export interface ILocationAddress {
  addressLine?: string;
  city?: string;
  state?: string;
  zip?: string;
}

/**
 * Represents the limits for a location.
 */
export interface ILocationLimits {
  employees: number;
  storage: string;
}

/**
 * Represents a location in the application.
 */
export interface ILocation {
  name: string;
  address?: ILocationAddress;
  intId?: string;
  subscriptionStatus: LocationSubscriptionStatus;
  storageUsed: number;
  limits: ILocationLimits;
  organizationId: string;
  subscriptionId: string;
  subItemId: string;
  members: string[];
  supervisors?: string[];
  settings: ILocationSettings;
  createdAt: number;
  updatedAt?: number;
  refPath: string;
  id: string;
  tier: SubTier;
}

/**
 * Retrieves the positions associated with a location.
 * @param location The location object.
 * @returns An array of positions.
 */
export function getLocationPositions(location: ILocation) {
  return location.settings?.positions ?? [];
}

/**
 * Retrieves the storage path for a location.
 * @param location The location object.
 * @returns The storage path.
 */
export function getLocationStoragePath(location: ILocation) {
  return `locations/${location.id}`;
}

/**
 * Retrieves the schedule settings for a location.
 * If the location does not have schedule settings, the default schedule settings are returned.
 * @param location The location object.
 * @returns The schedule settings.
 */
export function getLocationScheduleSettings(location: ILocation) {
  if (location.settings?.schedule) {
    return location.settings.schedule;
  } else {
    return DefaultScheduleSettings;
  }
}

/**
 * Retrieves the access status of a location based on its subscription status.
 * @param location The location object.
 * @returns The access status ("active", "inactive", "canceled", or "error").
 */
export function getLocationAccessStatus({ subscriptionStatus }: ILocation) {
  if (["past_due", "unpaid"].includes(subscriptionStatus)) {
    return "inactive";
  }
  if (subscriptionStatus === "canceled") {
    return "canceled";
  }
  if (!["active", "trialing"].includes(subscriptionStatus)) {
    return "error";
  }
  return "active";
}

/**
 * Retrieves the usage information of a location.
 * @param location The location object.
 * @returns The usage information.
 */
export function getLocationUsage(location: ILocation) {
  return {
    employeesCount: Number(location.members?.length ?? 0),
    employeesLimit: Number(location.limits.employees ?? 0),
    storageUsed: Number(location.storageUsed ?? 0),
    storageLimit: Number(location.limits.storage ?? 0),
  };
}
