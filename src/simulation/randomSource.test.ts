import { describe, expect, it } from 'vitest';
import { createSeededRandom } from './randomSource';

describe('createSeededRandom', () => {
  it('replays the same sequence for the same seed', () => {
    const first = createSeededRandom(42);
    const second = createSeededRandom(42);

    expect([first.next(), first.next(), first.next()]).toEqual([
      second.next(),
      second.next(),
      second.next(),
    ]);
  });

  it('returns values in the half-open unit interval', () => {
    const random = createSeededRandom(7);
    const values = Array.from({ length: 100 }, () => random.next());

    expect(values.every((value) => value >= 0 && value < 1)).toBe(true);
  });
});
