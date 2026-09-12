import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import s from './Logo.module.scss';

/** Pepagora wordmark. Priority-loaded — it sits at the top of every screen. */
export function Logo() {
  return (
    <Link href={ROUTES.catalog} className={s.logo} aria-label="Pepagora home">
      <Image
        src="/logo.png"
        alt="Pepagora"
        width={277}
        height={54}
        priority
        className={s.image}
      />
    </Link>
  );
}
