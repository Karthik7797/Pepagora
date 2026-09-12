export const ROUTES = {
  catalog: '/catalog',
  editor: (pageId: string) => `/catalog/editor/${pageId}`,
} as const;

/** Character limits shown as counters in the editor panel. */
export const FIELD_LIMITS = {
  heroHeading: 45,
  heroSubline: 120,
  sectionHeading: 60,
  sectionBody: 400,
} as const;

export const UPLOAD = {
  maxSizeMb: 5,
  accept: 'image/jpeg,image/png',
  hint: 'Upload Jpeg, png (Max 5MB)',
} as const;

/** Options for the hero CTA link picker. */
export const LINK_OPTIONS = [
  { value: 'products', label: 'Products' },
  { value: 'about-us', label: 'About us' },
  { value: 'contact-us', label: 'Contact us' },
  { value: 'others', label: 'Others' },
] as const;
