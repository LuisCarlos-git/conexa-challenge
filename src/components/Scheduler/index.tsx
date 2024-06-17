import { useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { toast } from 'sonner';

import { Dialog } from '../Dialog';
import { Button } from '../Button';
import { DatePicker } from '../DatePicker';
import { ScheduleButton } from './components/ScheduleButton';

import { scheduleServices } from '@/services/schedules';

import * as styles from './styles';

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
  isLoading?: boolean;
};

export function Scheduler({
  onClose,
  onSaveSchedule,
  open,
  schedules,
  isLoading,
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
      toast.error('failed get all reserves');
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
    if (activeSchedule === null || selectedDate === null) {
      toast.error('select date and one time!');
      return;
    }

    onSaveSchedule({
      ...activeSchedule,
      date: format(selectedDate, 'dd-MM-yyyy'),
    });

    setDisabledAll(true);
  }

  function reset() {
    setActiveSchedule(null);
    setDisabledAll(false);
    setSelectedDate(null);
  }

  function handleClose() {
    reset();
    onClose();
  }

  return (
    <Dialog open={open} onClose={handleClose} title="Schedule your session!">
      <div className={styles.contentCss()}>
        <DatePicker
          onMonthChange={reset}
          value={selectedDate}
          onSelectDate={(date) => handleSelectDate(date ?? new Date())}
        />
        <div className="h-fit flex gap-2 flex-wrap">
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
      <Button isLoading={isLoading} onClick={handleOnSaveSchedule}>
        Save schedule
      </Button>
    </Dialog>
  );
}
