/** Filenames in /public/navicons, without the extension. */
export type NavIconName =
  | 'home'
  | 'messages'
  | 'sales'
  | 'catalog'
  | 'marketing'
  | 'sourcing'
  | 'analytics'
  | 'business-profile'
  | 'media';

export interface NavIconProps {
  name: NavIconName;
  size?: number;
  className?: string;
}
