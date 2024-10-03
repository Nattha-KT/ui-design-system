import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Indicator } from './indicator';

describe('Indicator', () => {
  it('Indicator should render successfully', () => {
    const { baseElement } = render(<Indicator input="4sd345@542" />);
    expect(baseElement).toBeTruthy();
  });
});
