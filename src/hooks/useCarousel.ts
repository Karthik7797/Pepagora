'use client';

import { useCallback, useState } from 'react';

interface Options {
  count: number;
  /** Wrap around at the ends instead of stopping. */
  loop?: boolean;
}

export function useCarousel({ count, loop = true }: Options) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      if (loop) {
        setIndex(((next % count) + count) % count);
      } else {
        setIndex(Math.min(Math.max(next, 0), count - 1));
      }
    },
    [count, loop],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  return { index, goTo, next, prev };
}
