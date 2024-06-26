import React, { useCallback } from 'react';

import { ScheduleContext } from './context';
import { scheduleServices } from '@/services/schedules';
import { IReserveTimes } from '@/types/services/schedules';
import { sleep } from '@/utils';

export function ScheduleProvider({ children }: { children: React.ReactNode }) {
  const reserveTime = useCallback(async (schedule: IReserveTimes) => {
    try {
      await sleep();
      await scheduleServices.reserveSession(schedule);
    } catch {
      console.error('failed to create a reserve');
    }
  }, []);

  return (
    <ScheduleContext.Provider value={{ reserveTime }}>
      {children}
    </ScheduleContext.Provider>
  );
}
