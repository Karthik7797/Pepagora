'use client';

import { useState } from 'react';
import { Checkbox, Dropzone, Tabs } from '@/components/ui';
import { useEditorStore } from '../../store/editor.store';
import { FormStack } from '../shared';
import s from './LogoForm.module.scss';

const TABS = [
  { id: 'media' as const, label: 'Media' },
  { id: 'display' as const, label: 'Display Options' },
];

type LogoTab = (typeof TABS)[number]['id'];

/**
 * Site logo, shown above the section rows. Unlike the section forms this one
 * reads the store directly — the logo belongs to the site, not to a section,
 * so there is no section id to pass down.
 */
export function LogoForm() {
  const [tab, setTab] = useState<LogoTab>('media');
  const logo = useEditorStore((state) => state.logo);
  const updateLogo = useEditorStore((state) => state.updateLogo);

  // The picker hands back a File; the preview needs a URL.
  const toUrl = (file: File | null) =>
    file ? URL.createObjectURL(file) : null;

  return (
    <FormStack>
      <Tabs
        tabs={TABS}
        value={tab}
        onChange={setTab}
        variant="segmented"
        ariaLabel="Logo settings"
      />

      {tab === 'media' ? (
        <>
          <div>
            <p className={s.label}>Header</p>
            <Dropzone
              variant="compact"
              value={logo.header}
              label="Header logo"
              onChange={(file) => updateLogo({ header: toUrl(file) })}
            />
            <p className={s.note}>
              Changing your Logo here will update your logo in business
              profile.
            </p>
          </div>

          <Checkbox
            checked={logo.inverseFooter}
            onChange={(inverseFooter) => updateLogo({ inverseFooter })}
            label="Use inverse logo for footer"
          />

          <div>
            <p className={s.label}>Footer</p>
            <Dropzone
              variant="compact"
              value={logo.footer}
              label="Footer logo"
              onChange={(file) => updateLogo({ footer: toUrl(file) })}
            />
            <p className={s.note}>
              *Recommended Transparent PNG, with white monochromic logo
            </p>
          </div>
        </>
      ) : (
        <p className={s.empty}>
          Display options for the logo are not available yet.
        </p>
      )}
    </FormStack>
  );
}
