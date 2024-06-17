import { ProfessionalProvider } from '@/context/Professional';
import { ScheduleProvider } from '@/context/Schedule';
import { render } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import App from 'src/App';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mockReserveTime = vi.hoisted(() => vi.fn());
const mockToastError = vi.hoisted(() => vi.fn());
const mockUseProfessional = vi.hoisted(() => vi.fn());

vi.mock('@/context/Schedule', async (originalImport) => {
  const actual = await originalImport<typeof import('@/context/Schedule')>();

  return {
    ...actual,
    useSchedule: vi.fn().mockReturnValue({
      reserveTime: mockReserveTime,
    }),
  };
});

vi.mock('@/context/Professional', async (originalImport) => {
  const actual =
    await originalImport<typeof import('@/context/Professional')>();

  return {
    ...actual,
    useProfessional: mockUseProfessional,
  };
});

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

describe('<App />', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('should render base template', () => {
    mockUseProfessional.mockReturnValue({
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
    });
    const { baseElement } = render(
      <ProfessionalProvider>
        <ScheduleProvider>
          <App />
        </ScheduleProvider>
      </ProfessionalProvider>
    );

    expect(baseElement).toBeInTheDocument();
  });
  it('should open Scheduler', async () => {
    const { getByRole, queryByRole } = render(
      <ProfessionalProvider>
        <ScheduleProvider>
          <App />
        </ScheduleProvider>
      </ProfessionalProvider>
    );

    expect(queryByRole('dialog')).not.toBeInTheDocument();

    await user.click(getByRole('button', { name: 'Reserve time' }));

    expect(getByRole('dialog')).toBeInTheDocument();
  });

  it('should reserve schedule', async () => {
    const { getByRole } = render(
      <ProfessionalProvider>
        <ScheduleProvider>
          <App />
        </ScheduleProvider>
      </ProfessionalProvider>
    );

    const day = new Date().getDate();

    await user.click(getByRole('button', { name: 'Reserve time' }));
    await user.click(getByRole('gridcell', { name: String(day) }));
    await user.click(getByRole('button', { name: '08:00' }));
    await user.click(getByRole('button', { name: 'Save schedule' }));

    expect(mockReserveTime).toHaveBeenCalled();
  });

  it('should not reserve Scheduler', async () => {
    mockReserveTime.mockRejectedValue('');

    const { getByRole } = render(
      <ProfessionalProvider>
        <ScheduleProvider>
          <App />
        </ScheduleProvider>
      </ProfessionalProvider>
    );

    const day = new Date().getDate();

    await user.click(getByRole('button', { name: 'Reserve time' }));
    await user.click(getByRole('gridcell', { name: String(day) }));
    await user.click(getByRole('button', { name: '08:00' }));
    await user.click(getByRole('button', { name: 'Save schedule' }));

    expect(mockToastError).toHaveBeenCalled();
  });
  it('should not reserve schedule if not professional', async () => {
    mockUseProfessional.mockReturnValue({
      professional: null,
    });

    const { getByText } = render(
      <ProfessionalProvider>
        <ScheduleProvider>
          <App />
        </ScheduleProvider>
      </ProfessionalProvider>
    );

    expect(getByText('Ajust your database/db.json')).toBeInTheDocument();
  });
});
