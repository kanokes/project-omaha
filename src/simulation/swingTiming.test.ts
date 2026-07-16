import { describe, expect, it } from 'vitest';
import { classifySwingTiming } from './swingTiming';

describe('classifySwingTiming', () => {
  it.each([
    [-151, 'very early'],
    [-150, 'early'],
    [-71, 'early'],
    [-70, 'good'],
    [-26, 'good'],
    [-25, 'perfect'],
    [0, 'perfect'],
    [25, 'perfect'],
    [26, 'good'],
    [70, 'good'],
    [71, 'late'],
    [150, 'late'],
    [151, 'very late'],
  ] as const)('classifies %i ms as %s', (offset, result) =>
    expect(classifySwingTiming(offset)).toBe(result),
  );
  it.each([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])(
    'rejects non-finite offset %s',
    (offset) => expect(() => classifySwingTiming(offset)).toThrow(RangeError),
  );
});
