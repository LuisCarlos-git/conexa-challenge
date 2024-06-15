import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { StarRating } from '.';

describe('<StarRating />', () => {
  it('should render star rating', () => {
    const { baseElement } = render(<StarRating rating={3} />);

    expect(baseElement).toBeInTheDocument();
  });
});
