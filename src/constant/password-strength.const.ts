export const getStrengthColor = (score: number): string => {
  if (score <= 4) {
    return 'rose-600';
  } else if (score <= 6) {
    return 'amber-600';
  } else if (score <= 10) {
    return 'teal-600';
  } else {
    return 'teal-600';
  }
};
