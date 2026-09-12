/**
 * The content model for a catalog page.
 *
 * A page is an ordered list of sections. Each section is discriminated by its
 * `type`, which determines the shape of its `data` and — via the registry —
 * which component renders it on the canvas and which form edits it.
 */

export interface BannerSlide {
  id: string;
  image: string | null;
  heading: string;
  subline: string;
  ctaLabel: string;
  ctaLink: string;
}

export type BannerOverlay = 'gradient' | 'black-tint';

export interface HeroData {
  banners: BannerSlide[];
  overlay: BannerOverlay;
}

export interface OverviewStat {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface OverviewData {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  badges: { id: string; image: string; alt: string }[];
  stats: OverviewStat[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string | null;
  attributes: string[];
  category: string;
  views: number;
  impressions: number;
  converted: number;
  hits: number;
  enabled: boolean;
}

export interface ProductsData {
  heading: string;
  subheading: string;
  categories: string[];
  activeCategory: string;
  productIds: string[];
}

export interface Pointer {
  id: string;
  title: string;
  description: string;
}

export interface WhyUsData {
  heading: string;
  subheading: string;
  pointers: Pointer[];
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
}

export interface IndustriesData {
  heading: string;
  subheading: string;
  industries: Industry[];
}

export interface SpecCard {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface InfrastructureData {
  heading: string;
  body: string;
  specs: SpecCard[];
  gallery: (string | null)[];
}

export interface RndData {
  heading: string;
  body: string;
  image: string | null;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
}

export interface TestimonialsData {
  heading: string;
  subheading: string;
  testimonials: Testimonial[];
}

export interface ClienteleData {
  heading: string;
  subheading: string;
  logos: { id: string; name: string; src: string; width: number; height: number }[];
}

export interface CtaBandData {
  heading: string;
  subheading: string;
  ctaLabel: string;
}

export interface ContactData {
  heading: string;
  email: string;
  phone: string;
  address: string;
}

/** Every section variant. Adding one here forces a registry entry. */
export type Section =
  | { id: string; type: 'hero'; visible: boolean; data: HeroData }
  | { id: string; type: 'overview'; visible: boolean; data: OverviewData }
  | { id: string; type: 'products'; visible: boolean; data: ProductsData }
  | { id: string; type: 'why-us'; visible: boolean; data: WhyUsData }
  | { id: string; type: 'industries'; visible: boolean; data: IndustriesData }
  | {
      id: string;
      type: 'infrastructure';
      visible: boolean;
      data: InfrastructureData;
    }
  | { id: string; type: 'rnd'; visible: boolean; data: RndData }
  | {
      id: string;
      type: 'testimonials';
      visible: boolean;
      data: TestimonialsData;
    }
  | { id: string; type: 'clientele'; visible: boolean; data: ClienteleData }
  | { id: string; type: 'cta-band'; visible: boolean; data: CtaBandData }
  | { id: string; type: 'contact'; visible: boolean; data: ContactData };

export type SectionType = Section['type'];

/** Narrows a section to the variant matching `T`. */
export type SectionOf<T extends SectionType> = Extract<Section, { type: T }>;

/** The `data` payload for a given section type. */
export type SectionData<T extends SectionType> = SectionOf<T>['data'];

export interface CatalogPage {
  id: string;
  slug: string;
  name: string;
  sections: Section[];
}

export interface Catalog {
  id: string;
  name: string;
  companyName: string;
  pages: CatalogPage[];
  plan: { name: string; price: string; nextBilling: string };
}
