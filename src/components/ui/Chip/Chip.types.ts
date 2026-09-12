import type { ButtonHTMLAttributes } from 'react';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  /** Non-interactive variant used for product attribute tags. */
  as?: 'button' | 'span';
}
