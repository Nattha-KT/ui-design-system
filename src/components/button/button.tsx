import { LoadingBtnIcon } from '@/libs';
import { cn } from '@/libs/utils';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { ButtonVariantProps, buttonVariants } from './button.variant';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
  backgroundColor?: string;
  loading?: boolean;
  useIcon?: React.ReactNode;
} & ButtonVariantProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      useIcon,
      variant,
      color,
      size,
      icon,
      loading = false,
      asChild = false,
      children,
      backgroundColor,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';

    const buttonClasses = cn(
      buttonVariants({ variant, color, size, loading, icon }),
      className,
    );

    const loadingIcon = (
      <LoadingBtnIcon
        variant={variant}
        className={cn('animate-spin-slow', {
          hidden: !loading || disabled,
        })}
      />
    );

    return (
      <Component
        disabled={disabled}
        className={buttonClasses}
        ref={ref}
        style={{ backgroundColor }}
        {...props}
      >
        <Slottable>{children}</Slottable>
        {!loading && useIcon}
        {loadingIcon}
      </Component>
    );
  },
);

Button.displayName = 'Button';

export { Button };
