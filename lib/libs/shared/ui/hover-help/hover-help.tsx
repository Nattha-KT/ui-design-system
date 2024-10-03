import { cn, createPositionClass } from '@/libs';
import React, { ElementRef, forwardRef } from 'react';
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProps,
  TooltipProvider,
  TooltipTrigger,
} from '../../../../components/tooltip';

export type HoverHelpProps = TooltipProps & {
  message?: string;
  itemShow?: React.ReactNode;
};

const HoverHelp = forwardRef<ElementRef<typeof TooltipContent>, HoverHelpProps>(
  (
    {
      className,
      message,
      itemShow,
      align = 'end',
      side = 'bottom',
      variant = 'arrow',
      sideOffset = 4,
      ...props
    },
    ref,
  ) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{itemShow}</TooltipTrigger>
        <TooltipContent
          {...props}
          ref={ref}
          align={align}
          className={cn(
            'w-52 rounded-lg border border-gray-200 bg-white p-4 text-marble-900 shadow-md',
            side === 'top' || side === 'bottom'
              ? 'radix-align-end:left-4 radix-align-start:right-4'
              : 'radix-align-end:top-4 radix-align-start:bottom-4',
            className,
          )}
          side={side}
          sideOffset={sideOffset}
          variant={variant}
        >
          <p>{message}</p>
          <TooltipArrow asChild className="relative">
            <div
              className={cn(
                'bottom-[0.3rem] size-3 origin-center rotate-45 border-b border-r border-gray-200 bg-white shadow-2xl',
                createPositionClass(side, align),
              )}
            ></div>
          </TooltipArrow>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
);

HoverHelp.displayName = 'HoverHelp';
export { HoverHelp };
