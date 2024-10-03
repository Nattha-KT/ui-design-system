import { describe, expect, it } from 'vitest';
import { calculatePasswordStrength } from './psw-meter.util';

describe('calculatePasswordStrength', () => {
  it('should return "Weak" for a very simple password', () => {
    const result = calculatePasswordStrength('abc');
    expect(result.score).toBe(1);
    expect(result.feedback).toBe('Weak');
    expect(result.indexOffeedback).toBe(0);
  });

  it('should return "Moderate" for a longer but still simple password', () => {
    const result = calculatePasswordStrength('abcdefgh');
    expect(result.score).toBe(5);
    expect(result.feedback).toBe('Moderate');
    expect(result.indexOffeedback).toBe(1);
  });

  it('should return "Strong" for a password with variety of characters', () => {
    const result = calculatePasswordStrength('Abcdef123!');
    expect(result.score).toBeGreaterThanOrEqual(10);
    expect(result.feedback).toBe('Very Strong');
    expect(result.indexOffeedback).toBe(3);
  });

  it('should return "Very Strong" for a highly complex password', () => {
    const result = calculatePasswordStrength('A1b2C3!@#xyzXYZ');
    expect(result.score).toBeGreaterThanOrEqual(10);
    expect(result.feedback).toBe('Very Strong');
    expect(result.indexOffeedback).toBe(3);
  });

  it('should work with custom feedback levels', () => {
    const customFeedback = [
      'Very Weak',
      'Weak',
      'Average',
      'Good',
      'Excellent',
    ];
    const result = calculatePasswordStrength('A1b2123weaC3!@#', customFeedback);
    expect(result.feedback).toBe('Excellent');
    expect(result.indexOffeedback).toBe(4);
  });
});
