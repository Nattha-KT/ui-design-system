export const defaultFeedbackLevels = [
  'Weak',
  'Moderate',
  'Strong',
  'Very Strong',
];

export const defaultFeedbackBgColor = [
  'bg-rose-600',
  'bg-amber-600',
  'bg-teal-600',
  'bg-teal-600',
];

export const defaultFeedbackTextColor = [
  'text-rose-600',
  'text-amber-600',
  'text-teal-600',
  'text-teal-600',
];

export function convertBgToText(feedbackColor: string[]) {
  return feedbackColor.map((color) => {
    return color.replace('bg', 'text');
  });
}
