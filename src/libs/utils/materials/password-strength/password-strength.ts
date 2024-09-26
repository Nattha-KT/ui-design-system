type PasswordStrength = {
  score: number;
  feedback: string;
};

export function calculatePasswordStrength(password: string): PasswordStrength {
  let score = 0;
  let feedback = 'Weak';

  if (password.length >= 4) score += 1;
  if (password.length >= 8) score += 2;
  if (password.length >= 12) score += 3;

  // Character variety scoring
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (hasLowercase) score += 1;
  if (hasUppercase) score += 1;
  if (hasNumbers) score += 1;
  if (hasSpecial) score += 1;

  // Bonus for using all types of characters
  if (hasLowercase && hasUppercase && hasNumbers && hasSpecial) {
    score += 2; // Variety bonus
  }

  // Penalty for repeating characters or sequential patterns
  const hasRepeatingChars = /(.)\1{2,}/.test(password); // e.g., aaa
  const hasSequentialNumbers = /\d{6,}/.test(password); // e.g., 123321 432433
  const hasSequentialLetters = /[a-z]{6,}/i.test(password); // e.g., abc

  if (hasRepeatingChars) score -= 1;
  if (hasSequentialNumbers || hasSequentialLetters) score -= 1;

  // Feedback based on score
  if (score <= 4) {
    feedback = 'Weak';
  } else if (score <= 6) {
    feedback = 'Moderate';
  } else if (score <= 10) {
    feedback = 'Strong';
  } else {
    feedback = 'Very Strong';
  }

  return {
    score,
    feedback,
  };
}
