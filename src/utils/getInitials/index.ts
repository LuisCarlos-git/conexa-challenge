/**
 * Gets the initials from the given username.
 * If the username contains more than one name, returns the initials of the first two names.
 * If the username contains only one name, returns the first letter of the name.
 *
 * @param {string} username - The full name of the user.
 * @returns {string} The initials based on the given username.
 */

export function getInitials(username: string): string {
  const nameParts = username.trim().split(/\s+/);

  if (nameParts.length > 1) {
    return nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase();
  } else {
    return nameParts[0].substring(0, 1).toUpperCase();
  }
}
