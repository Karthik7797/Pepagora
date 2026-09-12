import { clsx, type ClassValue } from 'clsx';

/** Conditional className helper. Thin wrapper so imports stay short. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
