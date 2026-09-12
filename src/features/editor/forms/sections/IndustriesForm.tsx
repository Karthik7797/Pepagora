'use client';

import type { IndustriesData } from '@/features/catalog-site/types';
import { HeadingForm } from '../HeadingForm';
import { ListForm } from '../ListForm';
import { FormDivider, FormStack } from '../shared';
import type { SectionFormProps } from '../types';

export function IndustriesForm({
  data,
  onChange,
}: SectionFormProps<IndustriesData>) {
  return (
    <FormStack>
      <HeadingForm<IndustriesData> data={data} onChange={onChange} />

      <FormDivider />

      <ListForm
        items={data.industries}
        onChange={(industries) => onChange({ industries })}
        itemLabel="Industry"
        createItem={() => ({
          id: `industry-${Date.now()}`,
          name: '',
          icon: 'manufacturing',
        })}
      />
    </FormStack>
  );
}
