import { ENDPOINTS } from '@/enums';
import { httpClient } from '@/lib/httpClient';

import { IReserveTimes, IScheduleServices } from '@/types/services/schedules';

class SchedulesServices implements IScheduleServices {
  async reserveSession(data: IReserveTimes): Promise<void> {
    await httpClient.post<void, IReserveTimes>(ENDPOINTS.SCHEDULES, data);
  }

  async getAllReserves(): Promise<IReserveTimes[]> {
    return await httpClient.get<IReserveTimes[]>(ENDPOINTS.SCHEDULES);
  }
}

export const scheduleServices = new SchedulesServices();
