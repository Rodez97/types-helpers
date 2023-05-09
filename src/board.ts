import { PrivacyLevel } from "./utils/PrivacyLevel";

/**
 * Represents the collection types for a board.
 */
export type BoardCollection = "notes" | "files";

/**
 * Represents a board in the application.
 */
export interface IBoard {
  id: string;
  refPath: string;
  name: string;
  description?: string;
  global?: boolean;
  createdAt: number;
  updatedAt?: number;
  details: {
    admins?: string[];
    members?: string[];
    position?: string;
    parentId: string;
    privacyLevel: PrivacyLevel;
  };
}

/**
 * Represents the properties for updating a board.
 */
export type BoardUpdate = {
  name?: string;
  description?: string;
  position?: string;
};
