import type { Meta, StoryObj } from '@storybook/react';
import { PhoneInput, PhoneInputProps } from './phone-input';

const meta: Meta<typeof PhoneInput> = {
  component: PhoneInput,
  title: 'Components/Phone',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // color: {
    //   control: { type: 'inline-radio' },
    //   options: ['default', 'primary', 'destructive'],
    // },
  },
};
export default meta;
type Story = StoryObj<PhoneInputProps>;

export const Default: Story = (args: PhoneInputProps) => {
  return <PhoneInput {...args} />;
};

Default.args = {
  placeholder: 'Enter a phon number',
};
