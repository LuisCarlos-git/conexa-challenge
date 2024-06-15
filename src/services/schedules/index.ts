import { ENDPOINTS } from '@/enums';
import { httpClient } from '@/lib/httpClient';

import { IReserveTimes, IScheduleServices } from '@/types/services/schedules';

class SchedulesServices implements IScheduleServices {
  async reserveSession(data: IReserveTimes): Promise<void> {
    await httpClient.post<void, IReserveTimes>(ENDPOINTS.RESERVE_SESSION, data);
  }
}

export const scheduleServices = new SchedulesServices();
