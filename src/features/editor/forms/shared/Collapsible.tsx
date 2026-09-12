'use client';

import { useId } from 'react';
import { Icon } from '@/components/ui';
import s from './FormField.module.scss';

interface Props {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

/** Nested disclosure used for Banner 01 / Banner 02 inside the hero form. */
export function Collapsible({ title, open, onToggle, children }: Props) {
  const id = useId();

  return (
    <div className={s.collapsible}>
      <button
        type="button"
        className={s.collapsibleTrigger}
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        <Icon
          name="chevron-right"
          size={14}
          className={s.chevron}
          data-open={open}
        />
        {title}
      </button>

      {open && (
        <div className={s.collapsibleBody} id={id}>
          {children}
        </div>
      )}
    </div>
  );
}
