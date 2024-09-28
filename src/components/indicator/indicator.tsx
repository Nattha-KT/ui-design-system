import {
  defaultFeedbackBgColor,
  defaultFeedbackLevels,
  defaultFeedbackTextColor,
} from '@/constant';
import { calculatePasswordStrength, cn } from '@/libs/utils';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';

export type IndicatorProps = ComponentPropsWithoutRef<'div'> & {
  input?: string;
  feedbackLevels?: string[];
  minLength?: number;
  varietyBonus?: number;
  penaltyForRepeating?: number;
  penaltyForSequential?: number;
  barColorFeedback?: string[];
  textColorFeedback?: string[];
  counsel?: React.ReactNode;
};

const Indicator: React.FC<IndicatorProps> = ({
  input = '',
  feedbackLevels = defaultFeedbackLevels,
  barColorFeedback = defaultFeedbackBgColor,
  textColorFeedback = defaultFeedbackTextColor,
  minLength = 4, // Minimum length for base score
  varietyBonus = 2, // Bonus for using all character types
  penaltyForRepeating = 1, // Penalty for repeating characters
  penaltyForSequential = 1, // Penalty for sequential characters
  // suggestion,
  className,
  counsel,
  ...props
}) => {
  const { feedback, indexOffeedback } = calculatePasswordStrength(
    input,
    feedbackLevels,
    minLength,
    varietyBonus,
    penaltyForRepeating,
    penaltyForSequential,
  );

  // Memoize feedback colors and progress to avoid unnecessary calculations
  const progressBars = useMemo(() => {
    return feedbackLevels.map((_, index) => {
      const isActive = index <= indexOffeedback;
      const bgColor =
        input && isActive ? barColorFeedback[indexOffeedback] : '';
      return (
        <div
          key={index}
          className={cn(
            'h-full flex-1 rounded-full bg-marble-200 transition-all duration-150',
            bgColor,
          )}
        />
      );
    });
  }, [feedbackLevels, barColorFeedback, indexOffeedback, input]);

  return (
    <div
      className={cn(
        'flex w-full min-w-[300px] flex-col items-end gap-y-[6px]',
        className,
      )}
      {...props}
    >
      <div className="flex h-1 w-full gap-1 rounded-full">{progressBars}</div>
      <div className="flex w-full items-center justify-end gap-x-1">
        <p
          className={cn(
            'text-xs font-semibold text-marble-500',
            textColorFeedback[indexOffeedback],
          )}
        >
          {input && feedback}
        </p>
        {counsel}
      </div>
    </div>
  );
};

Indicator.displayName = 'Indicator';
export { Indicator };
