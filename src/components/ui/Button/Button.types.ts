import type { ButtonHTMLAttributes } from 'react';
import type { IconName } from '../Icon';

export type ButtonVariant =
  | 'primary' // brand red — Publish, Save & Continue
  | 'dark' // near-black — Learn More
  | 'gradient' // black gradient — Request for Quotation
  | 'black' // pure black — the catalog site's Request Quote
  | 'green' // site accent — View Products, Request Quote
  | 'outline' // bordered — Save for Later, View site
  | 'subtle' // light grey fill — Chat now
  | 'ghost'; // text only — toolbar actions

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icon rendered before the label. */
  iconLeft?: IconName;
  /** Icon rendered after the label — usually 'arrow-right'. */
  iconRight?: IconName;
  /** Fully rounded rather than the default 8px radius. */
  pill?: boolean;
  fullWidth?: boolean;
}
