'use client';

import { CatalogSite, getSectionLabel } from '@/features/catalog-site';
import type { Section } from '@/features/catalog-site/types';
import { useEditorStore } from '../../store/editor.store';
import s from './EditorCanvas.module.scss';

/**
 * Live preview of the page. Hovering a section highlights it and shows its
 * name, mirroring the accordion on the right.
 */
export function EditorCanvas({ sections }: { sections: Section[] }) {
  const hoveredSectionId = useEditorStore((state) => state.hoveredSectionId);
  const setHoveredSection = useEditorStore((state) => state.setHoveredSection);
  const openSectionId = useEditorStore((state) => state.openSectionId);

  return (
    <div className={s.canvas}>
      <div className={s.frame}>
        <CatalogSite
          sections={sections}
          renderSection={(section, node) => {
            const hovered = hoveredSectionId === section.id;
            const active = hovered || openSectionId === section.id;

            return (
              <div
                className={s.section}
                data-active={active}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Hover only: the open section keeps its outline, but its
                    badge would otherwise sit on screen permanently, since the
                    panel opens the first section on load. */}
                {hovered && (
                  <span className={s.badge}>
                    {getSectionLabel(section.type)}
                  </span>
                )}
                {node}
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
