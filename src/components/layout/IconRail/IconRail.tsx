'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Icon, IconButton, NavIcon } from '@/components/ui';
import s from './IconRail.module.scss';
import {
  RAIL_FOOTER,
  RAIL_FOOTER_COMPACT,
  RAIL_GROUPS,
  RAIL_GROUPS_COMPACT,
} from './nav';
import type { RailItem } from './IconRail.types';

interface Props {
  /** Drawer state on mobile, where the rail sits off-canvas. */
  open?: boolean;
  onClose?: () => void;
  /**
   * 'compact' is the trimmed rail the design shows on the catalog overview;
   * 'full' is the complete navigation shown inside the editor.
   */
  variant?: 'full' | 'compact';
}

export function IconRail({ open = false, onClose, variant = 'full' }: Props) {
  const compact = variant === 'compact';
  const groups = compact ? RAIL_GROUPS_COMPACT : RAIL_GROUPS;
  const footer = compact ? RAIL_FOOTER_COMPACT : RAIL_FOOTER;
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const renderItem = (item: RailItem) => {
    const active = item.href ? pathname.startsWith(item.href) : false;
    const content = (
      <>
        <span className={s.icon}>
          {item.navIcon ? (
            <NavIcon name={item.navIcon} size={19} />
          ) : (
            item.icon && <Icon name={item.icon} size={17} />
          )}
        </span>
        <span className={s.label}>{item.label}</span>
      </>
    );

    return (
      <li key={item.id}>
        {item.href ? (
          <Link
            href={item.href}
            className={s.item}
            aria-current={active ? 'page' : undefined}
            title={item.label}
            onClick={onClose}
          >
            {content}
          </Link>
        ) : (
          <button type="button" className={s.item} title={item.label}>
            {content}
          </button>
        )}
      </li>
    );
  };

  return (
    <>
      {open && <div className={s.backdrop} onClick={onClose} />}

      <nav
        className={s.rail}
        data-expanded={expanded}
        data-open={open}
        aria-label="Seller dashboard"
      >
        <div className={s.scroll}>
          {groups.map((group) => (
            <div key={group.id} className={s.group}>
              {expanded && group.title && (
                <p className={s.groupTitle}>{group.title}</p>
              )}
              <ul>{group.items.map(renderItem)}</ul>
            </div>
          ))}
        </div>

        <div className={s.footer}>
          <ul>{footer.items.map(renderItem)}</ul>
        </div>

        <div className={s.collapse}>
          <IconButton
            icon={expanded ? 'chevron-left' : 'chevron-right'}
            label={expanded ? 'Collapse menu' : 'Expand menu'}
            variant="outline"
            size={28}
            onClick={() => setExpanded((prev) => !prev)}
          />
        </div>
      </nav>
    </>
  );
}
