'use client';

import { Accordion, Toggle } from '@/components/ui';
import { getSectionLabel, isAlwaysVisible } from '@/features/catalog-site';
import type { Section } from '@/features/catalog-site/types';
import { FORM_REGISTRY } from '../../forms';
import { useEditorStore } from '../../store/editor.store';
import s from './ContentsTab.module.scss';

/** Renders one accordion row per section, with its form from the registry. */
export function ContentsTab({ sections }: { sections: Section[] }) {
  const openSectionId = useEditorStore((state) => state.openSectionId);
  const toggleSection = useEditorStore((state) => state.toggleSection);
  const setVisible = useEditorStore((state) => state.setVisible);
  const updateSection = useEditorStore((state) => state.updateSection);

  return (
    <div className={s.list}>
      {sections.map((section) => {
        const label = getSectionLabel(section.type);
        const alwaysVisible = isAlwaysVisible(section.type);
        const Form = FORM_REGISTRY[section.type] as React.ComponentType<{
          data: Section['data'];
          onChange: (patch: Partial<Section['data']>) => void;
        }>;

        return (
          <Accordion
            key={section.id}
            title={label}
            open={openSectionId === section.id}
            onToggle={() => toggleSection(section.id)}
            actions={
              alwaysVisible ? null : (
                <Toggle
                  checked={section.visible}
                  onChange={(visible) => setVisible(section.id, visible)}
                  label={`Show ${label} on the page`}
                  caption="Visible"
                />
              )
            }
          >
            <Form
              data={section.data}
              onChange={(patch) => updateSection(section.id, patch)}
            />
          </Accordion>
        );
      })}
    </div>
  );
}
