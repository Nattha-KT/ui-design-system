import { cn } from '@/libs/utils';
import { IconImageProps } from './icon.type';

export function LoadingBtnIcon({ className, ...props }: IconImageProps) {
  return (
    <img
      className={cn('', className)}
      {...props}
      src="../public/icons/loading-circle-white.svg"
      alt="spinloading"
    />
  );
}
