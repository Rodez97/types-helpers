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
    | "unpaid";
  hadMultipleLocations?: boolean;
  storageUsed: number;
  limits: {
    storage: string;
  };
};
