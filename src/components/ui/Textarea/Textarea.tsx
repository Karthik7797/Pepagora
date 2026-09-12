'use client';

import { useId } from 'react';
import { cn } from '@/lib/cn';
import s from './Textarea.module.scss';
import type { TextareaProps } from './Textarea.types';

export function Textarea({
  label,
  maxLength,
  error,
  className,
  id,
  value,
  rows = 4,
  ...props
}: TextareaProps) {
  const autoId = useId();
  const textareaId = id ?? autoId;
  const showCounter = typeof maxLength === 'number';
  const length = String(value ?? '').length;

  return (
    <div className={s.field}>
      {label && (
        <label className={s.label} htmlFor={textareaId}>
          {label}
        </label>
      )}

      <div className={s.control}>
        <textarea
          id={textareaId}
          rows={rows}
          value={value}
          maxLength={maxLength}
          aria-invalid={Boolean(error)}
          className={cn(s.textarea, className)}
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
