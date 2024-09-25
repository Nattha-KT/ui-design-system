import { cn, FormPrefix, FormSuffix } from '@/libs';
import * as React from 'react';
import { InputVariantProps, inputVariants } from './input.variant';

export type InputProps = Omit<React.ComponentPropsWithRef<'input'>, 'prefix'> &
  FormPrefix &
  FormSuffix & { invalid?: string } & InputVariantProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, prefix, suffix, size, invalid, color, variant, ...props },
    ref,
  ) => {
    return (
      <>
        <div className={cn(inputVariants({ variant, size, color }), className)}>
          {prefix ? <div className="">{prefix}</div> : null}

          <input
            className="flex h-9 w-full rounded-lg bg-transparent px-3 py-2 text-marble-400 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-marble-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            ref={ref}
            {...props}
          />
          {suffix ? <div className="">{suffix}</div> : null}
        </div>
        {invalid && (
          <p className="ml-1 text-xs font-normal text-rose-400">{invalid}</p>
        )}
      </>
    );
  },
);
Input.displayName = 'Input';

export { Input };
