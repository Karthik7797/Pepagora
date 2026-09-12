'use client';

import { useState } from 'react';
import { Button, IconButton, Tabs } from '@/components/ui';
import type { Section } from '@/features/catalog-site/types';
import {
  ContentsTab,
  FeaturedProductsTab,
  MyProductsTab,
} from '../../tabs';
import { useEditorStore } from '../../store/editor.store';
import type { EditorTab } from '../../types';
import s from './EditorPanel.module.scss';

const TABS = [
  { id: 'contents' as const, label: 'Contents' },
  { id: 'my-products' as const, label: 'My Products' },
  { id: 'featured-products' as const, label: 'Featured Products' },
];

export function EditorPanel({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState(false);
  const activeTab = useEditorStore((state) => state.activeTab);
  const setActiveTab = useEditorStore((state) => state.setActiveTab);
  const markSaved = useEditorStore((state) => state.markSaved);

  const renderTab = (tab: EditorTab) => {
    switch (tab) {
      case 'contents':
        return <ContentsTab sections={sections} />;
      case 'my-products':
        return <MyProductsTab />;
      case 'featured-products':
        return <FeaturedProductsTab />;
    }
  };

  return (
    <>
      <aside
        className={s.panel}
        data-open={open}
        aria-label="Page content editor"
      >
        <Tabs
          tabs={TABS}
          value={activeTab}
          onChange={setActiveTab}
          ariaLabel="Editor sections"
        />

        <div
          className={s.body}
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          {renderTab(activeTab)}
        </div>

        <div className={s.footer}>
          <Button variant="outline" pill onClick={markSaved}>
            Save for Later
          </Button>
          <Button variant="primary" pill iconRight="arrow-right" onClick={markSaved}>
            Save &amp; Continue
          </Button>
        </div>
      </aside>

      <IconButton
        icon={open ? 'close' : 'pencil'}
        label={open ? 'Close editor panel' : 'Open editor panel'}
        size={48}
        className={s.toggle}
        onClick={() => setOpen((prev) => !prev)}
      />
    </>
  );
}
