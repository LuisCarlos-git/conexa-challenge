/**
 * @returns {string} - The user-friendly timezone name
 */

export function getTimezone() {
  const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const date = new Date();
  const timezoneOffset = date.getTimezoneOffset();

  const offsetHours = Math.abs(timezoneOffset) / 60;

  const offsetSign = timezoneOffset > 0 ? '-' : '';
  const formattedOffset = `${offsetSign}${offsetHours}`;

  return `${timezoneName} (${formattedOffset})`;
}
