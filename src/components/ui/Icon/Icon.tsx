import { cn } from '@/lib/cn';
import { ICON_PATHS } from './paths';
import s from './Icon.module.scss';
import type { IconProps } from './Icon.types';

/** Renders a stroked 24x24 icon. Colour follows `currentColor`. */
export function Icon({ name, size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn(s.icon, className)}
      {...props}
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}
