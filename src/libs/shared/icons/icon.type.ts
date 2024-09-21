import { ComponentPropsWithoutRef } from 'react';

export type IconSvgProps = ComponentPropsWithoutRef<'svg'> & {
  size?: string | number;
};

export type IconImageProps = ComponentPropsWithoutRef<'img'> & {
  size?: string | number;
};
