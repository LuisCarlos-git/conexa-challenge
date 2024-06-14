import { Meta, StoryObj } from '@storybook/react';

import { ScheduleHeader } from '.';

const meta = {
  component: ScheduleHeader,
  title: 'Components/Scheduler/ScheduleHeader',
} satisfies Meta<typeof ScheduleHeader>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Defalut: Story = {};
