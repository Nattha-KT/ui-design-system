import { cn, defaultIconSize, loadingIconPairColor } from '@/libs';
import { IconSvgProps } from '@/types';
export type CustomIconProps = IconSvgProps & {
  variant?: keyof typeof loadingIconPairColor | null;
};

export function LoadingBtnIcon({
  variant = 'default',
  size = defaultIconSize,
  className,
  ...props
}: CustomIconProps) {
  return (
    <svg
      className={cn(`${size}`, className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99999 16.6667C13.6819 16.6667 16.6667 13.6819 16.6667 10C16.6667 6.31812 13.6819 3.33335 9.99999 3.33335C6.31809 3.33335 3.33332 6.31812 3.33332 10C3.33332 13.6819 6.31809 16.6667 9.99999 16.6667ZM9.99999 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6024 1.66669 9.99999 1.66669C5.39762 1.66669 1.66666 5.39765 1.66666 10C1.66666 14.6024 5.39762 18.3334 9.99999 18.3334Z"
        fill={loadingIconPairColor[variant!][0]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99999 3.33335C6.31809 3.33335 3.33332 6.31812 3.33332 10C3.33332 13.6819 6.31809 16.6667 9.99999 16.6667C10.4602 16.6667 10.8333 17.0398 10.8333 17.5C10.8333 17.9603 10.4602 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10C18.3333 10.4603 17.9602 10.8334 17.5 10.8334C17.0398 10.8334 16.6667 10.4603 16.6667 10C16.6667 6.31812 13.6819 3.33335 9.99999 3.33335Z"
        fill={loadingIconPairColor[variant!][0]}
      />
      <defs>
        <linearGradient
          id="paint0_linear_2418_16653"
          x1="9.99999"
          y1="10"
          x2="9.99999"
          y2="16.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
