import { Children } from 'react';
import { cn } from '@/lib/cn';
import { Icon } from '../Icon';
import s from './Button.module.scss';
import type { ButtonProps } from './Button.types';

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  pill,
  fullWidth,
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const iconSize = size === 'sm' ? 14 : 16;

  return (
    <button
      type={type}
      className={cn(
        s.button,
        s[variant],
        s[size],
        pill && s.pill,
        fullWidth && s.fullWidth,
        className,
      )}
      {...props}
    >
      {iconLeft && <Icon name={iconLeft} size={iconSize} />}
      {/* Only text is wrapped: it is what should ellipsise when the button is
          squeezed, and an unwrapped text node cannot carry the ellipsis
          itself. Element children (a caller passing its own icon) stay direct
          flex items so they keep sitting beside the label, not inside it. */}
      {Children.map(children, (child) =>
        typeof child === 'string' || typeof child === 'number' ? (
          <span className={s.label}>{child}</span>
        ) : (
          child
        ),
      )}
      {iconRight && <Icon name={iconRight} size={iconSize} />}
    </button>
  );
}
