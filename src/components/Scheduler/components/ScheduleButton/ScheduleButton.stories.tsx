import { Meta, StoryObj } from '@storybook/react';
import { withActions } from '@storybook/addon-actions/decorator';
import { useArgs } from '@storybook/preview-api';

import { ScheduleButton } from '.';

const meta = {
  component: ScheduleButton,
  title: 'Components/Scheduler/ScheduleButton',
  decorators: [withActions],
} satisfies Meta<typeof ScheduleButton>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Defalut: Story = {
  argTypes: {
    isActive: {
      control: 'boolean',
    },
  },
  args: {
    children: '08:00',
    onClick: () => ({}),
    isActive: false,
  },

  render: function Render(args) {
    const [{ isActive }, updateArgs] = useArgs();

    function handleIsActive() {
      updateArgs({ isActive: !args.isActive });
    }
    return (
      <ScheduleButton onClick={handleIsActive} isActive={isActive}>
        08:00
      </ScheduleButton>
    );
  },
};
