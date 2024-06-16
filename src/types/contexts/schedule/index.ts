import { IProfessional } from '@/types/entities/professional';
import { ISchedule } from '@/types/entities/schedule';

export interface IScheduleContext {
  reserveTime(schedule: {
    professional: IProfessional;
    schedule: ISchedule;
  }): Promise<void>;
}
