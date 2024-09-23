import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TextButton } from './text-button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextButton />);
    expect(baseElement).toBeTruthy();
  });
});
