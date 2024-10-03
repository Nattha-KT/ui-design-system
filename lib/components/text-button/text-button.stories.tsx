import type { Meta, StoryObj } from '@storybook/react';
// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';

import { sizes } from '@/libs';
import { TextButton, TextButtonProps } from './text-button';

const meta: Meta<typeof TextButton> = {
  component: TextButton,
  title: 'Components/TextButton',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: sizes,
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
type Story = StoryObj<typeof TextButton>;

const createStory = (variant: TextButtonProps['variant']): Story => {
  return {
    render: (args: TextButtonProps) => {
      const content = args.asChild ? (
        <a href="#">{args.children}</a>
      ) : (
        args.children
      );

      return <TextButton {...args}>{content}</TextButton>;
    },
    args: {
      children: 'Click me',
      variant: variant,
      size: 'md',
      asChild: false,
      disabled: false,
    },
  };
};

export const Primary = createStory('primary');

export const Secondary = createStory('secondary');

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
//   },
// };
