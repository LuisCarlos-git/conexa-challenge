import { Meta, StoryObj } from '@storybook/react';

import { Scheduler } from '.';
import { action } from '@storybook/addon-actions';

const meta = {
  component: Scheduler,
  title: 'Components/Scheduler',
} satisfies Meta<typeof Scheduler>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Defalut: Story = {
  args: {
    open: true,
    onClose: action('onClose'),
    onSaveSchedule: action('onSaveSchedule'),
    schedules: [
      { id: crypto.randomUUID(), inUse: false, label: '08:00', value: '08:00' },
      { id: crypto.randomUUID(), inUse: false, label: '09:00', value: '09:00' },
      { id: crypto.randomUUID(), inUse: false, label: '10:00', value: '10:00' },
    ],
  },
};

export const WithDefaltSchedule: Story = {
  args: {
    open: true,
    onClose: action('onClose'),
    onSaveSchedule: action('onSaveSchedule'),
    schedules: [
      { id: crypto.randomUUID(), inUse: false, label: '08:00', value: '08:00' },
      { id: crypto.randomUUID(), inUse: true, label: '09:00', value: '09:00' },
      { id: crypto.randomUUID(), inUse: false, label: '10:00', value: '10:00' },
    ],
  },
};
