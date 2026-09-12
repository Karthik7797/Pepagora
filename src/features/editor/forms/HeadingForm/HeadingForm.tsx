'use client';

import { Input, Textarea } from '@/components/ui';
import { FIELD_LIMITS } from '@/lib/constants';
import { FormStack } from '../shared';

interface HeadingLike {
  heading?: string;
  subheading?: string;
  body?: string;
  eyebrow?: string;
  ctaLabel?: string;
}

interface Props<T extends HeadingLike> {
  data: T;
  onChange: (patch: Partial<T>) => void;
}

/**
 * Covers the sections whose editable content is a heading plus supporting
 * copy — Overview, Infrastructure, R&D, Clientele, Testimonials and the CTA
 * band. Fields render only when the section actually has them.
 */
export function HeadingForm<T extends HeadingLike>({
  data,
  onChange,
}: Props<T>) {
  const patch = (value: Partial<HeadingLike>) => onChange(value as Partial<T>);

  return (
    <FormStack>
      {'eyebrow' in data && (
        <Input
          label="Eyebrow"
          value={data.eyebrow ?? ''}
          onChange={(e) => patch({ eyebrow: e.target.value })}
        />
      )}

      {'heading' in data && (
        <Input
          label="Heading"
          maxLength={FIELD_LIMITS.sectionHeading}
          value={data.heading ?? ''}
          onChange={(e) => patch({ heading: e.target.value })}
        />
      )}

      {'subheading' in data && (
        <Textarea
          label="Subheading"
          maxLength={FIELD_LIMITS.sectionBody}
          value={data.subheading ?? ''}
          onChange={(e) => patch({ subheading: e.target.value })}
        />
      )}

      {'body' in data && (
        <Textarea
          label="Description"
          maxLength={FIELD_LIMITS.sectionBody}
          rows={6}
          value={data.body ?? ''}
          onChange={(e) => patch({ body: e.target.value })}
        />
      )}

      {'ctaLabel' in data && (
        <Input
          label="Button label"
          value={data.ctaLabel ?? ''}
          onChange={(e) => patch({ ctaLabel: e.target.value })}
        />
      )}
    </FormStack>
  );
}
