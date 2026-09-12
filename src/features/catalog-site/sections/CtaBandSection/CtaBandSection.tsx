import { Button } from '@/components/ui';
import type { CtaBandData } from '../../types';
import s from './CtaBandSection.module.scss';

export function CtaBandSection({ heading, subheading, ctaLabel }: CtaBandData) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div>
          <h2 className={s.title}>{heading}</h2>
          <p className={s.subtitle}>{subheading}</p>
        </div>

        <Button variant="outline" iconRight="arrow-right">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
