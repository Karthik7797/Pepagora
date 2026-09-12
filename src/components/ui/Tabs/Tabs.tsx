'use client';

import { useRef } from 'react';
import { cn } from '@/lib/cn';
import s from './Tabs.module.scss';
import type { TabsProps } from './Tabs.types';

export function Tabs<T extends string>({
  tabs,
  value,
  onChange,
  variant = 'underline',
  ariaLabel,
}: TabsProps<T>) {
  const listRef = useRef<HTMLDivElement>(null);

  // Roving tabindex: arrows move between tabs, Home/End jump to the ends.
  const handleKeyDown = (event: React.KeyboardEvent) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === value);
    let nextIndex: number | null = null;

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    onChange(tabs[nextIndex].id);
    const buttons = listRef.current?.querySelectorAll('button');
    buttons?.[nextIndex]?.focus();
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={ariaLabel}
      className={cn(s.list, s[variant])}
      onKeyDown={handleKeyDown}
    >
      {tabs.map((tab) => {
        const selected = tab.id === value;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={selected}
            aria-controls={`panel-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            className={s.tab}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
