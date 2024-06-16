import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';

const meta = {
  component: Avatar,
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    image: 'https://api.multiavatar.com/Binx Bond.svg',
    username: 'Luis Carlos',
  },
};

export const WithFallback: Story = {
  args: {
    image: 'https://api.multiavatar.com/Binx Bond.sv',
    username: 'Luis Carlos',
  },
};
