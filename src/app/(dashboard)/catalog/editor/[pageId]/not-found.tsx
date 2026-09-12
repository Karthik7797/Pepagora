import Link from 'next/link';
import { Button } from '@/components/ui';
import { ROUTES } from '@/lib/constants';
import s from './states.module.scss';

export default function EditorNotFound() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Page not found</h1>
      <p className={s.body}>
        This page isn&apos;t part of your catalog. Pick another one from the
        page selector.
      </p>
      <Link href={ROUTES.catalog}>
        <Button>Back to catalog</Button>
      </Link>
    </div>
  );
}
