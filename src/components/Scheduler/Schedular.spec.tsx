import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Scheduler } from '.';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { format } from 'date-fns';

const schedules = [
  { id: '1', inUse: false, label: '08:00', value: '08:00' },
  { id: '2', inUse: false, label: '09:00', value: '09:00' },
  { id: '3', inUse: false, label: '10:00', value: '10:00' },
];

const schedulesWithInUse = [
  { id: '1', inUse: true, label: '08:00', value: '08:00' },
  { id: '2', inUse: false, label: '09:00', value: '09:00' },
  { id: '3', inUse: false, label: '10:00', value: '10:00' },
];

describe('<Scheduler />', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('should call onSaveSchedule', async () => {
    const mockOnSaveSchedule = vi.fn();
    const { getByRole } = render(
      <Scheduler
        open
        onClose={vi.fn()}
        onSaveSchedule={mockOnSaveSchedule}
        schedules={schedules}
      />
    );

    const dayPlusOne = new Date().getDate();
    const year = new Date().getFullYear();

    await user.click(getByRole('gridcell', { name: String(dayPlusOne) }));
    await user.click(getByRole('button', { name: '08:00' }));
    await user.click(getByRole('button', { name: 'Save schedule' }));

    expect(mockOnSaveSchedule).toHaveBeenCalled();
    expect(mockOnSaveSchedule).toHaveBeenCalledTimes(1);
    expect(mockOnSaveSchedule).toHaveBeenCalledWith(
      `${dayPlusOne}-06-${year}`,
      {
        id: '1',
        inUse: true,
        label: '08:00',
        value: '08:00',
      }
    );
  });

  it('should render default schedule selected', async () => {
    const mockOnSaveSchedule = vi.fn();
    const { getByRole } = render(
      <Scheduler
        open
        onClose={vi.fn()}
        onSaveSchedule={mockOnSaveSchedule}
        schedules={schedulesWithInUse}
      />
    );

    await user.click(getByRole('button', { name: 'Save schedule' }));

    expect(mockOnSaveSchedule).toHaveBeenCalled();
    expect(mockOnSaveSchedule).toHaveBeenCalledTimes(1);
    expect(mockOnSaveSchedule).toHaveBeenCalledWith(
      format(new Date(), 'dd-MM-yyyy'),
      {
        inUse: true,
        label: '08:00',
        value: '08:00',
      }
    );
  });

  it('should render button active', async () => {
    const { getByRole } = render(
      <Scheduler
        open
        onClose={vi.fn()}
        onSaveSchedule={vi.fn()}
        schedules={schedules}
      />
    );

    const button = getByRole('button', { name: '08:00' });

    await user.click(button);

    const activeClass = 'bg-slate-400 text-white hover:border-slate-800';

    expect(button).toHaveClass(activeClass);
  });

  it('should not call onSaveSchedule when activeList is empty', async () => {
    const mockOnSaveSchedule = vi.fn();

    const { getByRole } = render(
      <Scheduler
        open
        onClose={vi.fn()}
        onSaveSchedule={mockOnSaveSchedule}
        schedules={schedules}
      />
    );

    await user.click(getByRole('button', { name: 'Save schedule' }));

    expect(mockOnSaveSchedule).not.toHaveBeenCalled();
    expect(mockOnSaveSchedule).not.toHaveBeenCalledTimes(1);
  });
});
