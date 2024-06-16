import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar } from '.';

describe('<Avatar />', () => {
  it('should render base element', () => {
    const { baseElement } = render(<Avatar username="Luis" />);
    expect(baseElement).toBeInTheDocument();
  });
});
