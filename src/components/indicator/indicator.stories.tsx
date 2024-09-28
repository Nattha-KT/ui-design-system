import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { HoverHelp } from './hover-help';
import { Indicator, IndicatorProps } from './indicator';

const meta: Meta<typeof Indicator> = {
  component: Indicator,
  title: 'Components/Indicator',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    counsel: {
      type: 'boolean',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: Story = (args: IndicatorProps) => {
  const counsel = args.counsel ? (
    <HoverHelp
      itemShow={<ExclamationCircleIcon className="w-5 text-marble-400" />}
      align="end"
      side="bottom"
      message="Your password is too easy to guess. Try to add more different characters."
    />
  ) : null;

  return <Indicator {...args} counsel={counsel} />;
};

Default.args = {
  input: 'klsd123f&#',
  counsel: true,
};
