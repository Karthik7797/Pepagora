import { ImagePlaceholder } from '@/components/ui';
import type { RndData } from '../../types';
import s from './RndSection.module.scss';

export function RndSection({ heading, body }: RndData) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.layout}>
          <ImagePlaceholder className={s.image} />
          <div>
            <h2 className={s.title}>{heading}</h2>
            <p className={s.body}>{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
