import { defaultFeedbackLevels } from '@/constant';

type PasswordStrength = {
  score: number;
  feedback: string;
  indexOffeedback: number;
};

export function calculatePasswordStrength(
  input: string,
  feedbackLevels: string[] = defaultFeedbackLevels,
  minLength: number = 4, // Minimum length for base score
  varietyBonus: number = 2, // Bonus for using all character types
  penaltyForRepeating: number = 1, // Penalty for repeating characters
  penaltyForSequential: number = 1, // Penalty for sequential characters
): PasswordStrength {
  let score = 0;

  // Length-based scoring
  if (input.length >= minLength) score += 1;
  if (input.length >= 6) score += 2;
  if (input.length >= 8) score += 2;
  if (input.length >= 10) score += 3;
  if (input.length >= 12) score += 3;

  // Character variety scoring
  const hasLowercase = /[a-z]/.test(input);
  const hasUppercase = /[A-Z]/.test(input);
  const hasNumbers = /\d/.test(input);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(input);

  if (hasLowercase) score += 1;
  if (hasUppercase) score += 1;
  if (hasNumbers) score += 1;
  if (hasSpecial) score += 1;

  // Bonus for using all types of characters
  if (hasLowercase && hasUppercase && hasNumbers && hasSpecial) {
    score += varietyBonus;
  }

  // Penalty for repeating characters or sequential patterns
  const hasRepeatingChars = /(.)\1{2,}/.test(input); // e.g., aaa
  const hasSequentialNumbers = /\d{6,}/.test(input); // e.g., 123456
  const hasSequentialLetters = /[a-z]{6,}/i.test(input); // e.g., abcdef

  if (hasRepeatingChars) score -= penaltyForRepeating;
  if (hasSequentialNumbers || hasSequentialLetters)
    score -= penaltyForSequential;

  // Calculate feedback based on dynamic score range
  const feedbackIndex = Math.min(
    Math.floor((score / (12 + varietyBonus)) * feedbackLevels.length),
    feedbackLevels.length - 1,
  );

  const feedback = feedbackLevels[feedbackIndex];

  return {
    score,
    feedback,
    indexOffeedback: feedbackIndex,
  };
}
