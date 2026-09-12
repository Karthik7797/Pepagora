import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { CatalogSite } from '@/features/catalog-site';
import { CATALOG } from '@/mock/catalog';
import { ROUTES } from '@/lib/constants';
import { getPageById } from '@/mock/pages';
import s from './page.module.scss';

export const metadata = { title: 'Catalog & Website' };

export default function CatalogOverviewPage() {
  const page = getPageById('home');
  if (!page) return null;

  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <h1 className={s.title}>{CATALOG.name}</h1>

        <div className={s.actions}>
          <Button variant="outline" pill>
            View site
          </Button>
          <Link href={ROUTES.editor('home')}>
            <Button variant="primary" pill iconLeft="pencil">
              Edit Template
            </Button>
          </Link>
        </div>
      </header>

      <div className={s.layout}>
        <div className={s.preview}>
          <CatalogSite sections={page.sections} />
        </div>

        <aside className={s.sidebar}>
          <section className={s.card}>
            <Image
              src="/content1.png"
              alt=""
              width={372}
              height={267}
              className={s.illustration}
            />
            <h2 className={s.cardTitle}>Start editing your website!</h2>
            <p className={s.cardBody}>
              You can begin adding and editing content now. Your profile
              details have been prefilled. Edits here will also update your
              business profile.
            </p>
          </section>

          <section className={s.card}>
            <h2 className={s.cardHeading}>Package details</h2>

            <p className={s.planName}>{CATALOG.plan.name}</p>
            <p className={s.planMeta}>{CATALOG.plan.price}</p>

            <p className={s.planName}>Next Billing</p>
            <p className={s.planMeta}>{CATALOG.plan.nextBilling}</p>

            <Button variant="primary" pill fullWidth>
              Change Package
            </Button>
          </section>
        </aside>
      </div>
    </div>
  );
}
