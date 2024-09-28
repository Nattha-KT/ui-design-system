import {
  defaultFeedbackBgColor,
  defaultFeedbackLevels,
  defaultFeedbackTextColor,
} from '@/constant';
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/libs';
import { calculatePasswordStrength, cn } from '@/libs/utils';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';

export type PasswordStrengthProps = ComponentPropsWithoutRef<'div'> & {
  input: string;
  feedbackLevels?: string[];
  minLength?: number;
  varietyBonus?: number;
  penaltyForRepeating?: number;
  penaltyForSequential?: number;
  bgColorFeedback?: string[];
  textColorFeedback?: string[];
  suggestion?: React.ReactNode;
};

const StrengthIndicator: React.FC<PasswordStrengthProps> = ({
  input,
  feedbackLevels = defaultFeedbackLevels,
  bgColorFeedback = defaultFeedbackBgColor,
  textColorFeedback = defaultFeedbackTextColor,
  minLength = 4, // Minimum length for base score
  varietyBonus = 2, // Bonus for using all character types
  penaltyForRepeating = 1, // Penalty for repeating characters
  penaltyForSequential = 1, // Penalty for sequential characters
  // suggestion,
  className,
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
      const bgColor = input && isActive ? bgColorFeedback[indexOffeedback] : '';
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
  }, [feedbackLevels, bgColorFeedback, indexOffeedback, input]);

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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <ExclamationCircleIcon className="w-5 text-marble-400" />
            </TooltipTrigger>
            <TooltipContent
              align="end"
              className="w-52 rounded-lg border border-gray-200 bg-white p-4 text-marble-900 shadow-md radix-align-end:left-4 radix-align-start:right-4"
              side="bottom"
              sideOffset={4}
              variant="arrow"
            >
              <p>
                Your password is easy to guess. Try to add more different
                characters.
              </p>
              <TooltipArrow asChild className="relative">
                <div className="bottom-[0.3rem] left-4 size-3 origin-center rotate-45 border-b border-r border-gray-200 bg-white shadow-2xl" />
              </TooltipArrow>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

StrengthIndicator.displayName = 'StrengthIndicator';
export { StrengthIndicator };
