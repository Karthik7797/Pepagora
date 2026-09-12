export interface TabItem<T extends string = string> {
  id: T;
  label: string;
}

export interface TabsProps<T extends string = string> {
  tabs: readonly TabItem<T>[];
  value: T;
  onChange: (id: T) => void;
  /** 'underline' for the panel header, 'segmented' for Banners/Options. */
  variant?: 'underline' | 'segmented';
  ariaLabel: string;
}
