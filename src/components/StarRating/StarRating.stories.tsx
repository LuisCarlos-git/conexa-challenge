import { Meta, StoryObj } from '@storybook/react';

import { StarRating } from '.';

const meta = {
  component: StarRating,
  title: 'Components/StarRating',
} satisfies Meta<typeof StarRating>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Defalut: Story = {
  args: {
    rating: 4,
    ratingCount: 5,
  },
};
