import type { ReactNode } from 'react';

export interface AccordionProps {
  title: string;
  open: boolean;
  onToggle: () => void;
  /** Rendered between the title and the chevron — the Visible toggle. */
  actions?: ReactNode;
  children?: ReactNode;
}
