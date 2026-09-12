'use client';

import { useId } from 'react';
import { Icon } from '../Icon';
import s from './Accordion.module.scss';
import type { AccordionProps } from './Accordion.types';

export function Accordion({
  title,
  open,
  onToggle,
  actions,
  children,
}: AccordionProps) {
  const panelId = useId();

  return (
    <section className={s.item}>
      <header className={s.header}>
        <button
          type="button"
          className={s.trigger}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {title}
        </button>

        <div className={s.actions}>
          {actions}
          {actions && <span className={s.divider} aria-hidden="true" />}
          <button
            type="button"
            className={s.chevron}
            data-open={open}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={`${open ? 'Collapse' : 'Expand'} ${title}`}
            onClick={onToggle}
          >
            <Icon name="chevron-down" size={14} />
          </button>
        </div>
      </header>

      {open && (
        <div className={s.panel} id={panelId}>
          {children}
        </div>
      )}
    </section>
  );
}
