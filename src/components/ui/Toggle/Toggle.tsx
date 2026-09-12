'use client';

import s from './Toggle.module.scss';
import type { ToggleProps } from './Toggle.types';

export function Toggle({
  checked,
  onChange,
  label,
  caption,
  disabled,
}: ToggleProps) {
  return (
    <span className={s.wrapper}>
      {caption && <span className={s.caption}>{caption}</span>}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        data-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={s.track}
      >
        <span className={s.thumb} />
      </button>
    </span>
  );
}
