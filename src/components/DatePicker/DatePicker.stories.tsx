import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { DatePicker } from '.';
import { useArgs } from '@storybook/preview-api';

const meta = {
  component: DatePicker,
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePicker>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Defalut: Story = {
  args: {
    value: new Date(),
    onSelectDate: action('onChangeDate'),
  },

  render: function Render() {
    const [{ value }, updateArgs] = useArgs();

    function handleSelectDate(date?: Date) {
      updateArgs({ value: date ?? new Date() });
    }

    return (
      <div className="max-w-fit">
        <DatePicker value={value} onSelectDate={handleSelectDate} />
      </div>
    );
  },
};
