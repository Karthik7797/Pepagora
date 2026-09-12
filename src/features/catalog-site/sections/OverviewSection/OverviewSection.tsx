import { Button } from '@/components/ui';
import type { OverviewData } from '../../types';
import { CertBadge } from './CertBadge';
import { StatIcon } from './StatIcon';
import s from './OverviewSection.module.scss';

export function OverviewSection({
  eyebrow,
  heading,
  body,
  ctaLabel,
  stats,
}: OverviewData) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.top}>
          <div>
            <p className={s.eyebrow}>{eyebrow}</p>
            <h2 className={s.title}>{heading}</h2>
            <p className={s.body}>{body}</p>
            {ctaLabel && (
              <Button variant="dark" size="sm" iconRight="arrow-right">
                {ctaLabel}
              </Button>
            )}
          </div>

          <div className={s.badges}>
            <CertBadge variant="trusecure" className={s.badge} />
            <CertBadge variant="eco" className={s.badge} />
          </div>
        </div>

        <dl className={s.stats}>
          {stats.map((stat) => (
            <div key={stat.id} className={s.stat}>
              <StatIcon name={stat.icon} className={s.statIcon} />
              <div>
                <dt className={s.statLabel}>{stat.label}</dt>
                <dd className={s.statValue}>{stat.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
