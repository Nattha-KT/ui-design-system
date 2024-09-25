import { type VariantProps, cva } from 'class-variance-authority';

export const textareaVariants = cva(
  'flex min-h-[100px] min-w-[200px] font-normal w-full rounded-md border px-3 py-2 text-base disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      color: {
        default:
          ' text-marble-800 outline-none border-marble-400 placeholder:text-marble-400',
        primary:
          'outline-none   focus-within:border-indigo-500 focus-within:hover:border-indigo-500',
        destructive:
          'outline-none border-rose-400 hover:border-rose-400 text-rose-400',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  },
);

export type TextareaVariantProps = VariantProps<typeof textareaVariants>;
