export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: readonly SelectOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  /** Renders a compact 32px control instead of the default 40px. */
  size?: 'sm' | 'md';
  className?: string;
}
