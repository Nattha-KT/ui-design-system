import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PhoneInput } from './phone-input';

describe('PhoneInput', () => {
  it('PhoneInput should render successfully', () => {
    const { baseElement } = render(<PhoneInput />);
    expect(baseElement).toBeTruthy();
  });
});
