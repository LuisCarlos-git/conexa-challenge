import { useContext } from 'react';
import { ScheduleContext } from './context';

export function useSchedule() {
  const context = useContext(ScheduleContext);

  if (!context)
    throw new Error('useSchedule must be used within ScheduleProvider');

  return context;
}
