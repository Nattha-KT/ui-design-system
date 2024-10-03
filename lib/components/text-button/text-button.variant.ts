import { type VariantProps, cva } from 'class-variance-authority';

export const textButtonVariants = cva(
  'rounded-lg text-marble-600 disabled:text-marble-400 whitespace-nowrap bg-transparent inline-flex box-border gap-x-2 items-center justify-center text-center font-semibold transition-colors disabled:pointer-events-none focus:outline-none focus:ring-0',
  {
    variants: {
      variant: {
        default: '  hover:text-marble-700 ',
        primary: ' text-indigo-600 hover:text-indigo-700 ',
        secondary: '  hover:text-indigo-700 ',
      },
      color: {
        default: '',
        primary: 'bg-slate-400',
        destructive: '',
      },
      size: {
        sm: ' h-8 py-2 px-3 text-xs font-semibold',
        md: ' h-11 px-4 py-[10px] text-sm font-semibold',
        lg: ' h-14 p-4 text-base font-semibold',
      },
    },
    compoundVariants: [
      //   {
      //     variant: ['primary'],
      //     icon: 'left',
      //     className: ' flex-row',
      //   },
    ],
    defaultVariants: {
      variant: 'primary',
      color: 'default',
      size: 'md',
    },
  },
);

export type TextButtonVariantProps = VariantProps<typeof textButtonVariants>;
