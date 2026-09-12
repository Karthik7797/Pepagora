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

export function EditorToolbar({ pageId }: Props) {
  const router = useRouter();
  const mode = useEditorStore((state) => state.mode);
  const setMode = useEditorStore((state) => state.setMode);
  const previewing = mode === 'preview';

  return (
    <div className={s.toolbar}>
      <Link href={ROUTES.catalog} className={s.exit}>
        <Icon name="arrow-left" size={16} />
        Exit editor
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
          <Icon name="panel" size={17} className={s.modeIcon} />
          <span>Editor</span>
        </button>

        <button type="button" className={s.mode}>
          <Icon name="settings" size={17} className={s.modeIcon} />
          <span>Settings</span>
        </button>

        <button
          type="button"
          className={clsx(s.mode, s.previewing)}
          aria-pressed={previewing}
          onClick={() => setMode(previewing ? 'editor' : 'preview')}
        >
          <Icon name="play" size={17} className={s.modeIcon} />
          <span>{previewing ? 'Exit preview' : 'Preview'}</span>
        </button>

        <Button variant="primary" size="sm" pill>
          Publish
        </Button>
      </div>
    </div>
  );
}
