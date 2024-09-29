import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';
import { cn, createPositionClass } from '@/libs';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TooltipContent> = {
  component: TooltipContent,
  title: 'Examples/Sample',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: { type: 'inline-radio' },
      options: ['bottom', 'top', 'right', 'left'],
    },
    sideOffset: {
      control: { type: 'number' },
      defaultValue: 0,
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    align: {
      control: { type: 'inline-radio' },
      options: ['center', 'end', 'start'],
    },
  },
};
export default meta;

const Template: StoryObj<typeof TooltipContent> = {
  render: ({ side, align, variant = 'arrow', sideOffset, ...args }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ExclamationCircleIcon className="w-5 text-marble-400" />
        </TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={sideOffset}
          align={align}
          {...args}
          variant={variant}
          className={cn(
            'w-52 rounded-lg border border-gray-200 bg-white p-4 text-marble-900 shadow-md',
            side === 'top' || side === 'bottom'
              ? 'radix-align-end:left-4 radix-align-start:right-4'
              : 'radix-align-end:top-4 radix-align-start:bottom-4',
          )}
        >
          <p>
            Your password is easy to guess. Try to add more different
            characters.
          </p>

          <TooltipArrow asChild className="relative">
            <div
              className={cn(
                'bottom-[0.3rem] size-3 origin-center rotate-45 border-b border-r border-gray-200 bg-white shadow-2xl',
                createPositionClass(side, align),
              )}
            ></div>
          </TooltipArrow>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Default = Template;
Default.args = {
  side: 'bottom',
  align: 'end',
  sideOffset: 4,
};
