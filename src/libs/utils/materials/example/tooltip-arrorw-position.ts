import { TooltipProps } from '@/libs';

export const createPositionClass = (
  side?: TooltipProps['side'],
  align?: TooltipProps['align'],
) => {
  if (!side || !align) {
    return '';
  }

  const positions: Record<string, { end: string; start: string }> = {
    top: { end: 'right-4', start: 'left-4' },
    bottom: { end: 'left-4', start: 'right-4' },
    left: { end: 'left-4', start: 'right-4' },
    right: { end: 'right-4', start: 'left-4' },
  };

  // Handle 'center' explicitly
  if (align === 'center') {
    return ''; // Return empty string or a default class if center alignment is needed
  }

  return positions[side]?.[align] || '';
};
