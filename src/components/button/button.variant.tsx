import { type VariantProps, cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'rounded-lg whitespace-nowrap  inline-flex box-border gap-x-2 items-center justify-center text-center font-semibold  transition-colors disabled:pointer-events-none focus:outline-none focus:ring-0',
  {
    variants: {
      variant: {
        primary:
          ' bg-indigo-600 hover:bg-indigo-700 text-white disabled:text-marble-400 disabled:bg-marble-100',
        secondary:
          ' bg-marble-100 hover:bg-marble-200 text-marble-900 disabled:text-marble-400 disabled:bg-marble-100',
        tertiary:
          ' bg-transparent hover:bg-marble-100 text-marble-600 disabled:text-marble-400 ',
      },
      color: {
        default: '',
        primary: 'bg-slate-400',
        destructive: '',
        'primary-revert': '',
        content: '#8A8C8C',
        disable: '#E3E3E3',
        'primary-faded': '#DFEEEF',
        errors: ' bg-red-400',
      },
      loading: {
        default: '',
        false: '',
        true: ' pointer-events-none hover:bg-current',
      },
      icon: {
        non: '',
        left: ' flex-row-reverse',
        right: 'flex-row',
      },
      size: {
        sm: ' h-8 py-2 px-3 text-sm ',
        md: ' h-11 px-4 py-[10px] text-base ',
        lg: ' h-14 p-4 text-base',
      },
    },
    compoundVariants: [
      {
        variant: ['primary'],
        loading: [true],
        className: ' bg-indigo-400',
      },
      {
        variant: ['primary'],
        icon: 'left',
        loading: [true],
        className: ' flex-row',
      },
      {
        variant: ['secondary'],
        loading: [true],
        className: ' text-marble-500',
      },

      {
        variant: ['secondary'],
        icon: 'left',
        loading: [true],
        className: ' flex-row ',
      },
      {
        variant: ['tertiary'],
        loading: [true],
        className: ' text-marble-500',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      color: 'default',
      size: 'md',
      loading: 'default',
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
