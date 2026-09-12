import clsx from 'clsx';
import s from './SectionHeading.module.scss';

interface Props {
  title: string;
  subtitle?: string;
  /** Narrows the trailing gap for sections that follow with a filter row. */
  tight?: boolean;
}

/** Centred title + subtitle used by Products, Why us, Industries and more. */
export function SectionHeading({ title, subtitle, tight }: Props) {
  return (
    <header className={clsx(s.heading, tight && s.tight)}>
      <h2 className={s.title}>{title}</h2>
      {subtitle && <p className={s.subtitle}>{subtitle}</p>}
    </header>
  );
}
