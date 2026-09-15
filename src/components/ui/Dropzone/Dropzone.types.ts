export interface DropzoneProps {
  /** Existing image preview, if one has been chosen. */
  value?: string | null;
  onChange: (file: File | null) => void;
  accept?: string;
  maxSizeMb?: number;
  hint?: string;
  label?: string;
  /**
   * 'dropzone' is the drag & drop box used by the banner forms. 'compact'
   * is the logo variant: a single Upload file pill when empty, and a
   * full-width Change bar under the preview once a file is chosen.
   */
  variant?: 'dropzone' | 'compact';
}
