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
  onSaveSchedule: (date: string, schedules: Schedule[]) => void;
  schedules: Schedule[];
};

export function Scheduler({
  onClose,
  onSaveSchedule,
  open,
  schedules,
}: SchedulerProps) {
  const [activeList, setActiveList] = useState<Schedule[]>(() => {
    const schedulesInUseSchedule = schedules.filter((item) => item.inUse);

    if (schedulesInUseSchedule.length) return schedulesInUseSchedule;

    return [];
  });
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  function handleAddScheduleInActiveList(schedule: Schedule) {
    const scheduleActive = activeList.findIndex(
      (item) => item.value === schedule.value
    );

    if (scheduleActive !== -1) {
      setActiveList((prevState) =>
        prevState.filter((item) => item.value !== schedule.value)
      );
      return;
    }

    setActiveList((prevState) => [...prevState, { ...schedule, inUse: true }]);
  }

  function hasItemInActiveList(value: string) {
    return activeList.some((item) => item.value === value);
  }

  function handleSelectDate(date: Date) {
    setSelectedDate(date);
  }

  function handleOnSaveSchedule() {
    if (!activeList.length) return;

    onSaveSchedule(format(selectedDate, 'dd-MM-yyyy'), activeList);
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
              isActive={hasItemInActiveList(schedule.value)}
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
