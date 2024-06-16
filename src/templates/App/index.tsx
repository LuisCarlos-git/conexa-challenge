import { useProfessional } from '@/context/Professional';
import { ProfessionalCard } from './components/ProfessionalCard';
import { Button, Scheduler } from '@/components';
import { useState } from 'react';
import { SCHEDULE_LIST } from './constants/scheduleList';
import { useSchedule } from '@/context/Schedule';
import { ISchedule } from '@/types/entities/schedule';

export function TemplateApp() {
  const { professional } = useProfessional();
  const { reserveTime } = useSchedule();

  const [reserveTimeDialogOpen, setReserveTimeDialogOpen] = useState(false);

  function handleToggleReserveTimeDialog() {
    setReserveTimeDialogOpen((prevState) => !prevState);
  }

  async function handleReserveTime(schedule: ISchedule) {
    if (professional === null) return;
    await reserveTime({
      professional,
      schedule,
    });
  }

  return (
    professional && (
      <div className="w-full mx-auto max-w-[900px] mt-[52px]">
        <ProfessionalCard data={professional} />
        <Button className="w-44" onClick={handleToggleReserveTimeDialog}>
          Reserve time
        </Button>
        <Scheduler
          onClose={handleToggleReserveTimeDialog}
          open={reserveTimeDialogOpen}
          schedules={SCHEDULE_LIST}
          onSaveSchedule={handleReserveTime}
        />
      </div>
    )
  );
}
