'use client';

import { Fragment } from 'react';
import { Accordion, Toggle } from '@/components/ui';
import { getSectionLabel, isAlwaysVisible } from '@/features/catalog-site';
import type { Section } from '@/features/catalog-site/types';
import { FORM_REGISTRY, LogoForm } from '../../forms';
import { useEditorStore } from '../../store/editor.store';
import s from './ContentsTab.module.scss';

/** Identifies the Logo row in the same open/closed state as the sections. */
const LOGO_ROW_ID = 'site-logo';

/** Renders one accordion row per section, with its form from the registry. */
export function ContentsTab({ sections }: { sections: Section[] }) {
  const openSectionId = useEditorStore((state) => state.openSectionId);
  const toggleSection = useEditorStore((state) => state.toggleSection);
  const setVisible = useEditorStore((state) => state.setVisible);
  const updateSection = useEditorStore((state) => state.updateSection);

  return (
    <div className={s.list}>
      {sections.map((section, index) => {
        const label = getSectionLabel(section.type);
        const alwaysVisible = isAlwaysVisible(section.type);
        const Form = FORM_REGISTRY[section.type] as React.ComponentType<{
          data: Section['data'];
          onChange: (patch: Partial<Section['data']>) => void;
        }>;

        const row = (
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

        // Logo is site chrome rather than a section, and the design places it
        // directly below the first row.
        if (index !== 0) return row;

        return (
          <Fragment key={section.id}>
            {row}
            <Accordion
              title="Logo"
              open={openSectionId === LOGO_ROW_ID}
              onToggle={() => toggleSection(LOGO_ROW_ID)}
            >
              <LogoForm />
            </Accordion>
          </Fragment>
        );
      })}
    </div>
  );
}
