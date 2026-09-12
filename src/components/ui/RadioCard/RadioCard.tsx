'use client';

import s from './RadioCard.module.scss';
import type { RadioCardGroupProps } from './RadioCard.types';

/** Radio group where each option shows a visual preview above its label. */
export function RadioCardGroup({
  name,
  options,
  value,
  onChange,
  ariaLabel,
}: RadioCardGroupProps) {
  return (
    <div className={s.group} role="radiogroup" aria-label={ariaLabel}>
      {options.map((option) => (
        <label key={option.value} className={s.option}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={option.value === value}
            onChange={() => onChange(option.value)}
            className={s.input}
          />
          <span className={s.preview}>{option.preview}</span>
          <span className={s.label}>
            <span className={s.indicator} aria-hidden="true" />
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
