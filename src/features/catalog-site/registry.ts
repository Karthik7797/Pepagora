import type { ComponentType } from 'react';
import { ClienteleSection } from './sections/ClienteleSection';
import { ContactSection } from './sections/ContactSection';
import { CtaBandSection } from './sections/CtaBandSection';
import { HeroSection } from './sections/HeroSection';
import { IndustriesSection } from './sections/IndustriesSection';
import { InfrastructureSection } from './sections/InfrastructureSection';
import { OverviewSection } from './sections/OverviewSection';
import { ProductsSection } from './sections/ProductsSection';
import { RndSection } from './sections/RndSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { WhyUsSection } from './sections/WhyUsSection';
import type { SectionData, SectionType } from './types';

interface SectionEntry<T extends SectionType> {
  /** Rendered on the canvas. Receives the section's `data` as props. */
  canvas: ComponentType<SectionData<T>>;
  /** Title shown in the editor accordion and the canvas hover badge. */
  label: string;
  /** Sections without a Visible toggle in the design. */
  alwaysVisible?: boolean;
}

type Registry = { [T in SectionType]: SectionEntry<T> };

/**
 * Maps each section type to the component that renders it.
 *
 * `satisfies Registry` is doing real work here: add a variant to the `Section`
 * union without adding it below and the build fails, so a page can never hold
 * a section the canvas doesn't know how to draw.
 */
export const SECTION_REGISTRY = {
  hero: { canvas: HeroSection, label: 'Hero Section', alwaysVisible: true },
  overview: {
    canvas: OverviewSection,
    label: 'Overview',
    alwaysVisible: true,
  },
  products: { canvas: ProductsSection, label: 'Products' },
  'why-us': { canvas: WhyUsSection, label: 'Why Us?' },
  infrastructure: { canvas: InfrastructureSection, label: 'Infrastructure' },
  industries: { canvas: IndustriesSection, label: 'Industries We Serve' },
  rnd: { canvas: RndSection, label: 'R&D' },
  testimonials: { canvas: TestimonialsSection, label: 'Testimonials' },
  clientele: { canvas: ClienteleSection, label: 'Clientele' },
  'cta-band': { canvas: CtaBandSection, label: 'Call to Action' },
  contact: { canvas: ContactSection, label: 'Contact Us' },
} satisfies Registry;

export const getSectionLabel = (type: SectionType) =>
  SECTION_REGISTRY[type].label;

/** Sections the design shows without a Visible toggle. */
export const isAlwaysVisible = (type: SectionType) =>
  'alwaysVisible' in SECTION_REGISTRY[type] &&
  SECTION_REGISTRY[type].alwaysVisible === true;
