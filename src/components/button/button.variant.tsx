import { type VariantProps, cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'rounded-lg inline-flex box-border items-center justify-center text-center font-extrabold  transition-colors disabled:pointer-events-none focus:outline-none focus:ring-0',
  {
    variants: {
      variant: {
        primary:
          'border-transparent bg-indigo-600 hover:bg-indigo-700 text-white disabled:text-marble-400 disabled:bg-marble-100',
        secondary:
          'disabled:border-muted disabled:bg-muted disabled:text-muted-foreground',
        teriary:
          'bg-background text-foreground disabled:border-muted disabled:text-muted',
        capsule:
          'disabled:border-muted disabled:bg-muted disabled:text-muted-foreground',
        icon: 'border-transparent disabled:text-muted [&>*]:inline-block [&>*]:align-baseline',
      },
      color: {
        default: '',
        primary: 'bg-slate-400',
        destructive: '',
        'primary-revert': '',
        content: '#8A8C8C',
        disable: '#E3E3E3',
        'primary-faded': '#DFEEEF',
        errors: '',
      },
      loading: {
        default: '',
        false: '',
        true: ' gap-x-2 pointer-events-none hover:bg-current',
      },
      size: {
        sm: 'h-8 py-2 px-3 text-sm font-semibold',
        md: 'h-11 px-4 py-[10px] text-base font-semibold',
        lg: 'h-14 p-4 text-base font-semibold',
      },
    },
    compoundVariants: [
      {
        variant: ['primary', 'icon'],
        color: 'default',
        loading: [true],
        className: ' bg-indigo-400',
      },
      {
        variant: ['primary', 'icon'],
        color: 'primary',
        className: 'text-primary hover:bg-primary/10',
      },
      {
        variant: ['primary', 'icon'],
        color: 'destructive',
        className: 'text-destructive hover:bg-destructive/10',
      },
      {
        variant: ['secondary', 'capsule'],
        color: 'default',
        className:
          'border-foreground bg-foreground text-background hover:bg-foreground/80',
      },
      {
        variant: ['secondary'],
        color: 'content',
        className: 'border-content stroke-content text-content',
      },
      {
        variant: ['secondary'],
        color: 'disable',
        className: 'text-content',
      },
      {
        variant: ['secondary'],
        color: 'primary-faded',
        className: 'border-primary bg-menu text-primary',
      },
      {
        variant: ['secondary', 'capsule'],
        color: 'primary',
        className:
          'border-primary bg-primary text-primary-foreground hover:bg-primary/80',
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
