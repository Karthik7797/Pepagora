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

/**
 * Site logo, shared by every page rather than owned by a section. The design
 * notes that changing it also updates the business profile, so it is stored
 * against the site rather than the page.
 */
export interface LogoSettings {
  /** Object URL of the header logo, or null while none is chosen. */
  header: string | null;
  footer: string | null;
  /** Derives the footer mark from the header one instead of uploading it. */
  inverseFooter: boolean;
}
