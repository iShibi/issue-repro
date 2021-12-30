import { add } from './index.js';
import { test, expect } from 'vitest';

test('add two numbers', () => {
  expect(add(1, 2)).toBe(3);
});