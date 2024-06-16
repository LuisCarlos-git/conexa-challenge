import { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  component: Button,
  title: 'Components/Button',
} satisfies Meta<typeof Button>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};
