import {
  cn,
  Tooltip,
  TooltipContent,
  TooltipProps,
  TooltipProvider,
  TooltipTrigger,
} from '@/libs';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';

// type TooltipStory = {
//   arrow: React.ReactNode;
// } & Omit<React.ComponentProps<typeof TooltipContent>, 'children'>;

const meta: Meta<typeof TooltipContent> = {
  component: TooltipContent,
  title: 'Examples/Tooltip/help-icon',
  parameters: {
    layout: 'centered',
    // docs: {
    //   story: {
    //     inline: false,
    //     iframeHeight: 200,
    //   },
    // },
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
type Story = StoryObj<typeof TooltipContent>;

const createStory = (variant: TooltipProps['variant']): Story => {
  return {
    render: (args) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <ExclamationCircleIcon className="w-5 text-marble-400" />
            </TooltipTrigger>

            <TooltipContent
              side={args.side}
              sideOffset={args.sideOffset}
              {...args}
              variant={variant}
              className={cn(
                'relative w-52 rounded-lg border border-gray-200 bg-white p-4 text-marble-900 shadow-md',
                variant === 'arrow' ? 'left-4' : '',
              )}
            >
              <p>
                Your password is easy to guess. Try to add more different
                characters.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    args: {
      side: 'bottom',
      sideOffset: 4,
      size: 'sm',
      align: 'end',
    },
  };
};

// Stories for Default and Arrow variants
export const Default: Story = createStory('default');
