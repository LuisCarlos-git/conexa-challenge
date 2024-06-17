import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Scheduler } from '.';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { scheduleServices } from '@/services/schedules';
import { format } from 'date-fns';

const mockToastError = vi.hoisted(() => vi.fn());

vi.mock('sonner', async (originalImport) => {
  const actual = await originalImport<typeof import('sonner')>();

  return {
    ...actual,
    toast: {
      ...actual.toast,
      error: mockToastError,
    },
  };
});

const schedules = [
  { id: '1', inUse: false, label: '08:00', value: '08:00' },
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

    vi.spyOn(scheduleServices, 'getAllReserves').mockResolvedValue([
      {
        professional: {
          name: 'Luis Carlos',
          image: 'https://avatar.iran.liara.run/public/26',
          rating: 4,
          servicePrice: 200,
          serviceTime: 120,
          totalReviews: 150,
          profession: 'Psicologist',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        schedule: {
          id: '446aa213-d488-4089-90f2-6b40abd574a6',
          inUse: true,
          label: '08:00',
          value: '08:00',
          date: format(new Date(), 'dd-MM-yyyy'),
        },
      },
    ]);

    const { getByRole } = render(
      <Scheduler
        open
        onClose={vi.fn()}
        onSaveSchedule={mockOnSaveSchedule}
        schedules={schedules}
      />
    );

    const dayPlusOne = new Date().getDate() + 1;
    const year = new Date().getFullYear();

    await user.click(getByRole('gridcell', { name: String(dayPlusOne) }));
    await user.click(getByRole('button', { name: '08:00' }));
    await user.click(getByRole('button', { name: 'Save schedule' }));

    expect(mockOnSaveSchedule).toHaveBeenCalled();
    expect(mockOnSaveSchedule).toHaveBeenCalledTimes(1);
    expect(mockOnSaveSchedule).toHaveBeenCalledWith({
      id: '1',
      inUse: true,
      label: '08:00',
      value: '08:00',
      date: `${dayPlusOne}-06-${year}`,
    });
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

  it('should call get all reserves when change select date', async () => {
    const getAllreservesSpy = vi.spyOn(scheduleServices, 'getAllReserves');
    const mockOnSaveSchedule = vi.fn();

    const { getByRole } = render(
      <Scheduler
        open
        onClose={vi.fn()}
        onSaveSchedule={mockOnSaveSchedule}
        schedules={schedules}
      />
    );

    const dayPlusOne = new Date().getDate() + 1;

    await user.click(getByRole('gridcell', { name: String(dayPlusOne) }));

    expect(getAllreservesSpy).toHaveBeenCalled();
  });

  it('should call get all reserves and disabled all schedules', async () => {
    const day = new Date().getDate();

    vi.spyOn(scheduleServices, 'getAllReserves').mockResolvedValue([
      {
        professional: {
          name: 'Luis Carlos',
          image: 'https://avatar.iran.liara.run/public/26',
          rating: 4,
          servicePrice: 200,
          serviceTime: 120,
          totalReviews: 150,
          profession: 'Psicologist',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        schedule: {
          id: '446aa213-d488-4089-90f2-6b40abd574a6',
          inUse: true,
          label: '08:00',
          value: '08:00',
          date: format(new Date(), 'dd-MM-yyyy'),
        },
      },
    ]);

    const mockOnSaveSchedule = vi.fn();

    const { getByRole } = render(
      <Scheduler
        open
        onClose={vi.fn()}
        onSaveSchedule={mockOnSaveSchedule}
        schedules={schedules}
      />
    );

    await user.click(getByRole('gridcell', { name: String(day) }));

    expect(getByRole('button', { name: '08:00' })).toBeDisabled();
  });

  it('should render toast when failed request', async () => {
    const day = new Date().getDate();

    vi.spyOn(scheduleServices, 'getAllReserves').mockRejectedValue('failed');

    const mockOnSaveSchedule = vi.fn();

    const { getByRole } = render(
      <Scheduler
        open
        onClose={vi.fn()}
        onSaveSchedule={mockOnSaveSchedule}
        schedules={schedules}
      />
    );

    await user.click(getByRole('gridcell', { name: String(day) }));

    expect(mockToastError).toHaveBeenCalled();
    expect(mockToastError).toHaveBeenCalledTimes(1);
    expect(mockToastError).toHaveBeenCalledWith('failed get all reserves');
  });

  it('should call onClose', async () => {
    const mockOnClose = vi.fn();

    const { getByRole } = render(
      <Scheduler
        open
        onClose={mockOnClose}
        onSaveSchedule={vi.fn()}
        schedules={schedules}
      />
    );

    await user.click(getByRole('button', { name: 'close dialog' }));

    expect(mockOnClose).toHaveBeenCalled();
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
