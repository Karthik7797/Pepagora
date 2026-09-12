'use client';

import { useId } from 'react';
import { cn } from '@/lib/cn';
import s from './Input.module.scss';
import type { InputProps } from './Input.types';

export function Input({
  label,
  maxLength,
  error,
  className,
  id,
  value,
  ...props
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const showCounter = typeof maxLength === 'number';
  const length = String(value ?? '').length;

  return (
    <div className={s.field}>
      {label && (
        <label className={s.label} htmlFor={inputId}>
          {label}
        </label>
      )}

      <div className={s.control}>
        <input
          id={inputId}
          value={value}
          maxLength={maxLength}
          data-invalid={Boolean(error)}
          aria-invalid={Boolean(error)}
          className={cn(s.input, showCounter && s.withCounter, className)}
          {...props}
        />
        {showCounter && (
          <span className={s.counter}>
            {length}/{maxLength}
          </span>
        )}
      </div>

      {error && <span className={s.error}>{error}</span>}
    </div>
  );
}
