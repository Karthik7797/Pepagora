'use client';

import { useId, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { useClickOutside } from '@/hooks';
import { Icon } from '../Icon';
import s from './Select.module.scss';
import type { SelectProps } from './Select.types';

export function Select({
  options,
  value,
  onChange,
  label,
  placeholder = 'Select an option',
  disabled,
  size = 'md',
  className,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const labelId = useId();

  useClickOutside(wrapperRef, () => setOpen(false), open);

  const selected = options.find((option) => option.value === value);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }

    // Let the arrow keys open the menu, matching native select behaviour.
    if (!open && (event.key === 'ArrowDown' || event.key === 'Enter')) {
      event.preventDefault();
      setOpen(true);
    }
  };

  return (
    <div className={cn(s.field, s[size], className)}>
      {label && (
        <span className={s.label} id={labelId}>
          {label}
        </span>
      )}

      <div className={s.wrapper} ref={wrapperRef}>
        <button
          type="button"
          className={s.trigger}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={label ? labelId : undefined}
          onClick={() => setOpen((prev) => !prev)}
          onKeyDown={handleKeyDown}
        >
          <span className={selected ? s.value : s.placeholder}>
            {selected?.label ?? placeholder}
          </span>
          {/* Stacked chevrons read as a native stepper rather than a menu caret. */}
          <span className={s.stepper} aria-hidden="true">
            <Icon name="chevron-up" size={10} />
            <Icon name="chevron-down" size={10} />
          </span>
        </button>

        {open && (
          <ul className={s.menu} role="listbox" aria-labelledby={labelId}>
            {options.map((option) => (
              <li key={option.value} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={option.value === value}
                  className={s.option}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
