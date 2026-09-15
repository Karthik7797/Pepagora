export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Visible text beside the box. Doubles as the accessible name. */
  label: string;
  disabled?: boolean;
}
