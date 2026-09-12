import { cn } from '@/lib/cn';
import s from './Chip.module.scss';
import type { ChipProps } from './Chip.types';

export function Chip({
  active,
  as = 'button',
  className,
  children,
  ...props
}: ChipProps) {
  if (as === 'span') {
    return (
      <span className={cn(s.chip, s.static, className)} {...props}>
        {children}
      </span>
    );
  }

  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(s.chip, active && s.active, className)}
      {...props}
    >
      {children}
    </button>
  );
}
