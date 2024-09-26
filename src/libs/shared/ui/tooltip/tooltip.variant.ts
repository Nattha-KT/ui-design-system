import { type VariantProps, cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  'z-50 relative font-normal overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  {
    variants: {
      variant: {
        default: ' ',
        suggest: '  border-none bg-marble-900 font-normal text-white',
      },
      size: {
        sm: ' text-xs ',
        md: '  text-sm',
        lg: '  ',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
);

export type TooltipVariantProps = VariantProps<typeof tooltipVariants>;
