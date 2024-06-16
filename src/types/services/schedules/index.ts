import { IProfessional } from '@/types/entities/professional';
import { ISchedule } from '@/types/entities/schedule';

export interface IReserveTimes {
  professional: IProfessional;
  schedule: ISchedule;
}

export interface IScheduleServices {
  reserveSession(data: IReserveTimes): Promise<void>;
  getAllReserves(): Promise<IReserveTimes[]>;
}
