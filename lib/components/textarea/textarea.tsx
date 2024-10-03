import { cn } from '@/libs';
import * as React from 'react';
import { TextareaVariantProps, textareaVariants } from './textarea.variant';

export type TextareaProps = React.ComponentPropsWithRef<'textarea'> &
  TextareaVariantProps;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, color, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ color }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
