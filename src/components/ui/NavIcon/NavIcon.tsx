import { cn } from '@/lib/cn';
import s from './NavIcon.module.scss';
import type { NavIconProps } from './NavIcon.types';

export function NavIcon({ name, size = 24, className }: NavIconProps) {
  const url = `url(/navicons/${name}.png)`;

  return (
    <span
      className={cn(s.icon, className)}
      style={{
        width: size,
        height: size,
        maskImage: url,
        WebkitMaskImage: url,
      }}
      aria-hidden="true"
    />
  );
}
