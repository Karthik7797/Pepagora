import type { ButtonHTMLAttributes } from 'react';
import type { IconName } from '../Icon';

export type IconButtonVariant = 'plain' | 'circle' | 'outline' | 'filled';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  /** Required — icon-only controls need an accessible name. */
  label: string;
  variant?: IconButtonVariant;
  size?: number;
}
