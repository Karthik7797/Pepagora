export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Accessible name, e.g. "Toggle Why Us section visibility". */
  label: string;
  /** Optional visible text rendered before the switch. */
  caption?: string;
  disabled?: boolean;
}
