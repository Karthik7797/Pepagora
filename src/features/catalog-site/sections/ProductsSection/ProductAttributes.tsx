'use client';

import { Chip } from '@/components/ui';
import { useFitCount } from '@/hooks';
import s from './ProductCard.module.scss';

/**
 * Attribute chips, trimmed to one line with a "+N" for the remainder.
 *
 * The narrow cards of the mobile grid fit one chip, so the design shows
 * "Attribute Value 1  +2" there; a wide card fits several and only the
 * leftovers collapse. Both come from the same measurement rather than a
 * breakpoint, so the count is always the number actually hidden.
 */
export function ProductAttributes({ attributes }: { attributes: string[] }) {
  const { ref, visible, hidden } = useFitCount<HTMLDivElement>(
    attributes.length,
  );

  if (attributes.length === 0) return null;

  return (
    <div className={s.attributes} ref={ref}>
      {attributes.map((attribute, i) => (
        <Chip
          key={attribute}
          as="span"
          data-fit-item=""
          // Overflowing chips stay mounted so their widths remain measurable
          // when the card grows; they are only taken out of the flow.
          className={i < visible ? undefined : s.attributeHidden}
        >
          {attribute}
        </Chip>
      ))}

      {hidden > 0 && (
        <Chip as="span" data-fit-more="">{`+${hidden}`}</Chip>
      )}
    </div>
  );
}
