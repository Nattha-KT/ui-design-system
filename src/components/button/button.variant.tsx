import { type VariantProps, cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center border-2 text-center font-extrabold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-background disabled:text-muted',
        flat: 'disabled:border-muted disabled:bg-muted disabled:text-muted-foreground',
        outline:
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
      size: {
        sm: 'h-8 rounded-md px-2 text-sm',
        md: 'h-10 rounded-md px-4 text-base',
        lg: 'h-12 rounded-md px-6 text-base',
      },
    },
    compoundVariants: [
      {
        variant: ['default', 'icon'],
        color: 'default',
        className: 'hover:bg-foreground/10',
      },
      {
        variant: ['default', 'icon'],
        color: 'primary',
        className: 'text-primary hover:bg-primary/10',
      },
      {
        variant: ['default', 'icon'],
        color: 'destructive',
        className: 'text-destructive hover:bg-destructive/10',
      },
      {
        variant: ['flat', 'capsule'],
        color: 'default',
        className:
          'border-foreground bg-foreground text-background hover:bg-foreground/80',
      },
      {
        variant: ['outline'],
        color: 'content',
        className: 'border-content stroke-content text-content',
      },
      {
        variant: ['flat'],
        color: 'disable',
        className: 'text-content',
      },
      {
        variant: ['flat'],
        color: 'primary-faded',
        className: 'border-primary bg-menu text-primary',
      },
      {
        variant: ['flat', 'capsule'],
        color: 'primary',
        className:
          'border-primary bg-primary text-primary-foreground hover:bg-primary/80',
      },
      // {
      //   variant: ['flat', 'capsule'],
      //   color: 'primary-revert',
      //   className:
      //     'border-primary bg-primary text-primary-foreground hover:bg-primary/80',
      // },
      {
        variant: ['flat', 'capsule'],
        color: 'destructive',
        className:
          'border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/80',
      },
      {
        variant: 'capsule',
        size: ['sm', 'md', 'lg'],
        className: 'rounded-full',
      },
      {
        variant: 'outline',
        color: 'default',
        className: 'border-foreground hover:bg-foreground/10',
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-primary hover:bg-primary/10',
      },

      {
        variant: 'outline',
        color: 'primary-revert',
        className:
          'border-primary-forground bg-primary text-primary-foreground hover:bg-primary-foreground/10',
      },
      {
        variant: 'outline',
        color: 'destructive',
        className: 'border-destructive hover:bg-destructive/10',
      },
      {
        variant: 'icon',
        size: ['sm', 'md', 'lg'],
        className: 'rounded-full p-0',
      },
      {
        variant: 'icon',
        size: 'sm',
        className: 'h-9 w-9',
      },
      {
        variant: 'icon',
        size: 'md',
        className: 'h-10 w-10',
      },
      {
        variant: 'icon',
        size: 'lg',
        className: 'h-11 w-11',
      },
      {
        variant: 'outline',
        color: 'errors',
        className:
          'border-destructive text-destructive hover:bg-destructive/80',
      },
    ],
    defaultVariants: {
      variant: 'default',
      color: 'default',
      size: 'md',
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
