/**
 * Represents the access levels for roles.
 */
export enum RoleAccessLevels {
  OWNER = 0,
  ADMIN = 1,
  GENERAL_MANAGER = 2,
  MANAGER = 3,
  STAFF = 4,
}

/**
 * Compares two role access levels to determine if the user role has lower access than the employee role.
 * @param userRole - The role access level of the user.
 * @param employeeRole - The role access level of the employee.
 * @returns `true` if the user role has lower access, `false` otherwise.
 */
export const CompareRoles = (
  userRole: RoleAccessLevels,
  employeeRole: RoleAccessLevels
) => {
  return userRole < employeeRole;
};

/**
 * Converts a role access level to its corresponding string representation.
 * @param role - The role access level.
 * @returns The string representation of the role access level.
 */
export const roleToString = (role: RoleAccessLevels) => {
  const roleEntry = Object.entries(RoleAccessLevels).find(
    ([, n]) => n === role
  );
  return roleEntry ? roleEntry[0] : "STAFF";
};
