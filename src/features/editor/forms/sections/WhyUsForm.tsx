'use client';

import type { WhyUsData } from '@/features/catalog-site/types';
import { HeadingForm } from '../HeadingForm';
import { ListForm } from '../ListForm';
import { FormDivider, FormStack } from '../shared';
import type { SectionFormProps } from '../types';

export function WhyUsForm({ data, onChange }: SectionFormProps<WhyUsData>) {
  return (
    <FormStack>
      <HeadingForm<WhyUsData> data={data} onChange={onChange} />

      <FormDivider />

      <ListForm
        items={data.pointers}
        onChange={(pointers) => onChange({ pointers })}
        itemLabel="Pointer"
        createItem={() => ({
          id: `pointer-${Date.now()}`,
          title: '',
          description: '',
        })}
      />
    </FormStack>
  );
}
