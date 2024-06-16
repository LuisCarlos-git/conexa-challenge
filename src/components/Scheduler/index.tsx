import { useCallback, useEffect, useState } from 'react';
import { DatePicker } from '../DatePicker';
import { Dialog } from '../Dialog';
import { ScheduleButton } from './components/ScheduleButton';
import { format } from 'date-fns';

import { Button } from '../Button';
import { scheduleServices } from '@/services/schedules';

type Schedule = {
  id: string;
  label: string;
  value: string;
  inUse: boolean;
  date?: string;
};

type SchedulerProps = {
  open: boolean;
  onClose: () => void;
  onSaveSchedule: (schedules: Schedule) => void;
  schedules: Schedule[];
};

export function Scheduler({
  onClose,
  onSaveSchedule,
  open,
  schedules,
}: SchedulerProps) {
  const [activeSchedule, setActiveSchedule] = useState<Schedule | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [disabledAll, setDisabledAll] = useState(false);

  const verifyReserveToday = useCallback(async () => {
    try {
      if (!selectedDate) return;
      const reserves = await scheduleServices.getAllReserves();

      const hasReserveToday = reserves.find(
        (reserve) =>
          reserve.schedule.date === format(selectedDate, 'dd-MM-yyyy')
      );

      if (!hasReserveToday) {
        setDisabledAll(false);
        return;
      }

      setActiveSchedule(hasReserveToday.schedule);
      setDisabledAll(true);
    } catch {
      console.log('failed get all reserves');
    }
  }, [selectedDate]);

  useEffect(() => {
    verifyReserveToday();
  }, [verifyReserveToday]);

  function handleAddScheduleInActiveList(schedule: Schedule) {
    setActiveSchedule({ ...schedule, inUse: true });
  }

  function handleSelectDate(date: Date) {
    setActiveSchedule(null);
    setSelectedDate(date);
  }

  function handleOnSaveSchedule() {
    if (activeSchedule === null || selectedDate === null) return;

    onSaveSchedule({
      ...activeSchedule,
      date: format(selectedDate, 'dd-MM-yyyy'),
    });

    setDisabledAll(true);
  }

  function handleMounthChange() {
    setActiveSchedule(null);
    setDisabledAll(false);
    setSelectedDate(null);
  }

  return (
    <Dialog open={open} onClose={onClose} title="Schedule your session!">
      <div className="max-w-fit grid grid-cols-2 gap-8 mt-4">
        <DatePicker
          onMonthChange={handleMounthChange}
          value={selectedDate}
          onSelectDate={(date) => handleSelectDate(date ?? new Date())}
        />
        <div className=" h-fit flex gap-2 flex-wrap">
          {schedules.map((schedule) => (
            <ScheduleButton
              key={schedule.value}
              isActive={activeSchedule?.value === schedule.value}
              disabled={disabledAll}
              onClick={() => handleAddScheduleInActiveList(schedule)}
            >
              {schedule.label}
            </ScheduleButton>
          ))}
        </div>
      </div>
      <Button onClick={handleOnSaveSchedule}>Save schedule</Button>
    </Dialog>
  );
}
