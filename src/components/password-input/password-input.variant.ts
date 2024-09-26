import { type VariantProps, cva } from 'class-variance-authority';

export const passwordInputVariants = cva(
  'group flex items-center focus-within:outline focus-within:outline-offset-0 hover:border-marble-500 focus-within:outline-2 border-marble-400 overflow-hidden  text-base font-normal w-[200px]  rounded-lg border transition-colors file:border-transparent file:bg-transparent file:font-semibold disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: ' [&>input]:text-marble-800   [&>div]:text-marble-400',
      },
      color: {
        default: ' outline-none',
        primary:
          ' outline-0 outline-indigo-200  peer-active:border-indigo-500  focus-within:border-indigo-500 focus-within:hover:border-indigo-500',
        destructive: ' outline-none border-rose-400 hover:border-rose-600',
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
      size: 'sm',
    },
  },
);

export type PasswordInputVariantProps = VariantProps<
  typeof passwordInputVariants
>;
