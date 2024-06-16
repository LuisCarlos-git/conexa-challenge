import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from '.';

describe('<Button />', () => {
  it('should render base element', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeInTheDocument();
  });
});
