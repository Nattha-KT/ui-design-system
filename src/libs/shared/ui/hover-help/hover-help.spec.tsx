import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HoverHelp } from './hover-help';

describe('Indicator', () => {
  it('Indicator should render successfully', () => {
    const { baseElement } = render(
      <HoverHelp
        align="end"
        side="bottom"
        message="Your password is too easy to guess. Try to add more different characters."
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
