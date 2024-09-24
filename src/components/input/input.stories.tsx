import { sizes } from '@/libs';
import { EyeIcon, MoonIcon } from '@heroicons/react/16/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Input',
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
    prefix: {
      control: { type: 'boolean' },
    },
    suffix: {
      control: { type: 'boolean' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = (args: InputProps) => {
  const prefix = args.prefix ? <MoonIcon className="ml-3" /> : null;
  const suffix = args.suffix ? <EyeIcon className="mr-3" /> : null;

  return <Input {...args} prefix={prefix} suffix={suffix} />;
};
Default.args = {
  placeholder: 'Placeholder',
};
