import type { ComponentType } from 'react';
import type { SectionData, SectionType } from '@/features/catalog-site/types';
import { HeadingForm } from './HeadingForm';
import { HeroForm } from './HeroForm';
import {
  ContactForm,
  IndustriesForm,
  ProductsForm,
  WhyUsForm,
} from './sections';
import type { SectionFormProps } from './types';

type FormRegistry = {
  [T in SectionType]: ComponentType<SectionFormProps<SectionData<T>>>;
};

/**
 * Maps each section type to the form that edits it. Mirrors the canvas
 * registry, so the panel and the page always agree on what a section is.
 *
 * Sections whose content is just headings and copy share `HeadingForm` rather
 * than each getting a near-identical file.
 */
export const FORM_REGISTRY = {
  hero: HeroForm,
  overview: HeadingForm,
  products: ProductsForm,
  'why-us': WhyUsForm,
  infrastructure: HeadingForm,
  industries: IndustriesForm,
  rnd: HeadingForm,
  testimonials: HeadingForm,
  clientele: HeadingForm,
  'cta-band': HeadingForm,
  contact: ContactForm,
} satisfies FormRegistry;
