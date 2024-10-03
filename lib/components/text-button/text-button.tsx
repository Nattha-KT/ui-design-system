import { cn } from '@/libs';
import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import {
  TextButtonVariantProps,
  textButtonVariants,
} from './text-button.variant';

export type TextButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
  backgroundColor?: string;
} & TextButtonVariantProps;

const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      className,
      variant,
      color,
      size,
      asChild = false,
      backgroundColor,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';

    const textButtonClasses = cn(
      textButtonVariants({ variant, color, size }),
      className,
    );

    return (
      <Component
        disabled={disabled}
        className={textButtonClasses}
        ref={ref}
        style={{ backgroundColor }}
        {...props}
      />
    );
  },
);

TextButton.displayName = 'TextButton';

export { TextButton };
