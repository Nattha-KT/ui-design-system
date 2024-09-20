import type { Meta, StoryObj } from '@storybook/react';
// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';
import { fn } from '@storybook/test';
// import { FaRegCalendar } from 'react-icons/fa6';

import { colors, sizes } from '@/libs';
import { EyeIcon } from '@heroicons/react/16/solid';
import { Button, ButtonProps } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Shared UI/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'flat', 'outline', 'capsule', 'icon'],
    },
    color: {
      control: { type: 'inline-radio' },
      options: colors,
    },
    size: {
      control: { type: 'inline-radio' },
      options: sizes,
    },
    disabled: {
      control: { type: 'boolean' },
    },
    style: {
      control: { type: 'object' },
    },
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = (args: ButtonProps) => {
  if (args.variant === 'icon') {
    return <Button {...args}>{<EyeIcon />}</Button>;
  }

  // if (args.asChild) {
  //   return (
  //     <Button {...args}>
  //       <a href="#">{args.children}</a>
  //     </Button>
  //   );
  // }

  return <Button {...args} />;
};

Default.args = {
  children: 'Button',
  variant: 'default',
  color: 'default',
  size: 'md',
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
//   },
// };
