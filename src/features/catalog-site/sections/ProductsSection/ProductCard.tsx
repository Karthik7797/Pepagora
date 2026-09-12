import Image from 'next/image';
import { Button, ImagePlaceholder } from '@/components/ui';
import type { Product } from '../../types';
import { ProductAttributes } from './ProductAttributes';
import s from './ProductCard.module.scss';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className={s.card}>
      <ImagePlaceholder className={s.image} />

      <h3 className={s.name}>{product.name}</h3>
      <p className={s.description}>{product.description}</p>

      <ProductAttributes attributes={product.attributes} />

      <div className={s.actions}>
        <Button variant="subtle" size="sm">
          Chat now
          <Image
            src="/projecticons/chatnow.png"
            alt=""
            width={19}
            height={17}
            className={s.chatIcon}
          />
        </Button>
        <Button variant="gradient" size="sm" iconRight="arrow-right">
          Request for Quote
        </Button>
      </div>
    </article>
  );
}
