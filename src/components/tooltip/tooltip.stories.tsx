import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProps,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';
import { cn, createPositionClass } from '@/libs';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';

// type TooltipStory = {
//   arrow: React.ReactNode;
// } & Omit<React.ComponentProps<typeof TooltipContent>, 'children'>;

const meta: Meta<typeof TooltipContent> = {
  component: TooltipContent,
  title: 'Components/Tooltip',
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
    render: ({ side, align, sideOffset, ...args }) => {
      const isArrow = variant === 'arrow';
      const radixPosition = side === 'top' || side === 'bottom';
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <ExclamationCircleIcon className="w-5 text-marble-400" />
            </TooltipTrigger>

            <TooltipContent
              side={side}
              align={align}
              sideOffset={sideOffset}
              {...args}
              variant={variant}
              className={cn(
                'w-52 rounded-lg border border-gray-200 bg-white p-4 text-marble-900 shadow-md',
                {
                  'radix-align-end:left-4 radix-align-start:right-4':
                    isArrow && radixPosition,
                },
                {
                  'radix-align-end:top-4 radix-align-start:bottom-4':
                    isArrow && !radixPosition,
                },
              )}
            >
              <p>
                Your password is easy to guess. Try to add more different
                characters.
              </p>
              {isArrow && (
                <TooltipArrow asChild className="relative">
                  <div
                    className={cn(
                      'bottom-[0.3rem] size-3 origin-center rotate-45 border-b border-r border-gray-200 bg-white shadow-2xl',
                      createPositionClass(side, align),
                    )}
                  ></div>
                </TooltipArrow>
              )}
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
export const Arrow: Story = createStory('arrow');
