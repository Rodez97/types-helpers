import { RoleAccessLevels } from "./utils";

/**
 * Represents an emergency contact.
 */
export type EmergencyContact = {
  name?: string;
  phoneNumber: string;
};

/**
 * Represents the possible organization roles.
 */
export type OrganizationRole =
  | RoleAccessLevels.ADMIN
  | RoleAccessLevels.OWNER
  | "employee";

/**
 * Represents the properties required for user registration.
 */
export type RegisterProps = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

/**
 * Represents the properties for updating a user's profile.
 */
export type ProfileUpdate = {
  name: string;
  lastName: string;
  birthDate?: number;
  avatar?: string;
};

/**
 * Represents the properties for updating user contacts.
 */
export type ContactUpdate = {
  phoneNumber?: string;
  preferredName?: string;
  emergencyContact?: {
    name?: string;
    phoneNumber?: string;
  };
  contactComments?: string;
};

/**
 * Represents the base user properties, excluding specific fields related to Stripe integration.
 */
export type BaseUser = Omit<
  ICuttinboardUser,
  "customerId" | "subscriptionId" | "paymentMethods"
>;

/**
 * Represents a user in the Cuttinboard system.
 */
export interface ICuttinboardUser {
  avatar?: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  userDocuments?: Record<string, string>;
  customerId?: string;
  subscriptionId?: string;
  paymentMethods?: string[];
  preferredName?: string;
  emergencyContact?: EmergencyContact;
  contactComments?: string;
  createdAt: number;
  updatedAt?: number;
  refPath: string;
  id: string;
  locations?: string[];
  organizations?: string[];
  // Organization ID -> location ID[]
  organizationsRelationship?: Record<string, string[]>;
}

/**
 * Represents the organization key, including role, organization ID, location ID, and optional positions.
 */
export interface IOrganizationKey {
  role: RoleAccessLevels;
  orgId: string;
  locId: string;
  pos?: string[];
}
