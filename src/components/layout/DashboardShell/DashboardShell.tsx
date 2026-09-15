'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IconButton } from '@/components/ui';
import { IconRail } from '../IconRail';
import { MarketplaceHeader } from '../MarketplaceHeader';
import s from './DashboardShell.module.scss';

/**
 * Frames every dashboard screen: marketplace bar on top, nav rail on the left.
 * Client-side only because the rail is a drawer below tablet.
 */
export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // The design trims the rail on the catalog overview and shows the full
  // navigation once the editor is open.
  const inEditor = pathname.includes('/editor');
  const railVariant = inEditor ? 'full' : 'compact';

  // On phones the editor takes the whole screen: its own toolbar carries the
  // back arrow and Publish, so the marketplace bar and rail would only steal
  // height. Both stay put from tablet up.
  return (
    <div className={s.shell} data-editor={inEditor || undefined}>
      <div className={s.chrome}>
        <MarketplaceHeader />
      </div>

      <div className={s.body}>
        <div className={s.chrome}>
          <IconRail
            variant={railVariant}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          />
        </div>
        <main className={s.main}>{children}</main>
      </div>

      <IconButton
        icon="menu"
        label="Open menu"
        size={44}
        className={s.menuTrigger}
        onClick={() => setMenuOpen(true)}
      />
    </div>
  );
}
