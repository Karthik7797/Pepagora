'use client';

import { Input, Textarea } from '@/components/ui';
import type { ProductsData } from '@/features/catalog-site/types';
import { FormHint, FormStack } from '../shared';
import type { SectionFormProps } from '../types';

export function ProductsForm({
  data,
  onChange,
}: SectionFormProps<ProductsData>) {
  return (
    <FormStack>
      <Input
        label="Heading"
        value={data.heading}
        onChange={(e) => onChange({ heading: e.target.value })}
      />
      <Textarea
        label="Subheading"
        value={data.subheading}
        onChange={(e) => onChange({ subheading: e.target.value })}
      />
      <FormHint>
        Choose which products appear here from the My Products tab.
      </FormHint>
    </FormStack>
  );
}
