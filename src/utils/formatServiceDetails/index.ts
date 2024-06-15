type FormatServiceDetailsProps = Record<'serviceTime' | 'servicePrice', number>;

/**
 * Formats the service price to USD currency and converts the service time to a readable string.
 * If the service time is greater than 60, it is converted to hours.
 *
 * @param {number} serviceTime - The time of the service in minutes.
 * @param {number} servicePrice - The price of the service.
 * @returns {string} The formatted string with price in USD and service time in minutes or hours.
 */
export function formatServiceDetails({
  serviceTime,
  servicePrice,
}: FormatServiceDetailsProps): string {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(servicePrice);

  let formattedTime: string;
  if (serviceTime > 60) {
    const hours = (serviceTime / 60).toFixed();
    formattedTime = `${hours} hours`;
  } else {
    formattedTime = `${serviceTime} minutes`;
  }

  return `${formattedPrice} / ${formattedTime}`;
}
