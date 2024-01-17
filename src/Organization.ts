import { SubTier } from "./utils";

/**
 * Represents an organization.
 */
export type Organization = {
  customerId: string;
  locations: number;
  subItemId: string;
  subscriptionId: string;
  cancellationDate?: number;
  subscriptionStatus:
    | "incomplete"
    | "incomplete_expired"
    | "trialing"
    | "active"
    | "past_due"
    | "canceled"
    | "unpaid"
    | "paused";
  hadMultipleLocations?: boolean;
  storageUsed: number;
  limits: {
    storage: string;
  };
  tier: SubTier;
};
