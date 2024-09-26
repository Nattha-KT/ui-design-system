import { Button } from '@/components';
import {
  Tooltip,
  TooltipContent,
  TooltipProps,
  TooltipProvider,
  TooltipTrigger,
} from '@/libs';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TooltipContent> = {
  component: TooltipContent,
  title: 'Examples/Tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'suggest'],
    },
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
  },
};
export default meta;
type Story = StoryObj<typeof TooltipContent>;

const createStory = (variant: TooltipProps['variant']): Story => {
  return {
    render: (args) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant={'secondary'} size={'sm'}>
                {args.children}
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side={args.side}
              sideOffset={args.sideOffset}
              {...args}
            >
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    args: {
      children: 'Hover here',
      variant: variant,
      side: 'top',
      sideOffset: 0,
      size: 'sm',
    },
  };
};

export const Default = createStory('default');
