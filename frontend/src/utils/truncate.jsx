/**
 * Truncate a string to a specified length and append "..." if too long.
 *
 * @param {string} str - The string to truncate.
 * @param {number} n - The maximum allowed length. Defaults to 20.
 * @returns {string} - Truncated string.
 */
const truncate = (str, n = 20) =>
  str?.length > n ? str.substring(0, n - 1) + "..." : str;

export default truncate;
