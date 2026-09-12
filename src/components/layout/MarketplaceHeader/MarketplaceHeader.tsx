import { Button, IconButton, SearchInput } from '@/components/ui';
import {
  AccountIcon,
  BellIcon,
  CategoriesIcon,
  GlobeIcon,
  IndiaFlag,
  RupeeIcon,
} from './HeaderIcons';
import { Logo } from './Logo';
import s from './MarketplaceHeader.module.scss';

/**
 * The Pepagora marketplace bar. Sits above every dashboard screen and is not
 * part of the catalog being edited.
 */
export function MarketplaceHeader() {
  return (
    <header className={s.header}>
      <Logo />

      <button type="button" className={s.categories}>
        <span className={s.categoriesIcon}>
          <CategoriesIcon size={20} />
        </span>
        All Categories
      </button>

      <SearchInput
        variant="brand"
        placeholder="What are you looking for ?"
        aria-label="Search the marketplace"
        className={s.search}
        trailing={
          <>
            <IconButton icon="mic" label="Search by voice" size={32} />
            <IconButton icon="image" label="Search by image" size={32} />
          </>
        }
      />

      <div className={s.actions}>
        <button type="button" className={s.selector}>
          <GlobeIcon size={24} />
          EN
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <button type="button" className={s.selector}>
          <IndiaFlag width={22} />
          IN
        </button>

        <button type="button" className={s.selector}>
          <RupeeIcon size={24} />
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <span className={s.divider} aria-hidden="true" />

        <button type="button" className={s.bell} aria-label="Notifications">
          <BellIcon size={24} />
        </button>

        <Button variant="dark" pill className={s.cta}>
          Post Buying Requirement
        </Button>

        <button type="button" className={s.rfq} aria-label="1 quotation request">
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
            <rect
              x="1"
              y="5"
              width="21"
              height="16"
              rx="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <text
              x="11.5"
              y="16.5"
              textAnchor="middle"
              fontSize="8"
              fontWeight="700"
              fill="currentColor"
            >
              RFQ
            </text>
          </svg>
          <span className={s.badge}>1</span>
        </button>

        <button type="button" className={s.account} aria-label="Account">
          <AccountIcon size={26} />
        </button>
      </div>
    </header>
  );
}
