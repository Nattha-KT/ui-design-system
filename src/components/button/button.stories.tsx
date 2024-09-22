import type { Meta, StoryObj } from '@storybook/react';
// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';

import { sizes } from '@/libs';
import { EyeIcon } from '@heroicons/react/16/solid';
import { Button, ButtonProps } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'inline-radio' },
      options: sizes,
    },
    icon: {
      control: { type: 'inline-radio' },
      options: ['non', 'right', 'left'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    asChild: {
      control: { type: 'boolean' },
    },
    backgroundColor: { control: 'color' },
  },
  // args: { onClick: fn() },
};
export default meta;
type Story = StoryObj<typeof Button>;

// Function to create a Story object for Storybook
const createStory = (variant: ButtonProps['variant']): Story => {
  return {
    render: (args: ButtonProps) => {
      const content = args.asChild ? (
        <a href="#">{args.children}</a>
      ) : (
        args.children
      );
      const icon =
        args.icon !== 'non' ? <EyeIcon className="w-5" /> : undefined;

      return (
        <Button useIcon={icon} {...args}>
          {content}
        </Button>
      );
    },
    args: {
      children: 'Click me',
      variant: variant,
      size: 'md',
      icon: 'non',
      loading: false,
      asChild: false,
      disabled: false,
    },
  };
};

export const Primary = createStory('primary');

export const Secondary = createStory('secondary');

export const Tertiary = createStory('tertiary');

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
//   },
// };
