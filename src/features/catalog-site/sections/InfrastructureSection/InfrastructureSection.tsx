'use client';

import { cn } from '@/lib/cn';
import { CarouselDots, IconButton, ImagePlaceholder } from '@/components/ui';
import { useCarousel } from '@/hooks';
import type { InfrastructureData } from '../../types';
import { SpecIcon } from './SpecIcon';
import s from './InfrastructureSection.module.scss';

export function InfrastructureSection({
  heading,
  body,
  specs,
  gallery,
}: InfrastructureData) {
  const { index, goTo, next, prev } = useCarousel({ count: gallery.length });

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.layout}>
          <div>
            <h2 className={s.title}>{heading}</h2>
            <p className={s.body}>{body}</p>

            <div className={s.specs}>
              {specs.map((spec) => (
                <article key={spec.id} className={s.spec}>
                  <SpecIcon name={spec.icon} className={s.specIcon} />
                  <h3 className={s.specLabel}>{spec.label}</h3>
                  <p className={s.specValue}>{spec.value}</p>
                </article>
              ))}
            </div>
          </div>

          <div className={s.gallery}>
            <ImagePlaceholder className={s.frame} />

            {gallery.length > 1 && (
              <>
                <IconButton
                  icon="arrow-left"
                  label="Previous image"
                  variant="circle"
                  size={38}
                  className={cn(s.arrow, s.prev)}
                  onClick={prev}
                />
                <IconButton
                  icon="arrow-right"
                  label="Next image"
                  variant="circle"
                  size={38}
                  className={cn(s.arrow, s.next)}
                  onClick={next}
                />
                <div className={s.dots}>
                  <CarouselDots
                    count={gallery.length}
                    index={index}
                    onSelect={goTo}
                    label="Infrastructure image"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
