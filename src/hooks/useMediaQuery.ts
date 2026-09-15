'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * Tracks a media query. `useSyncExternalStore` reads the match during render
 * rather than in an effect, so there is no extra pass after mount. The server
 * snapshot is false, matching the mobile-first default.
 */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener('change', onChange);
      return () => list.removeEventListener('change', onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
