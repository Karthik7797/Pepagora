import type { IconName, NavIconName } from '@/components/ui';

export interface RailItem {
  id: string;
  /** Exported nav artwork, used for the main navigation entries. */
  navIcon?: NavIconName;
  /** Inline icon, used for the support and settings entries at the bottom. */
  icon?: IconName;
  label: string;
  href?: string;
}

export interface RailGroup {
  id: string;
  /** Heading shown only when the rail is expanded. */
  title?: string;
  items: RailItem[];
}
