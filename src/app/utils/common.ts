/**
 * Formats a number into a currency string.
 * @param amount - The number to format
 * @param currency - The currency code (e.g., 'USD', 'PHP', etc.)
 * @param locale - The locale for formatting (default: 'en-US')
 * @returns The formatted currency string
 */
export const formatCurrency = (
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};

/**
 * Formats a date into a human-readable string.
 * @param date - The date to format (can be a Date object or a string)
 * @param locale - The locale for formatting (default: 'en-US')
 * @param options - Additional options for formatting (optional)
 * @returns The formatted date string
 */
export const formatDate = (
  date: Date | string,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
};
