import { getStrengthColor } from '@/constant';
import { calculatePasswordStrength } from '@/libs/utils';

export function PasswordStrengthMeter({ password }: { password: string }) {
  const strength = calculatePasswordStrength(password);

  return (
    <div className="flex w-[300px] flex-col items-end gap-y-1">
      <div className="flex h-1 w-full gap-1 rounded-full bg-slate-100">
        <div
          className={`h-full flex-1 bg-${getStrengthColor(strength.score)} rounded-full transition-all duration-150`}
        />
        <div
          className={`h-full flex-1 bg-${getStrengthColor(strength.score)} rounded-full transition-all`}
        />
        <div
          className={`h-full flex-1 bg-${getStrengthColor(strength.score)} rounded-full transition-all`}
        />
        <div
          className={`h-full flex-1 bg-${getStrengthColor(strength.score)} rounded-full transition-all`}
        />
      </div>
      <p
        className={` text-${getStrengthColor(strength.score)} text-xs font-semibold`}
      >
        {strength.feedback}
      </p>
    </div>
  );
}
