'use client';

import { useEffect } from 'react';
import { CatalogSite } from '@/features/catalog-site';
import type { Section } from '@/features/catalog-site/types';
import s from './PreviewFrame.module.scss';

/**
 * The site as a visitor sees it — no canvas padding, no section hover badges.
 * Reads the same sections the canvas does, so unsaved edits appear here too.
 */
export function PreviewFrame({ sections }: { sections: Section[] }) {
  // The nav rail lives in the shell above this route, so preview signals it
  // through the document rather than threading state back up the tree.
  useEffect(() => {
    document.body.dataset.preview = 'true';
    return () => {
      delete document.body.dataset.preview;
    };
  }, []);

  return (
    <div className={s.preview}>
      <CatalogSite sections={sections} />
    </div>
  );
}
