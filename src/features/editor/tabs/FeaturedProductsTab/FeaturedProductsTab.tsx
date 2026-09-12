import s from './FeaturedProductsTab.module.scss';

/** Placeholder — this tab has no design yet, so it explains itself. */
export function FeaturedProductsTab() {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Featured Products</p>
      <p className={s.body}>
        Pick the products to highlight at the top of your catalog. Connect a
        product feed to populate this list.
      </p>
    </div>
  );
}
