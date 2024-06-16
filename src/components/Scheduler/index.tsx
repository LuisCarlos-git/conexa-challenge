import { useState } from 'react';
import { DatePicker } from '../DatePicker';
import { Dialog } from '../Dialog';
import { ScheduleButton } from './components/ScheduleButton';
import { format } from 'date-fns';

import * as styles from './styles';

type Schedule = {
  label: string;
  value: string;
  inUse: boolean;
};

type SchedulerProps = {
  open: boolean;
  onClose: () => void;
  onSaveSchedule: (date: string, schedules: Schedule) => void;
  schedules: Schedule[];
};

export function Scheduler({
  onClose,
  onSaveSchedule,
  open,
  schedules,
}: SchedulerProps) {
  const [activeSchedule, setActiveSchedule] = useState<Schedule | null>(() => {
    return schedules.find((item) => item.inUse) ?? null;
  });
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  function handleAddScheduleInActiveList(schedule: Schedule) {
    setActiveSchedule({ ...schedule, inUse: true });
  }

  function handleSelectDate(date: Date) {
    setActiveSchedule(null);
    setSelectedDate(date);
  }

  function handleOnSaveSchedule() {
    if (activeSchedule === null) return;

    console.log('its here 2');
    onSaveSchedule(format(selectedDate, 'dd-MM-yyyy'), activeSchedule);
  }

  return (
    <Dialog open={open} onClose={onClose} title="Schedule your session!">
      <div className="max-w-fit grid grid-cols-2 gap-8 mt-4">
        <DatePicker
          value={selectedDate}
          onSelectDate={(date) => handleSelectDate(date ?? new Date())}
        />
        <div className=" h-fit flex gap-2 flex-wrap">
          {schedules.map((schedule) => (
            <ScheduleButton
              key={schedule.value}
              isActive={activeSchedule?.value === schedule.value}
              onClick={() => handleAddScheduleInActiveList(schedule)}
            >
              {schedule.label}
            </ScheduleButton>
          ))}
        </div>
      </div>
      <button
        className={styles.saveScheduleButtonCss()}
        onClick={handleOnSaveSchedule}
      >
        Save schedule
      </button>
    </Dialog>
  );
}
