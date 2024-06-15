export interface IReserveTimes {
  professional: string;
  selectedSchedules: string;
}

export interface IScheduleServices {
  reserveSession(data: IReserveTimes): Promise<void>;
}
