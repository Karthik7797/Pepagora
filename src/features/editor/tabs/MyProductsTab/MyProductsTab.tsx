'use client';

import { useMemo, useState } from 'react';
import { IconButton, SearchInput, Toggle } from '@/components/ui';
import { PANEL_PRODUCTS } from '@/mock/products';
import s from './MyProductsTab.module.scss';

/** Product picker. Toggling a row marks it for display on the page. */
export function MyProductsTab() {
  const [query, setQuery] = useState('');
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(PANEL_PRODUCTS.map((p) => [p.id, true])),
  );

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return PANEL_PRODUCTS;
    return PANEL_PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(needle),
    );
  }, [query]);

  return (
    <div className={s.wrapper}>
      <div className={s.search}>
        <SearchInput
          placeholder="Search Product"
          aria-label="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton
          icon="filter"
          label="Filter products"
          className={s.filterButton}
        />
      </div>

      {results.length === 0 ? (
        <p className={s.empty}>No products match “{query}”.</p>
      ) : (
        <div className={s.list}>
          {results.map((product) => (
            <div key={product.id} className={s.row}>
              <span className={s.thumb} aria-hidden="true" />

              <div className={s.info}>
                <p className={s.name}>{product.name}</p>
                <div className={s.metrics}>
                  <span>
                    <span className={s.metricValue}>{product.views}</span> Views
                  </span>
                </div>
              </div>

              <Toggle
                checked={enabled[product.id] ?? false}
                onChange={(value) =>
                  setEnabled((prev) => ({ ...prev, [product.id]: value }))
                }
                label={`Show ${product.name} on the page`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
