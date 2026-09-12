'use client';

import Image from 'next/image';
import { IconButton } from '@/components/ui';
import { useCarousel } from '@/hooks';
import type { TestimonialsData } from '../../types';
import { SectionHeading } from '../shared';
import s from './TestimonialsSection.module.scss';

const PER_PAGE = 3;

export function TestimonialsSection({
  heading,
  subheading,
  testimonials,
}: TestimonialsData) {
  const pageCount = Math.ceil(testimonials.length / PER_PAGE);
  const { index, next, prev } = useCarousel({ count: pageCount });

  const visible = testimonials.slice(
    index * PER_PAGE,
    index * PER_PAGE + PER_PAGE,
  );

  return (
    <section className={s.section}>
      <div className={s.container}>
        <SectionHeading title={heading} subtitle={subheading} />

        <div className={s.grid}>
          {visible.map((testimonial) => (
            <figure key={testimonial.id} className={s.card}>
              <Image
                src="/projecticons/anoote.png"
                alt=""
                width={26}
                height={26}
                className={s.quoteMark}
              />
              <blockquote className={s.quote}>{testimonial.quote}</blockquote>
              <figcaption className={s.author}>
                <p className={s.name}>{testimonial.author}</p>
                <p className={s.company}>{testimonial.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {pageCount > 1 && (
          <div className={s.controls}>
            <IconButton
              icon="arrow-left"
              label="Previous testimonials"
              variant="circle"
              size={38}
              onClick={prev}
            />
            <IconButton
              icon="arrow-right"
              label="Next testimonials"
              variant="circle"
              size={38}
              onClick={next}
            />
          </div>
        )}
      </div>
    </section>
  );
}
