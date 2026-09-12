'use client';

import { useEffect } from 'react';
import type { CatalogPage } from '@/features/catalog-site/types';
import { useEditorStore } from '../../store/editor.store';
import { EditorCanvas } from '../EditorCanvas';
import { EditorPanel } from '../EditorPanel';
import { PreviewFrame } from '../PreviewFrame';
import s from './EditorWorkspace.module.scss';

/**
 * Seeds the store from the server-rendered page, then renders canvas and
 * panel against the store so edits appear in both places at once.
 */
export function EditorWorkspace({ page }: { page: CatalogPage }) {
  const loadPage = useEditorStore((state) => state.loadPage);
  const sections = useEditorStore((state) => state.page?.sections);
  const mode = useEditorStore((state) => state.mode);

  useEffect(() => {
    loadPage(page);
  }, [page, loadPage]);

  // First paint happens before the effect runs, so fall back to the props.
  const current = sections ?? page.sections;

  if (mode === 'preview') {
    return <PreviewFrame sections={current} />;
  }

  return (
    <div className={s.workspace}>
      <EditorCanvas sections={current} />
      <EditorPanel sections={current} />
    </div>
  );
}
