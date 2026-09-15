'use client';

import s from './Checkbox.module.scss';
import type { CheckboxProps } from './Checkbox.types';

/**
 * Square checkbox — filled near-black with a white tick when checked. The
 * tick is drawn here rather than via `Icon` so it can carry a heavier stroke
 * than the shared 1.5 weight.
 */
export function Checkbox({
  checked,
  onChange,
  label,
  disabled,
}: CheckboxProps) {
  return (
    <label className={s.wrapper} data-disabled={disabled || undefined}>
      <input
        type="checkbox"
        className={s.input}
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
      />

      <span className={s.box} aria-hidden="true">
        <svg viewBox="0 0 16 16" className={s.tick} focusable="false">
          <path
            d="M3.5 8.5l3 3 6-6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.25}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className={s.label}>{label}</span>
    </label>
  );
}
