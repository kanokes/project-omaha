export type SwingTiming =
  'very early' | 'early' | 'good' | 'perfect' | 'late' | 'very late';

/** Difference in milliseconds: negative is early, positive is late. */
export function classifySwingTiming(offsetMs: number): SwingTiming {
  if (!Number.isFinite(offsetMs))
    throw new RangeError('Swing offset must be finite.');
  if (offsetMs < -150) return 'very early';
  if (offsetMs < -70) return 'early';
  if (offsetMs < -25) return 'good';
  if (offsetMs <= 25) return 'perfect';
  if (offsetMs <= 70) return 'good';
  if (offsetMs <= 150) return 'late';
  return 'very late';
}
