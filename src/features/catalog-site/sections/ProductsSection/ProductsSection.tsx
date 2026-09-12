'use client';

import { useState } from 'react';
import { Button, Chip } from '@/components/ui';
import { PRODUCTS } from '@/mock/products';
import type { ProductsData } from '../../types';
import { SectionHeading } from '../shared';
import { ProductCard } from './ProductCard';
import s from './ProductsSection.module.scss';

export function ProductsSection({
  heading,
  subheading,
  categories,
  activeCategory,
  productIds,
}: ProductsData) {
  const [selected, setSelected] = useState(activeCategory);

  // Products come from the mock store; the section only stores their ids.
  const products = productIds
    .map((id) => PRODUCTS.find((product) => product.id === id))
    .filter((product): product is NonNullable<typeof product> =>
      Boolean(product),
    );

  return (
    <section className={s.section}>
      <div className={s.container}>
        <SectionHeading title={heading} subtitle={subheading} tight />

        <div className={s.filters} role="tablist" aria-label="Product category">
          {categories.map((category) => (
            <Chip
              key={category}
              active={category === selected}
              onClick={() => setSelected(category)}
            >
              {category}
            </Chip>
          ))}
        </div>

        <div className={s.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className={s.footer}>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
