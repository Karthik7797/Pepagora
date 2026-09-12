import { Button, Icon, SearchInput } from '@/components/ui';
import { SITE_NAV } from '@/mock/catalog';
import s from './SiteHeader.module.scss';

/** Navigation for the catalog site itself — distinct from the Pepagora bar. */
export function SiteHeader({ companyName = 'Company Logo' }: { companyName?: string }) {
  return (
    <header className={s.header}>
      <div className={s.brand}>
        <span className={s.mark} aria-hidden="true" />
        {companyName}
      </div>

      <nav className={s.nav}>
        {SITE_NAV.map((item) => (
          <a key={item.label} href="#" className={s.navLink}>
            {item.label}
            {item.hasMenu && (
              <Icon name="chevron-down" size={14} className={s.caret} />
            )}
          </a>
        ))}
      </nav>

      <div className={s.actions}>
        <span className={s.locale}>
          <Icon name="globe" size={18} />
          EN
          <Icon name="chevron-down" size={12} />
        </span>

        <SearchInput
          variant="boxed"
          placeholder="Search for products..."
          aria-label="Search products"
          className={s.search}
        />

        <Button variant="black" size="sm" className={s.cta}>
          Request Quote
        </Button>
      </div>
    </header>
  );
}
