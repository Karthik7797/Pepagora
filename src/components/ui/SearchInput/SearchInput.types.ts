import type { InputHTMLAttributes, ReactNode } from 'react';

export interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 'brand' is the red-bordered pill in the marketplace header; 'boxed' is the
   * square-cornered field used by the catalog site's own nav.
   */
  variant?: 'brand' | 'plain' | 'boxed';
  /** Controls rendered inside the field on the right — mic, image, etc. */
  trailing?: ReactNode;
  size?: 'sm' | 'md';
}
