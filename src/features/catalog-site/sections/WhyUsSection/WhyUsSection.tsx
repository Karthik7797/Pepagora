import Image from 'next/image';
import type { WhyUsData } from '../../types';
import { SectionHeading } from '../shared';
import s from './WhyUsSection.module.scss';

export function WhyUsSection({ heading, subheading, pointers }: WhyUsData) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <SectionHeading title={heading} subtitle={subheading} />

        <div className={s.grid}>
          {pointers.map((pointer) => (
            <article key={pointer.id} className={s.card}>
              <Image
                src="/projecticons/industryicons/star.png"
                alt=""
                width={32}
                height={32}
                className={s.icon}
              />
              <h3 className={s.title}>{pointer.title}</h3>
              <p className={s.description}>{pointer.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
