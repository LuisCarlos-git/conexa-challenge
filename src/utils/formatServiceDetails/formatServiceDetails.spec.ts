import { describe, expect, it } from 'vitest';
import { formatServiceDetails } from '.';

describe('formatServiceDetails', () => {
  it('should return formatted service details with hours', () => {
    expect(
      formatServiceDetails({
        servicePrice: 200,
        serviceTime: 120,
      })
    ).toBe('$200.00 / 2 hours');
  });

  it('should return formatted service details with minutes', () => {
    expect(
      formatServiceDetails({
        servicePrice: 200,
        serviceTime: 40,
      })
    ).toBe('$200.00 / 40 minutes');
  });
});
