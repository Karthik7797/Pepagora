'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui';
import s from './states.module.scss';

export default function EditorError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Something went wrong</h1>
      <p className={s.body}>
        The editor could not load this page. Try again, or head back to the
        catalog.
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
