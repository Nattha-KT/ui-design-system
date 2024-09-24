import { type VariantProps, cva } from 'class-variance-authority';

export const inputVariants = cva(
  'group flex items-center border-marble-400 overflow-hidden text-base font-normal w-[200px] hover:border-marble-500 rounded-lg  active:border-indigo-200 border bg-background transition-colors file:border-transparent file:bg-transparent file:font-semibold focus-within:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '[&>*]:text-marble-900',
      },
      color: {
        default: ' ',
        primary: 'focus-within:border-primary focus-within:text-primary',
        destructive:
          'focus-within:border-destructive focus-within:text-destructive',
      },
      size: {
        sm: ' text-sm h-9',
        md: ' h-11 ',
        lg: ' h-14 ',
      },
    },
    defaultVariants: {
      variant: 'default',
      color: 'default',
      size: 'md',
    },
  },
);

export type InputVariantProps = VariantProps<typeof inputVariants>;
