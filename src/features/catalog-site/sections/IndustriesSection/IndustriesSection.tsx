import type { IndustriesData } from '../../types';
import { SectionHeading } from '../shared';
import { IndustryIcon } from './IndustryIcon';
import s from './IndustriesSection.module.scss';

export function IndustriesSection({
  heading,
  subheading,
  industries,
}: IndustriesData) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <SectionHeading title={heading} subtitle={subheading} />

        <div className={s.grid}>
          {industries.map((industry) => (
            <article key={industry.id} className={s.card}>
              <IndustryIcon name={industry.icon} className={s.icon} />
              <h3 className={s.name}>{industry.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
