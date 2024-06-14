import { Meta, StoryObj } from '@storybook/react';
import { HourButton } from '.';

const meta = {
  component: HourButton,
  title: 'Components/Scheduler/HourButton',
} satisfies Meta<typeof HourButton>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Defalut: Story = {};
