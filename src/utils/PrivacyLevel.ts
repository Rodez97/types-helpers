/**
 * Represents the privacy levels for a board or conversation.
 */
export enum PrivacyLevel {
  /**
   * The board or conversation is public.
   */
  PUBLIC = 2,
  /**
   * The board or conversation is linked to a position.
   */
  POSITIONS = 1,
  /**
   * The board or conversation is private. Only members can view it.
   */
  PRIVATE = 0,
}

/**
 * Converts a privacy level enum value to its corresponding string representation.
 * @param privacyLevel - The privacy level enum value.
 * @returns The string representation of the privacy level.
 */
export function privacyLevelToString(privacyLevel: PrivacyLevel): string {
  switch (privacyLevel) {
    case PrivacyLevel.PUBLIC:
      return "PUBLIC";
    case PrivacyLevel.POSITIONS:
      return "POSITIONS";
    case PrivacyLevel.PRIVATE:
      return "PRIVATE";
  }
}
