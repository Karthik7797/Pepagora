import type { Product } from '@/features/catalog-site/types';

const DESCRIPTION =
  'Small Short description goes here to lorem ipusm this is dummy textSmall Short description goes here';

export const PRODUCT_CATEGORIES = [
  'Featured',
  'Modular Belts',
  'Conveyor Components',
  'Bearing blocks',
  'Polypropylene Tank',
  'Chain Guide',
  'Slat Chains',
  'Wear Strips',
  'Engineering Plastic',
  'Industrial Cleaning Brushes',
  'Wire Mesh',
];

/** Stands in for the products API. Six render on the canvas, the rest fill
 *  the "My Products" list in the panel. */
export const PRODUCTS: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: `product-${i + 1}`,
  name: 'Product Name',
  description: DESCRIPTION,
  image: null,
  attributes: [
    'Attribute Value 1',
    'Attribute Value 2',
    'Attribute Value 3',
    'Attribute Value 4',
    'Attribute Value 5',
    'Attribute Value 6',
  ],
  category: PRODUCT_CATEGORIES[i % PRODUCT_CATEGORIES.length],
  views: 9,
  impressions: 9,
  converted: 12,
  hits: 12,
  enabled: true,
}));

/** Longer titles, matching the product list shown in the editor panel. */
export const PANEL_PRODUCTS: Product[] = Array.from({ length: 10 }, (_, i) => ({
  ...PRODUCTS[i],
  id: `panel-product-${i + 1}`,
  name: 'Classic Black Leather Biker Jacket with Asymmetrical Zipper',
}));
