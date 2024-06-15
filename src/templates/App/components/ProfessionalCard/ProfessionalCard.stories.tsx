import { Meta, StoryObj } from '@storybook/react';

import { ProfessionalCard } from '.';

const meta = {
  component: ProfessionalCard,
  title: 'Templates/App/Components/ProfessionalCard',
} satisfies Meta<typeof ProfessionalCard>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Defalut: Story = {
  args: {
    data: {
      name: 'Luis Carlos',
      rating: 3,
      servicePrice: 120,
      serviceTime: 15,
      totalReviews: 20,
      profession: 'Psicologist',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  },
};

export const WithAvatar: Story = {
  args: {
    data: {
      ...Defalut.args.data,
      image: 'https://avatar.iran.liara.run/public/26',
    },
  },
};
