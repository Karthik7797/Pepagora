import type { Catalog } from '@/features/catalog-site/types';
import { CATALOG_PAGES } from './pages';

export const CATALOG: Catalog = {
  id: 'spectra-plast',
  name: 'Catalog & Website',
  companyName: 'Spectra Plast Pvt. Ltd.',
  pages: CATALOG_PAGES,
  plan: { name: 'Starter', price: '0 Per Month', nextBilling: '-' },
};

export const FOOTER_LINKS = {
  company: [
    'About Us',
    'Infrastructure',
    'Quality Assurance',
    'Team',
    'Contact us',
  ],
  productGroups: Array.from({ length: 3 }, (_, col) =>
    Array.from({ length: 3 }, (_, row) => ({
      id: `group-${col}-${row}`,
      title: `Group${row + 1}`,
      items: [
        'Mini Vertical Band Sealing Machine',
        'Horizontal Band Sealer – Stainless',
      ],
    })),
  ),
};

/** Catalog site navigation. `hasMenu` renders the dropdown caret. */
export const SITE_NAV = [
  { label: 'Home', hasMenu: false },
  { label: 'About us', hasMenu: true },
  { label: 'Products', hasMenu: true },
  { label: 'Contact', hasMenu: false },
];
