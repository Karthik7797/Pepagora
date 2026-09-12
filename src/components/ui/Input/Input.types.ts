import type { InputHTMLAttributes } from 'react';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  /** Shows a "0/45" counter and enforces the limit. */
  maxLength?: number;
  error?: string;
}
