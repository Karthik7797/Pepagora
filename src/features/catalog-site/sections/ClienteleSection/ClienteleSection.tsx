'use client';

import Image from 'next/image';

import { IconButton } from '@/components/ui';
import { useCarousel } from '@/hooks';
import type { ClienteleData } from '../../types';
import s from './ClienteleSection.module.scss';

export function ClienteleSection({
  heading,
  subheading,
  logos,
}: ClienteleData) {
  const { next, prev } = useCarousel({ count: Math.max(logos.length - 5, 1) });

  return (
    <section className={s.section}>
      <div className={s.container}>
        <header className={s.header}>
          <h2 className={s.title}>{heading}</h2>

          {/* The export puts the arrows on the subtitle's row, bottom-aligned
              against it, rather than up beside the heading. */}
          <div className={s.subtitleRow}>
            <p className={s.subtitle}>{subheading}</p>

            <div className={s.controls}>
              <IconButton
                icon="arrow-left"
                label="Previous logos"
                variant="circle"
                size={38}
                onClick={prev}
              />
              <IconButton
                icon="arrow-right"
                label="Next logos"
                variant="circle"
                size={38}
                onClick={next}
              />
            </div>
          </div>
        </header>

        <div className={s.logos}>
          {logos.map((logo) => (
            <div key={logo.id} className={s.logo}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
