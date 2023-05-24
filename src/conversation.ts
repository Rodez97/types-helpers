import type { PrivacyLevel } from "./utils";

/**
 * Represents a conversation in the application.
 */
export interface IConversation {
  id: string;
  locationId: string;
  organizationId: string;
  name: string;
  locationName: string;
  description?: string;
  position?: string;
  createdAt: number;
  updatedAt?: number;
  privacyLevel: PrivacyLevel;
  members: Record<
    string,
    {
      name: string;
      avatar?: string;
      muted: boolean;
    }
  >;
  guests?: string[];
  recentMessage?: number;
}
