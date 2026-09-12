import { cn } from '@/lib/cn';
import { Icon } from '../Icon';
import s from './SearchInput.module.scss';
import type { SearchInputProps } from './SearchInput.types';

export function SearchInput({
  variant = 'plain',
  trailing,
  size = 'md',
  className,
  ...props
}: SearchInputProps) {
  return (
    <div className={cn(s.wrapper, s[variant], s[size], className)}>
      <Icon name="search" size={16} className={s.icon} />
      <input type="search" className={s.input} {...props} />
      {trailing && <span className={s.trailing}>{trailing}</span>}
    </div>
  );
}
