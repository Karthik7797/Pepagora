import { Button, Icon } from '@/components/ui';
import { CATALOG } from '@/mock/catalog';
import s from './AnalyticsTab.module.scss';

/**
 * Mobile-only Analytics tab. Figures come from the catalog mock; the layout
 * follows the design's two cards — site stats, then package details.
 */
export function AnalyticsTab() {
  const { analytics, plan } = CATALOG;

  return (
    <div className={s.tab}>
      <section className={s.card}>
        <h2 className={s.allSetTitle}>You&rsquo;re all set.</h2>
        <p className={s.allSetBody}>
          Track views, impressions, and performance insights right here as your
          site starts getting traffic.
        </p>

        <hr className={s.rule} />

        <h3 className={s.cardHeading}>
          <Icon name="analytics" size={18} className={s.headingIcon} />
          Analytics
        </h3>

        <p className={s.fieldLabel}>Views</p>
        <p className={s.views}>
          <Icon name="eye" size={18} className={s.viewsIcon} />
          {analytics.views}
        </p>

        <hr className={s.rule} />

        <dl className={s.fields}>
          <div>
            <dt className={s.fieldLabel}>Last Edited</dt>
            <dd className={s.fieldValue}>{analytics.lastEdited}</dd>
          </div>
          <div>
            <dt className={s.fieldLabel}>Last Edited By</dt>
            <dd className={s.fieldValue}>{analytics.lastEditedBy}</dd>
          </div>
        </dl>

        <p className={s.fieldLabel}>Status</p>
        <span className={s.status}>{analytics.status}</span>
      </section>

      <section className={s.card}>
        <h3 className={s.cardHeading}>Package details</h3>

        <p className={s.planName}>{plan.name}</p>
        <p className={s.planMeta}>
          {plan.price} <span className={s.planTerm}>{plan.term}</span>
        </p>

        <p className={s.planName}>Next Billing</p>
        <p className={s.planMeta}>{plan.nextBilling}</p>

        <div className={s.planActions}>
          <Button variant="outline" size="sm" pill>
            Pay now
          </Button>
          <Button variant="primary" size="sm" pill>
            Upgrade package
          </Button>
        </div>
      </section>
    </div>
  );
}
