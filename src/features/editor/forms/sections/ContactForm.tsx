'use client';

import { Input, Textarea } from '@/components/ui';
import type { ContactData } from '@/features/catalog-site/types';
import { FormStack } from '../shared';
import type { SectionFormProps } from '../types';

export function ContactForm({ data, onChange }: SectionFormProps<ContactData>) {
  return (
    <FormStack>
      <Input
        label="Heading"
        value={data.heading}
        onChange={(e) => onChange({ heading: e.target.value })}
      />
      <Input
        label="Email"
        type="email"
        value={data.email}
        onChange={(e) => onChange({ email: e.target.value })}
      />
      <Input
        label="Phone"
        value={data.phone}
        onChange={(e) => onChange({ phone: e.target.value })}
      />
      <Textarea
        label="Address"
        rows={3}
        value={data.address}
        onChange={(e) => onChange({ address: e.target.value })}
      />
    </FormStack>
  );
}
