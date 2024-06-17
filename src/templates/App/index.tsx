import { useProfessional } from '@/context/Professional';
import { ProfessionalCard } from './components/ProfessionalCard';
import { Button, Scheduler } from '@/components';
import { useState } from 'react';
import { SCHEDULE_LIST } from './constants/scheduleList';
import { useSchedule } from '@/context/Schedule';
import { ISchedule } from '@/types/entities/schedule';
import { toast } from 'sonner';

export function TemplateApp() {
  const { professional } = useProfessional();
  const { reserveTime } = useSchedule();

  const [reserveTimeDialogOpen, setReserveTimeDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleToggleReserveTimeDialog() {
    setReserveTimeDialogOpen((prevState) => !prevState);
  }

  async function handleReserveTime(schedule: ISchedule) {
    try {
      setLoading(true);
      await reserveTime({
        professional: professional!,
        schedule,
      });
    } catch {
      toast.error('failed create reserve');
    } finally {
      setLoading(false);
      setReserveTimeDialogOpen(false);
    }
  }

  return professional ? (
    <div className="w-full mx-auto max-w-[900px] mt-[52px] px-4">
      <ProfessionalCard data={professional} />
      <Button className="w-44" onClick={handleToggleReserveTimeDialog}>
        Reserve time
      </Button>
      <Scheduler
        onClose={handleToggleReserveTimeDialog}
        open={reserveTimeDialogOpen}
        schedules={SCHEDULE_LIST}
        onSaveSchedule={handleReserveTime}
        isLoading={loading}
      />
    </div>
  ) : (
    <div>
      <h1>Ajust your database/db.json</h1>
    </div>
  );
}
