import { cn } from '@/libs';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

type AvatarStory = {
  fallback: string;
} & Omit<React.ComponentProps<typeof Avatar>, 'children'>;

const meta: Meta<AvatarStory> = {
  component: Avatar,
  title: 'Components/Avatar',
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
    fallback: { type: 'string' },
  },
};
export default meta;
type Story = StoryObj<AvatarStory>;

const createAvatar = (showImg: boolean): Story => {
  return {
    render: ({ className, fallback, ...arg }) => {
      const imgUrl = showImg ? './public/assets/cute-profile.jpg' : '';
      return (
        <Avatar className={cn('', className)} {...arg}>
          <AvatarImage src={imgUrl} alt="cute-profile" />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      );
    },
    args: {
      fallback: 'Ao',
    },
  };
};

export const Default: Story = createAvatar(true);
export const Fallback: Story = createAvatar(false);
