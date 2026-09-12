import type { RailGroup } from './IconRail.types';

/**
 * Full seller navigation, shown once inside the editor.
 */
export const RAIL_GROUPS: RailGroup[] = [
  {
    id: 'connect',
    title: 'Connect',
    items: [
      { id: 'my-pepagora', navIcon: 'home', label: 'My Pepagora' },
      { id: 'messages', navIcon: 'messages', label: 'Messages' },
    ],
  },
  {
    id: 'manage',
    title: 'Manage',
    items: [
      { id: 'sales', navIcon: 'sales', label: 'Sales' },
      {
        id: 'catalog',
        navIcon: 'catalog',
        label: 'Catalog & Website',
        href: '/catalog',
      },
      { id: 'marketing', navIcon: 'marketing', label: 'Marketing' },
      { id: 'sourcing', navIcon: 'sourcing', label: 'Sourcing' },
      { id: 'analytics', navIcon: 'analytics', label: 'Analytics' },
    ],
  },
  {
    id: 'setup',
    title: 'Setup',
    items: [
      {
        id: 'business-profile',
        navIcon: 'business-profile',
        label: 'Business Profile',
      },
      { id: 'media', navIcon: 'media', label: 'Media' },
    ],
  },
];

/**
 * Reduced navigation for the catalog overview, before the editor is opened.
 * The design trims the rail to the entries relevant at that point.
 */
export const RAIL_GROUPS_COMPACT: RailGroup[] = [
  {
    id: 'connect',
    title: 'Connect',
    items: [{ id: 'my-pepagora', navIcon: 'home', label: 'My Pepagora' }],
  },
  {
    id: 'manage',
    title: 'Manage',
    items: [
      { id: 'sales', navIcon: 'sales', label: 'Sales' },
      {
        id: 'catalog',
        navIcon: 'catalog',
        label: 'Catalog & Website',
        href: '/catalog',
      },
      { id: 'marketing', navIcon: 'marketing', label: 'Marketing' },
    ],
  },
  {
    id: 'setup',
    title: 'Setup',
    items: [
      {
        id: 'business-profile',
        navIcon: 'business-profile',
        label: 'Business Profile',
      },
    ],
  },
];

export const RAIL_FOOTER: RailGroup = {
  id: 'footer',
  items: [
    { id: 'support', icon: 'support', label: 'Support' },
    { id: 'settings', icon: 'settings', label: 'Settings' },
  ],
};

/** The overview screen shows only Settings at the foot of the rail. */
export const RAIL_FOOTER_COMPACT: RailGroup = {
  id: 'footer',
  items: [{ id: 'settings', icon: 'settings', label: 'Settings' }],
};
