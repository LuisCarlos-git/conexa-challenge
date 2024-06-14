import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Dialog } from '.';
import userEvent, { UserEvent } from '@testing-library/user-event';

describe('<Dialog />', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('should render content and title', () => {
    const { getByRole } = render(
      <Dialog open onClose={vi.fn()} title="Dialog title">
        <h1>Dialog content</h1>
      </Dialog>
    );

    expect(getByRole('heading', { name: 'Dialog content' }));
    expect(getByRole('heading', { name: 'Dialog title' }));
  });

  it('should call onClose when close button is clicked', async () => {
    const mockOnClose = vi.fn();
    const { getByRole } = render(
      <Dialog open onClose={mockOnClose} title="Dialog title">
        <h1>Dialog content</h1>
      </Dialog>
    );

    await user.click(getByRole('button', { name: 'close dialog' }));

    expect(mockOnClose).toHaveBeenCalled();
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
