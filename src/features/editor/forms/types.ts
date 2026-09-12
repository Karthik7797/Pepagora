/** Every section form receives its data slice and a patch callback. */
export interface SectionFormProps<T> {
  data: T;
  onChange: (patch: Partial<T>) => void;
}
