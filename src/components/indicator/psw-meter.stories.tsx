import type { Meta, StoryObj } from '@storybook/react';
import { StrengthIndicator } from './psw-meter';

const meta: Meta<typeof StrengthIndicator> = {
  component: StrengthIndicator,
  title: 'Components/Indicator',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof StrengthIndicator>;

export const Default: Story = {
  args: {
    input: 'klsd123f&#',
  },
};
