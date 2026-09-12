import type { SectionType } from '@/features/catalog-site/types';

export type EditorTab = 'contents' | 'my-products' | 'featured-products';

/** Toolbar mode: the panel is only shown while editing. */
export type EditorMode = 'editor' | 'preview';

/** Which sub-tab a section form is showing, keyed by section id. */
export type FormTab = Record<string, string>;

export interface EditorUiState {
  activeTab: EditorTab;
  /** Section currently expanded in the Contents accordion. */
  openSectionId: string | null;
  /** Section hovered on the canvas, drives the blue badge. */
  hoveredSectionType: SectionType | null;
}
