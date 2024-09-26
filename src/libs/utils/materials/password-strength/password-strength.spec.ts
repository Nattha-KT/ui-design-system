import { describe, expect, it } from 'vitest';
import { calculatePasswordStrength } from './password-strength'; // Adjust the path as needed

describe('calculatePasswordStrength', () => {
  it('should return "Weak" for passwords with only lowercase letters', () => {
    const { score, feedback } = calculatePasswordStrength('pass');
    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(4);
    expect(feedback).toBe('Weak');
  });

  it('should return "Moderate" for passwords with uppercase, lowercase, and numbers', () => {
    const { score, feedback } = calculatePasswordStrength('Password123');
    expect(score).toBeGreaterThanOrEqual(4);
    expect(score).toBeLessThanOrEqual(6);
    expect(feedback).toBe('Moderate');
  });

  it('should return "Strong" for passwords with uppercase, lowercase, numbers, and special characters', () => {
    const { score, feedback } = calculatePasswordStrength('Passwr$1542');
    expect(score).toBeGreaterThanOrEqual(6);
    expect(score).toBeLessThanOrEqual(8);
    expect(feedback).toBe('Strong');
  });

  it('should return "Very Strong" for long passwords with all character types', () => {
    const { score, feedback } = calculatePasswordStrength('Str0ngPssw0rd123!');
    expect(score).toBeGreaterThanOrEqual(10);
    expect(score).toBe(11);
    expect(feedback).toBe('Very Strong');
  });
});
