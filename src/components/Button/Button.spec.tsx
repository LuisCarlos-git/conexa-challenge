import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '.';

vi.mock('lucide-react', async (originalImport) => {
  const actual = await originalImport<typeof import('lucide-react')>();

  return {
    ...actual,
    LoaderCircle: () => <div data-testid="loading" />,
  };
});

describe('<Button />', () => {
  it('should render base element', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render isLoading', () => {
    const { getByTestId } = render(<Button isLoading />);
    expect(getByTestId('loading')).toBeInTheDocument();
  });
});
