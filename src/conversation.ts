import { PrivacyLevel } from "./utils";

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
  members: Record<string, boolean>;
  guests?: string[];
  recentMessage?: number;
}
