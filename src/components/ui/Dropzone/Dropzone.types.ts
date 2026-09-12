export interface DropzoneProps {
  /** Existing image preview, if one has been chosen. */
  value?: string | null;
  onChange: (file: File | null) => void;
  accept?: string;
  maxSizeMb?: number;
  hint?: string;
  label?: string;
}
