import { cn } from '@/libs/utils';
import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { ButtonVariantProps, buttonVariants } from './button.variant';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
  backgroundColor?: string;
} & ButtonVariantProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      color,
      size,
      asChild = false,
      backgroundColor,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Component
        className={cn(buttonVariants({ variant, color, size }), className)}
        ref={ref}
        style={{ backgroundColor }}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };
