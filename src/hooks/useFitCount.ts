'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * How many of a row's children fit on one line, and how many are left over.
 *
 * The count cannot be derived in CSS: it depends on each child's rendered text
 * width, so the row is measured after layout. Every child stays mounted and
 * the caller hides the overflowing ones, which keeps their widths measurable —
 * unmounting them would leave nothing to re-measure when the row grows again.
 *
 * The width kept free for the "+N" indicator is measured from the indicator
 * itself (`[data-fit-more]`) when it is present, so the fit is exact rather
 * than tuned to a guessed width; `fallbackReserve` covers the first pass,
 * before any indicator has rendered.
 */
export function useFitCount<T extends HTMLElement>(
  total: number,
  fallbackReserve = 44,
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(total);

  const measure = useCallback(() => {
    const row = ref.current;
    if (!row) return;

    // Only the measurable children, so a caller's "+N" node can live in the
    // same row without being counted as one of them.
    const items = [...row.querySelectorAll<HTMLElement>('[data-fit-item]')];
    if (items.length === 0) return;

    const rowWidth = row.clientWidth;
    if (rowWidth === 0) return;

    const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
    const more = row.querySelector<HTMLElement>('[data-fit-more]');
    const reserve = more?.offsetWidth ?? fallbackReserve;

    let used = 0;
    let fits = 0;

    for (const [i, item] of items.entries()) {
      const next = used + (i > 0 ? gap : 0) + item.offsetWidth;
      // Taking every remaining item means no indicator is needed, so the last
      // one may use the full width; any earlier one must leave room for "+N".
      const isLast = i === items.length - 1;
      const limit = isLast ? rowWidth : rowWidth - gap - reserve;

      if (next > limit) break;

      used = next;
      fits += 1;
    }

    // One chip always shows: a bare "+3" with nothing beside it reads as a bug.
    setVisible(Math.max(fits, 1));
  }, [fallbackReserve]);

  useEffect(() => {
    const row = ref.current;
    if (!row) return;

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(row);
    return () => observer.disconnect();
  }, [measure, total]);

  return { ref, visible, hidden: Math.max(total - visible, 0) };
}
