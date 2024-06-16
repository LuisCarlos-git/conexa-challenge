import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

import { DatePicker } from '.';

describe('<ScheduleButton />', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('should render today date selected', async () => {
    const { getByText } = render(
      <DatePicker
        value={new Date('2024-06-17T00:00:00')}
        onSelectDate={vi.fn()}
      />
    );

    expect(getByText('17')).toHaveAttribute('aria-selected', 'true');
  });

  it('should call onSelectDate', async () => {
    const mockOnSelectDate = vi.fn();
    const { getByText } = render(
      <DatePicker
        value={new Date('2024-06-17T00:00:00')}
        onSelectDate={mockOnSelectDate}
      />
    );

    await user.click(getByText('16'));

    expect(mockOnSelectDate).toHaveBeenCalled();
  });

  it('should not select date before to day', async () => {
    const mockOnSelectDate = vi.fn();
    const { getByRole } = render(
      <DatePicker
        value={new Date('2023-06-17T00:00:00')}
        onSelectDate={mockOnSelectDate}
      />
    );

    await user.click(getByRole('gridcell', { name: '15' }));

    expect(mockOnSelectDate).not.toHaveBeenCalled();
  });
});
