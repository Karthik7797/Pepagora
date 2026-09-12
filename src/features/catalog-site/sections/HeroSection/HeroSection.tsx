'use client';

import { cn } from '@/lib/cn';
import { Button, CarouselDots, IconButton } from '@/components/ui';
import { useCarousel } from '@/hooks';
import type { HeroData } from '../../types';
import s from './HeroSection.module.scss';

export function HeroSection({ banners, overlay }: HeroData) {
  const { index, goTo, next, prev } = useCarousel({ count: banners.length });
  const banner = banners[index];

  if (!banner) return null;

  return (
    <section className={s.hero} aria-roledescription="carousel">
      <div className={s.media}>
        {banner.image ? (
          // Object URL from the panel's uploader — next/image can't optimise it.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={banner.image} alt="" />
        ) : (
          <div className={s.fallback} />
        )}
      </div>

      <div
        className={cn(
          s.overlay,
          overlay === 'gradient' ? s.gradient : s.blackTint,
        )}
      />

      <div className={s.inner}>
        <div className={s.content}>
          <h1 className={s.title}>{banner.heading}</h1>
          {banner.subline && <p className={s.subline}>{banner.subline}</p>}
          {banner.ctaLabel && (
            <Button variant="outline" iconRight="arrow-right">
              {banner.ctaLabel}
            </Button>
          )}
        </div>
      </div>

      {banners.length > 1 && (
        <>
          <IconButton
            icon="arrow-left"
            label="Previous banner"
            variant="circle"
            size={40}
            className={cn(s.arrow, s.prev)}
            onClick={prev}
          />
          <IconButton
            icon="arrow-right"
            label="Next banner"
            variant="circle"
            size={40}
            className={cn(s.arrow, s.next)}
            onClick={next}
          />
          <div className={s.dots}>
            <CarouselDots
              count={banners.length}
              index={index}
              onSelect={goTo}
              variant="bars"
              label="Banner"
            />
          </div>
        </>
      )}
    </section>
  );
}
