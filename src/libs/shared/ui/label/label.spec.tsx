import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Label } from './lebel';

describe('Label', () => {
  it('Label should render successfully', () => {
    const { baseElement } = render(<Label />);
    expect(baseElement).toBeTruthy();
  });
});
