import { cn } from '@/libs';
import { IconSvgProps } from '@/types';

export function TooltipArrowSvg({ className, ...props }: IconSvgProps) {
  return (
    <svg
      className={cn('', className)}
      {...props}
      width="15"
      height="8"
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.857864 7.07107L7.92893 0L15 7.07107L0.857864 7.07107Z"
        fill="white"
      />
    </svg>
  );
}
