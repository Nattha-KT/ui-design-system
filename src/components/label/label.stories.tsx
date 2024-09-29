import { cn } from '@/libs';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './lebel';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Label',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
const Template: StoryObj<typeof Label> = {
  render: ({ className, ...arg }) => (
    <div className="flex h-full w-full items-center space-x-2">
      <input type="checkbox" defaultValue="Pedro Duarte" className="mr-3 w-4" />
      <Label {...arg} className={cn('ml-2', className)} htmlFor="terms">
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const Default = Template;
Default.args = {};
