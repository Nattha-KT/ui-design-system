import { cn, LoadingBtnIcon } from '@/libs';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { ButtonVariantProps, buttonVariants } from './button.variant';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
  backgroundColor?: string;
  loading?: boolean;
} & ButtonVariantProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      color,
      size,
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
      buttonVariants({ variant, color, size, loading }),
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
        {loadingIcon}
      </Component>
    );
  },
);

Button.displayName = 'Button';

export { Button };
