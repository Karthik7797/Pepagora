'use client';

import { useState } from 'react';
import { Tabs } from '@/components/ui';
import { AnalyticsTab } from './AnalyticsTab';
import s from './CatalogTabs.module.scss';

const TABS = [
  { id: 'template', label: 'Template' },
  { id: 'analytics', label: 'Analytics' },
] as const;

type TabId = (typeof TABS)[number]['id'];

/**
 * Mobile-only Template/Analytics switch. The Template panel keeps the
 * server-rendered site preview as its child so it is not re-mounted on
 * every tab change.
 */
export function CatalogTabs({ preview }: { preview: React.ReactNode }) {
  const [tab, setTab] = useState<TabId>('template');

  return (
    <div className={s.root}>
      <div className={s.tabs}>
        <Tabs
          tabs={TABS}
          value={tab}
          onChange={setTab}
          variant="segmented"
          ariaLabel="Catalog view"
        />
      </div>

      <div
        id="panel-template"
        role="tabpanel"
        aria-labelledby="tab-template"
        className={s.templatePanel}
        data-active={tab === 'template'}
      >
        {preview}
      </div>

      <div
        id="panel-analytics"
        role="tabpanel"
        aria-labelledby="tab-analytics"
        className={s.analyticsPanel}
        data-active={tab === 'analytics'}
      >
        <AnalyticsTab />
      </div>
    </div>
  );
}
