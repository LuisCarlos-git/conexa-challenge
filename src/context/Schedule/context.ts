import { IScheduleContext } from '@/types/contexts/schedule';
import { createContext } from 'react';

export const ScheduleContext = createContext<IScheduleContext | null>(null);
