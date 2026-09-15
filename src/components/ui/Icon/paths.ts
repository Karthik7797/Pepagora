import type { IconName } from './Icon.types';

/**
 * Icon path data, drawn on a 24x24 grid with a 1.5 stroke to match the design.
 * Kept inline rather than pulling in an icon package — the set is small and
 * fixed, and this keeps it out of the bundle.
 */
export const ICON_PATHS: Record<IconName, string> = {
  // app chrome
  menu: 'M4 7h16M4 12h10M4 17h16',
  search: 'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-4.35-4.35',
  mic: 'M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm7-3a7 7 0 0 1-14 0m7 7v3',
  image:
    'M4 5h16v14H4zM4 16l4.5-4.5 3 3L15 11l5 5M9.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c4 4.5 4 13.5 0 18',
  bell: 'M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Zm4 10a2 2 0 0 0 4 0',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 8a8 8 0 0 1 16 0',
  'chevron-down': 'm6 9 6 6 6-6',
  'chevron-up': 'm6 15 6-6 6 6',
  'chevron-left': 'm15 6-6 6 6 6',
  'chevron-right': 'm9 6 6 6-6 6',
  'arrow-left': 'M20 12H4m6-6-6 6 6 6',
  'arrow-right': 'M4 12h16m-6-6 6 6-6 6',
  plus: 'M12 5v14M5 12h14',
  close: 'M6 6l12 12M18 6 6 18',
  filter: 'M4 6h16M7 12h10M10 18h4',
  pencil: 'M4 20h4L20 8a2.8 2.8 0 0 0-4-4L4 16v4Zm10-14 4 4',
  play: 'M5 4v16l14-8-14-8Z',
  eye: 'M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12ZM12 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z',
  settings:
    'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8.4-3a8.4 8.4 0 0 0-.15-1.5l2-1.55-2-3.45-2.35.95a8.4 8.4 0 0 0-2.6-1.5L15 2H9l-.3 2.45a8.4 8.4 0 0 0-2.6 1.5L3.75 5 1.75 8.45l2 1.55A8.4 8.4 0 0 0 3.6 12c0 .5.05 1 .15 1.5l-2 1.55 2 3.45 2.35-.95a8.4 8.4 0 0 0 2.6 1.5L9 22h6l.3-2.45a8.4 8.4 0 0 0 2.6-1.5l2.35.95 2-3.45-2-1.55c.1-.5.15-1 .15-1.5Z',
  panel: 'M4 5h16v14H4zM10 5v14',
  upload:
    'M9 15V4m0 0L5.5 7.5M9 4l3.5 3.5M4 13v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4M14 8h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4',

  // left rail
  home: 'M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-8.5Z',
  messages: 'M4 6h16v10H8l-4 3V6Zm3 4h10M7 13h6',
  analytics: 'M4 5h16v14H4zM7 14l3-3 2.5 2.5L17 9',
  catalog: 'M4 5h16v14H4zM4 9h16M7 12h10M7 15h7',
  reports: 'M4 5h16v14H4zM9 16v-4M13 16V9M17 16v-2',
  sourcing:
    'M11 4 4 7.5v9L11 20l7-3.5v-4M4 7.5 11 11m0 0 7-3.5M11 11v9M17 9.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm2.2 2.2-2-2',
  trends: 'M4 5h16v14H4zM7 15l3.5-3.5 2 2L17 9m0 0h-3m3 0v3',
  profile: 'M4 6h16v12H4zM9 12a1.75 1.75 0 1 0 0-3.5A1.75 1.75 0 0 0 9 12Zm-2.5 4a2.5 2.5 0 0 1 5 0M14 10h4M14 13h4',
  media: 'M4 6h16v12H4zM4 9h16M10 12v4l3.5-2-3.5-2Z',
  support:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6.4-8.6 3.6 3.6m5.6 5.6 3.6 3.6m0-12.8-3.6 3.6m-5.6 5.6-3.6 3.6',

  // site content
  'shield-user':
    'M12 21c4-1.5 7-5 7-9V5.5L12 3 5 5.5V12c0 4 3 7.5 7 9Zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3.5 5a3.5 3.5 0 0 1 7 0',
  building: 'M5 4h14v16H5zM8 8h3M8 12h3M8 16h3M14 8h2M14 12h2M14 16h2',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3.5 2',
  briefcase: 'M3 8h18v11H3zM8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
  cash: 'M3 7h18v10H3zM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6 10v4M18 10v4',
  transfer: 'M8 4v16m0 0-3-3m3 3 3-3M16 20V4m0 0-3 3m3-3 3 3',
  expand: 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5',
  users:
    'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 8a6 6 0 0 1 12 0M16 6.5a2.5 2.5 0 0 1 0 5m1 3a5 5 0 0 1 4 4.5',
  box: 'M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 0 8 4-8 4-8-4 8-4Zm0 8v10',
  star: 'm12 3.5 2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.9l6.1-.8L12 3.5Z',
  quote:
    'M9.5 5.5C6.5 6.8 5 9.4 5 13v5.5h6.5V11H8.2c.1-1.7.6-2.9 1.9-3.7l-.6-1.8Zm9 0C15.5 6.8 14 9.4 14 13v5.5h6.5V11h-3.3c.1-1.7.6-2.9 1.9-3.7l-.6-1.8Z',
  chat: 'M4 6h16v10H9l-5 3.5V6Zm4 5h.01M12 11h.01M16 11h.01',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  phone:
    'M6 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2L21 15v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.2 2 2 0 0 1 6 3Z',
  pin: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  lock: 'M6 11h12v9H6zM9 11V8a3 3 0 0 1 6 0v3',
  linkedin: 'M5 9h3v11H5zM6.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11 20V9h3v1.5A3.5 3.5 0 0 1 20 13v7h-3v-6a2 2 0 0 0-4 0v6h-2Z',
  instagram:
    'M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5.5-8.5h.01',
  facebook: 'M14 20v-7h2.5l.5-3H14V8.5c0-.9.3-1.5 1.6-1.5H17V4.2A21 21 0 0 0 14.8 4C12.5 4 11 5.4 11 8v2H8.5v3H11v7h3Z',
  youtube:
    'M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 15.5v-7Zm7 1.5v4l4-2-4-2Z',

  // industries
  agriculture:
    'M12 21v-7m0 0c-3 0-5-2-5-5 3 0 5 2 5 5Zm0 0c3 0 5-2 5-5-3 0-5 2-5 5Zm0-5c0-2.5 1-4.5 3-6-2.5-.5-4.5.5-6 3',
  manufacturing:
    'M4 15h16v3H4zM6 15a6 6 0 0 1 12 0M12 5v4M8.5 6 10 9M15.5 6 14 9M4 20h16',
  construction:
    'M5 20V6l10-2v16M5 10h10M9 20v-4h3v4M15 8h4v12h-4M4 20h16',
  infrastructure:
    'M4 20V10m0 0a2 2 0 1 1 4 0m-4 0h4m0 0 12-3v3l-12 3V10M4 20h6',
  logistics:
    'M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 7 19Zm10 0a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 17 19Z',
  cement:
    'M3 17h13M5 17V9h6l3 4v4M8 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 7l4 2v6',
  piping:
    'M7 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 0h8a3 3 0 0 1 0 6H7m9-6a3 3 0 0 1 0 6',
  food: 'M7 21V9m0 0a2 2 0 0 1 4 0v12M7 9V4m4 5V4m1 17V9m0 0a2 2 0 0 1 4 0v12M12 9V4m4 5V4',
};
