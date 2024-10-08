export const sizes = ['sm', 'md', 'lg'] as const;
export type Size = (typeof sizes)[number];

export const colors = ['primary', 'secondary', 'tertiary'] as const;
export type Color = (typeof colors)[number];
