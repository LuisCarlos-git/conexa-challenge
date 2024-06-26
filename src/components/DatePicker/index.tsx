import { DayPicker } from 'react-day-picker';
import { enUS } from 'date-fns/locale';

type DatePickerProps = {
  value: Date | null;
  onSelectDate: (date?: Date) => void;
  onMonthChange?: () => void;
};

export function DatePicker({
  value,
  onSelectDate,
  onMonthChange,
}: DatePickerProps) {
  return (
    <DayPicker
      onMonthChange={onMonthChange}
      disabled={{
        before: new Date(),
      }}
      locale={enUS}
      selected={value ?? undefined}
      onSelect={onSelectDate}
      mode="single"
      classNames={{
        caption: 'flex items-center justify-between font-medium text-gray-600',
        nav: 'flex',
        nav_button_previous:
          'text-gray-600 flex items-center justify-center !bg-transparent',
        nav_button_next:
          'text-gray-600 flex items-center justify-center !bg-transparent',
        head_cell: 'uppercase text-xs text-gray-600 font-medium pt-1 pb-2',
        button: 'text-gray-700 w-10 h-10 hover:bg-zinc-200 rounded-full',
        day_today: 'bg-zinc-200 font-bold text-gray-600',
        day_selected: '!text-white font-medium !bg-primary-blue',
        caption_start: 'md:max-w-fit',
        day_disabled: 'opacity-60 hover:bg-white cursor-not-allowed',
        table: 'w-full',
      }}
    />
  );
}
