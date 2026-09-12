import type { CatalogPage, Section } from '@/features/catalog-site/types';
import { PRODUCTS, PRODUCT_CATEGORIES } from './products';

const SECTION_SUBHEADING =
  'Manufacturer & Exporter of Modular belts, Slat Chains and a complete range of conveyor components.';

const PROMO_BODY =
  'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.';

const homeSections: Section[] = [
  {
    id: 'sec-hero',
    type: 'hero',
    visible: true,
    data: {
      overlay: 'gradient',
      banners: [
        {
          id: 'banner-1',
          image: null,
          heading: 'Your Message, The Hero of Every Banner.',
          subline:
            'This is your subheading text for banner, you can keep it minimal , short and crisp.',
          ctaLabel: 'View Products',
          ctaLink: 'products',
        },
        {
          id: 'banner-2',
          image: null,
          heading: 'Engineering Reliable Motion',
          subline:
            'Manufacturer & exporter of world-class modular belts, slat chains, and complete conveyor components.',
          ctaLabel: 'View Products',
          ctaLink: 'products',
        },
        {
          id: 'banner-3',
          image: null,
          heading: 'Built for Continuous Production.',
          subline:
            'Precision components engineered for Food & Beverage, Packaging, Pharma and Automotive lines.',
          ctaLabel: 'Explore Range',
          ctaLink: 'products',
        },
      ],
    },
  },
  {
    id: 'sec-overview',
    type: 'overview',
    visible: true,
    data: {
      eyebrow: 'Overview',
      heading: 'Our Commitment to Reliable Infrastructure',
      body: 'Pinak Industries operates a modern in-house manufacturing setup equipped with CNC turning and machining centers, laser cutting, welding, dust-proof painting, and packaging facilities. Using premium-grade materials and energy-efficient designs, the company follows ISO 9001:2015 standards and strict Good Manufacturing Practices.',
      ctaLabel: 'Learn More',
      badges: [
        { id: 'badge-trusecure', image: '', alt: 'TruSecure verified' },
        { id: 'badge-eco', image: '', alt: 'Eco verified' },
      ],
      stats: [
        {
          id: 'stat-1',
          icon: 'globe',
          label: 'Verification Status',
          value: 'Verified',
        },
        {
          id: 'stat-2',
          icon: 'shield-user',
          label: 'Legal Owner',
          value: 'Mr. Ramkumar',
        },
        {
          id: 'stat-3',
          icon: 'user',
          label: 'No. of Employees',
          value: '200 to 300 People',
        },
        {
          id: 'stat-4',
          icon: 'building',
          label: 'Registered Office Size',
          value: '3456/ Sft',
        },
        { id: 'stat-5', icon: 'clock', label: 'Countries', value: '25' },
        {
          id: 'stat-6',
          icon: 'briefcase',
          label: 'Business Type',
          value: 'Manufacturer',
        },
        {
          id: 'stat-7',
          icon: 'cash',
          label: 'Satisfied Customers',
          value: '2500',
        },
        {
          id: 'stat-8',
          icon: 'shield-user',
          label: 'Contract Manufacturing',
          value: 'No',
        },
      ],
    },
  },
  {
    id: 'sec-products',
    type: 'products',
    visible: true,
    data: {
      heading: 'Products',
      subheading: SECTION_SUBHEADING,
      categories: PRODUCT_CATEGORIES,
      activeCategory: 'Featured',
      productIds: PRODUCTS.slice(0, 6).map((p) => p.id),
    },
  },
  {
    id: 'sec-why-us',
    type: 'why-us',
    visible: true,
    data: {
      heading: 'Why us',
      subheading: SECTION_SUBHEADING,
      pointers: Array.from({ length: 8 }, (_, i) => ({
        id: `pointer-${i + 1}`,
        title: `Pointer ${i + 1}`,
        description:
          'Small Short description goes here to lorem ipusm this is dummy.',
      })),
    },
  },
  {
    id: 'sec-industries',
    type: 'industries',
    visible: true,
    data: {
      heading: 'Industry we serve',
      subheading: SECTION_SUBHEADING,
      industries: [
        { id: 'ind-1', name: 'Industry Name', icon: 'agriculture' },
        { id: 'ind-2', name: 'Industry Name', icon: 'manufacturing' },
        { id: 'ind-3', name: 'Industry Name', icon: 'construction' },
        { id: 'ind-4', name: 'Industry Name', icon: 'infrastructure' },
        { id: 'ind-5', name: 'Industry Name', icon: 'logistics' },
        { id: 'ind-6', name: 'Industry Name', icon: 'cement' },
        { id: 'ind-7', name: 'Industry Name', icon: 'piping' },
        { id: 'ind-8', name: 'Industry Name', icon: 'food' },
      ],
    },
  },
  {
    id: 'sec-infrastructure',
    type: 'infrastructure',
    visible: true,
    data: {
      heading: 'Infrastructure',
      body: PROMO_BODY,
      specs: [
        {
          id: 'spec-1',
          icon: 'transfer',
          label: 'Capacity',
          value: '3,000 MT to 45,000 MT.',
        },
        {
          id: 'spec-2',
          icon: 'expand',
          label: 'Factory Size',
          value: '1000 square feet',
        },
        {
          id: 'spec-3',
          icon: 'users',
          label: 'No. Of Employees',
          value: '501 to 1000 People',
        },
        {
          id: 'spec-4',
          icon: 'box',
          label: 'Monthly Production Capacity',
          value: '-',
        },
      ],
      gallery: [null, null, null],
    },
  },
  {
    id: 'sec-rnd',
    type: 'rnd',
    visible: true,
    data: {
      heading: 'R&D',
      body: `${PROMO_BODY}${PROMO_BODY}`,
      image: null,
    },
  },
  {
    id: 'sec-testimonials',
    type: 'testimonials',
    visible: true,
    data: {
      heading: 'Trusted by Leading Companies Across Industries',
      subheading:
        'Since 2018, we have delivered innovative robotics solutions to diverse industries, building lasting partnerships through excellence and reliability.',
      testimonials: Array.from({ length: 6 }, (_, i) => ({
        id: `testimonial-${i + 1}`,
        quote:
          'SpectraNav SLAM navigation technology revolutionized our material handling efficiency. Their autonomous mobile robot solutions seamlessly integrated with our production line."',
        author: 'G***R',
        company: 'Chennai Manufacturing Corp',
      })),
    },
  },
  {
    id: 'sec-clientele',
    type: 'clientele',
    visible: true,
    data: {
      heading: 'Clientele',
      subheading:
        'Find and connect with trusted suppliers worldwide. Our platform streamlines sourcing, ensuring the perfect match for your needs—from inquiries to orders.',
      // Figma exported the wordmarks at 2x; width/height are the drawn size.
      logos: [
        {
          id: 'logo-1',
          name: 'Blooming',
          src: '/projecticons/clienticons/Home/Logo 01.png',
          width: 109,
          height: 27,
        },
        {
          id: 'logo-2',
          name: 'BuildRight',
          src: '/projecticons/clienticons/Home/Logo 02.png',
          width: 121,
          height: 23,
        },
        {
          id: 'logo-3',
          name: 'Flowbot',
          src: '/projecticons/clienticons/Home/Logo 03.png',
          width: 102,
          height: 28,
        },
        {
          id: 'logo-4',
          name: 'EXPOR',
          src: '/projecticons/clienticons/Home/Logo 04.png',
          width: 98,
          height: 25,
        },
        {
          id: 'logo-5',
          name: 'Redo',
          src: '/projecticons/clienticons/Home/Logo 05.png',
          width: 81,
          height: 19,
        },
        {
          id: 'logo-6',
          name: 'EXPOR',
          src: '/projecticons/clienticons/Home/Logo 6.png',
          width: 98,
          height: 25,
        },
      ],
    },
  },
  {
    id: 'sec-cta-band',
    type: 'cta-band',
    visible: true,
    data: {
      heading: 'Ready to Optimize Your Operations?',
      subheading:
        'Get the latest insights on conveyor technology, industry trends, and product updates.',
      ctaLabel: 'Request a Quote',
    },
  },
  {
    id: 'sec-contact',
    type: 'contact',
    visible: false,
    data: {
      heading: 'Contact Us',
      email: 'Email@company.com',
      phone: '+91 9**** ****0',
      address:
        'No. 1A, Buddha 4th Street, Ramakrishnapuram, Ganapathy, Coimbatore - 641006, India',
    },
  },
];

/** Secondary pages reuse a subset of the same section types — this is the
 *  point of the registry: a page is just a different list of sections. */
const pick = (types: Section['type'][]): Section[] =>
  homeSections
    .filter((s) => types.includes(s.type))
    .map((s) => ({ ...s, id: `${s.id}-alt` }));

export const CATALOG_PAGES: CatalogPage[] = [
  { id: 'home', slug: 'home', name: 'Home', sections: homeSections },
  {
    id: 'about-us',
    slug: 'about-us',
    name: 'About Us',
    sections: pick(['overview', 'why-us', 'infrastructure', 'rnd', 'cta-band']),
  },
  {
    id: 'products',
    slug: 'products',
    name: 'Products',
    sections: pick(['products', 'industries', 'cta-band']),
  },
  {
    id: 'contact',
    slug: 'contact',
    name: 'Contact',
    sections: pick(['contact', 'cta-band']),
  },
];

export const getPageById = (id: string) =>
  CATALOG_PAGES.find((page) => page.id === id);
