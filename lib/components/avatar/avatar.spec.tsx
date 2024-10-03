import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
describe('Avatar', () => {
  it('Avatar should render successfully', () => {
    const { baseElement } = render(
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>,
    );
    expect(baseElement).toBeTruthy();
  });
});
