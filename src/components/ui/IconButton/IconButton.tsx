import { cn } from '@/lib/cn';
import { Icon } from '../Icon';
import s from './IconButton.module.scss';
import type { IconButtonProps } from './IconButton.types';

export function IconButton({
  icon,
  label,
  variant = 'plain',
  size = 36,
  className,
  type = 'button',
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(s.iconButton, s[variant], className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <Icon name={icon} size={Math.round(size * 0.5)} />
    </button>
  );
}
