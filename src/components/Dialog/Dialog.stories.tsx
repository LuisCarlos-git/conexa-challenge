import { Meta, StoryObj } from '@storybook/react';

import { Dialog } from '.';
import { DatePicker } from '../DatePicker';
import { ScheduleButton } from '../Scheduler/components/ScheduleButton';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';

const meta = {
  component: Dialog,
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Defalut: Story = {
  args: {
    open: false,
    onClose: action('onClose'),
    title: 'Schedule your session!',
    children: (
      <div className="max-w-fit grid grid-cols-2 gap-8 mt-4">
        <DatePicker value={new Date()} onSelectDate={console.log} />
        <div className=" h-fit flex gap-2 flex-wrap">
          {[
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
          ].map((schedule) => (
            <ScheduleButton onClick={console.log}>{schedule}</ScheduleButton>
          ))}
        </div>
      </div>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs();

    return (
      <>
        <button
          className="bg-primary-blue text-white font-bold px-4 py-2 rounded-sm"
          onClick={() => updateArgs({ open: true })}
        >
          New schedule
        </button>
        <Dialog
          {...args}
          open={open}
          onClose={() => updateArgs({ open: false })}
        >
          {args.children}
        </Dialog>
      </>
    );
  },
};
