import { useProfessional } from '@/context/Professional';
import { ProfessionalCard } from './components/ProfessionalCard';
import { Button, Scheduler } from '@/components';
import { useState } from 'react';

export function TemplateApp() {
  const { professional } = useProfessional();

  const [reserveTimeDialogOpen, setReserveTimeDialogOpen] = useState(false);

  function handleToggleReserveTimeDialog() {
    setReserveTimeDialogOpen((prevState) => !prevState);
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
          schedules={[
            { inUse: false, label: '08:00', value: '08:00' },
            { inUse: false, label: '09:00', value: '09:00' },
            { inUse: false, label: '10:00', value: '10:00' },
          ]}
          onSaveSchedule={console.log}
        />
      </div>
    )
  );
}
