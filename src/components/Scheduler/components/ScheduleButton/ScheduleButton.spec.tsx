import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

import { ScheduleButton } from '.';

const mockOnClick = vi.fn();

const scheduleButtonProps = {
  children: '08:00',
  onClick: mockOnClick,
  isActive: false,
};

describe('<ScheduleButton />', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('should call on click when button clicked', async () => {
    const { getByRole } = render(<ScheduleButton {...scheduleButtonProps} />);

    await user.click(getByRole('button', { name: /08:00/i }));

    expect(mockOnClick).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should render variant isActive', async () => {
    const { getByRole } = render(
      <ScheduleButton {...scheduleButtonProps} isActive />
    );

    expect(getByRole('button', { name: /08:00/i })).toHaveClass(
      'bg-slate-400 text-white hover:border-slate-800'
    );
  });
});
