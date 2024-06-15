import { describe, expect, it } from 'vitest';
import { getInitials } from '.';

describe('getInitials', () => {
  it('should return initials of the first two names in uppercase', () => {
    expect(getInitials('luis carlos')).toBe('LC');
  });

  it('should return initials of the first name in uppercase', () => {
    expect(getInitials('luis')).toBe('L');
  });
});
