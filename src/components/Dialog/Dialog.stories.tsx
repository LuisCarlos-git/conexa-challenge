import { Meta, StoryObj } from '@storybook/react';

import { Dialog } from '.';
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
    children: 'dialog content',
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
