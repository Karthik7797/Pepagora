import { Icon } from '@/components/ui';
import type { IconName } from '@/components/ui';
import type { ContactData } from '../../types';
import { SectionHeading } from '../shared';
import s from './ContactSection.module.scss';

export function ContactSection({
  heading,
  email,
  phone,
  address,
}: ContactData) {
  const items: { icon: IconName; label: string; value: string }[] = [
    { icon: 'mail', label: 'Email', value: email },
    { icon: 'phone', label: 'Phone', value: phone },
    { icon: 'pin', label: 'Address', value: address },
  ];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <SectionHeading title={heading} />

        <div className={s.grid}>
          {items.map((item) => (
            <article key={item.label} className={s.card}>
              <Icon name={item.icon} size={20} className={s.icon} />
              <div>
                <p className={s.label}>{item.label}</p>
                <p className={s.value}>{item.value}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
