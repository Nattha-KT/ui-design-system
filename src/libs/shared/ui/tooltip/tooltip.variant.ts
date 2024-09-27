import { type VariantProps, cva } from 'class-variance-authority';

export const tooltipVariants = cva('', {
  variants: {
    variant: {
      default:
        'z-50 relative font-normal overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ',
      suggest: '  border-none bg-marble-900 font-normal text-white',
      arrow:
        'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]',
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
});

export type TooltipVariantProps = VariantProps<typeof tooltipVariants>;
