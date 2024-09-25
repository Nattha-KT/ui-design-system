import { type VariantProps, cva } from 'class-variance-authority';

export const labelVariants = cva(
  'text-sm font-semibold text-marble-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

export type LabelVariantsProps = VariantProps<typeof labelVariants>;
