import { InputPasswordProps, PasswordInput } from '@/components';
import { sizes } from '@/libs';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  title: 'Examples/Password Strength',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      options: ['default', 'primary', 'destructive'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: sizes,
    },
  },
};
export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = (args: InputPasswordProps) => {
  return <PasswordInput {...args} />;
};

Default.args = {
  placeholder: 'Password',
  color: 'default',
};
