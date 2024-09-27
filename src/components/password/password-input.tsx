import { Input } from '@/components';
import { cn, FormPrefix, FormSuffix } from '@/libs';
import React, { useState } from 'react';
import {
  PasswordInputVariantProps,
  passwordInputVariants,
} from './password-input.variant';
import { PasswordToggleIcon } from './password-toggle-icon';
export type InputPasswordProps = Omit<
  React.ComponentPropsWithRef<'input'>,
  'prefix'
> &
  FormPrefix &
  FormSuffix & { invalid?: string } & PasswordInputVariantProps;

const PasswordInput = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, color, variant, size, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return (
      <Input
        type={showPassword ? 'text' : 'password'}
        suffix={
          <PasswordToggleIcon
            isPasswordVisible={showPassword}
            toggleVisibility={togglePasswordVisibility}
          />
        }
        className={cn(
          passwordInputVariants({ color, variant, size }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
