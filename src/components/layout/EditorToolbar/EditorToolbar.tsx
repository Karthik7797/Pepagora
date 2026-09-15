'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Icon, Select } from '@/components/ui';
import { useEditorStore } from '@/features/editor';
import { ROUTES } from '@/lib/constants';
import { CATALOG_PAGES } from '@/mock/pages';
import s from './EditorToolbar.module.scss';

interface Props {
  pageId: string;
}

const PAGE_OPTIONS = CATALOG_PAGES.map((page) => ({
  value: page.id,
  label: page.name,
}));

// The mode glyphs come from the Figma export as monochrome PNGs, so they are
// masked to currentColor to follow the pill's active/inverted states.
function ModeIcon({ file }: { file: string }) {
  const url = `url(/Home/vuesax/linear/${file}.png)`;

  return (
    <span
      className={s.modeIcon}
      style={{ maskImage: url, WebkitMaskImage: url }}
      aria-hidden="true"
    />
  );
}

export function EditorToolbar({ pageId }: Props) {
  const router = useRouter();
  const mode = useEditorStore((state) => state.mode);
  const setMode = useEditorStore((state) => state.setMode);
  const previewing = mode === 'preview';

  return (
    <div className={s.bar}>
      <div className={s.toolbar}>
        <Link href={ROUTES.catalog} className={s.exit}>
          <Icon name="arrow-left" size={16} />
          <span className={s.exitLabel}>Exit editor</span>
        </Link>

        <span className={s.divider} aria-hidden="true" />

        <div className={s.pageSelect}>
          Page
          <Select
            options={PAGE_OPTIONS}
            value={pageId}
            onChange={(id) => router.push(ROUTES.editor(id))}
            size="sm"
            placeholder="Select page"
            label=""
            className={s.selectControl}
          />
        </div>

        <div className={s.actions}>
          <button
            type="button"
            className={s.mode}
            aria-pressed={!previewing}
            onClick={() => setMode('editor')}
          >
            <ModeIcon file="sidebar-right" />
            <span>Editor</span>
          </button>

          <button type="button" className={s.mode}>
            <ModeIcon file="setting-2" />
            <span>Settings</span>
          </button>

          <button
            type="button"
            className={clsx(s.mode, s.previewing)}
            aria-pressed={previewing}
            onClick={() => setMode(previewing ? 'editor' : 'preview')}
          >
            <ModeIcon file="play" />
            <span>{previewing ? 'Exit preview' : 'Preview'}</span>
          </button>

          <Button variant="primary" size="sm" pill className={s.publish}>
            Publish
          </Button>
        </div>
      </div>

      {/* On phones the page picker gets its own full-width row. */}
      <div className={s.pageRow}>
        <Select
          options={PAGE_OPTIONS}
          value={pageId}
          onChange={(id) => router.push(ROUTES.editor(id))}
          size="sm"
          placeholder="Select page"
          label=""
          className={s.pageRowSelect}
        />
      </div>
    </div>
  );
}
