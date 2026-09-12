'use client';

import { useId, useState } from 'react';
import s from './SiteFooter.module.scss';

interface Props {
  title: string;
  children: React.ReactNode;
}

/**
 * Footer link column. Below `md` the mobile design collapses each column to a
 * titled row with a `+` toggle; from `md` up the panel is always open and the
 * toggle is inert, so the desktop footer keeps its three visible columns.
 */
export function FooterLinkGroup({ title, children }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={s.linkGroup}>
      <button
        type="button"
        className={s.groupToggle}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={s.columnTitle}>{title}</span>
        <span className={s.plus} data-open={open} aria-hidden="true" />
      </button>

      <div className={s.groupPanel} id={panelId} data-open={open}>
        {children}
      </div>
    </div>
  );
}
