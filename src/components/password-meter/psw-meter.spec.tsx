import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { StrengthIndicator } from './psw-meter';

describe('StrengthIndicator', () => {
  it('StrengthIndicator should render successfully', () => {
    const { baseElement } = render(<StrengthIndicator input="4sd345@542" />);
    expect(baseElement).toBeTruthy();
  });
});
