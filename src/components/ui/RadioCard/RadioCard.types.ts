import type { ReactNode } from 'react';

export interface RadioCardOption {
  value: string;
  label: string;
  preview?: ReactNode;
}

export interface RadioCardGroupProps {
  name: string;
  options: readonly RadioCardOption[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
}
