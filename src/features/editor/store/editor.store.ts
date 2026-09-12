'use client';

import { create } from 'zustand';
import type {
  CatalogPage,
  Section,
  SectionData,
  SectionType,
} from '@/features/catalog-site/types';
import type { EditorMode, EditorTab } from '../types';

interface EditorState {
  page: CatalogPage | null;
  mode: EditorMode;
  activeTab: EditorTab;
  openSectionId: string | null;
  hoveredSectionId: string | null;
  /** Set once a field changes, so the save bar can reflect it. */
  dirty: boolean;

  loadPage: (page: CatalogPage) => void;
  setMode: (mode: EditorMode) => void;
  setActiveTab: (tab: EditorTab) => void;
  toggleSection: (id: string) => void;
  setHoveredSection: (id: string | null) => void;
  setVisible: (id: string, visible: boolean) => void;
  /** Merges a partial payload into one section's data. */
  updateSection: <T extends SectionType>(
    id: string,
    patch: Partial<SectionData<T>>,
  ) => void;
  markSaved: () => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  page: null,
  mode: 'editor',
  activeTab: 'contents',
  openSectionId: null,
  hoveredSectionId: null,
  dirty: false,

  loadPage: (page) =>
    set({
      page,
      // Open the first section so the panel isn't empty on load.
      openSectionId: page.sections[0]?.id ?? null,
      dirty: false,
    }),

  setMode: (mode) => set({ mode }),

  setActiveTab: (activeTab) => set({ activeTab }),

  toggleSection: (id) =>
    set((state) => ({
      openSectionId: state.openSectionId === id ? null : id,
    })),

  setHoveredSection: (hoveredSectionId) => set({ hoveredSectionId }),

  setVisible: (id, visible) =>
    set((state) => {
      if (!state.page) return state;
      return {
        page: {
          ...state.page,
          sections: state.page.sections.map((section) =>
            section.id === id ? { ...section, visible } : section,
          ),
        },
        dirty: true,
      };
    }),

  updateSection: (id, patch) =>
    set((state) => {
      if (!state.page) return state;
      return {
        page: {
          ...state.page,
          sections: state.page.sections.map((section) =>
            section.id === id
              ? ({ ...section, data: { ...section.data, ...patch } } as Section)
              : section,
          ),
        },
        dirty: true,
      };
    }),

  markSaved: () => set({ dirty: false }),
}));
