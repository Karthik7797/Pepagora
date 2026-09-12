import Image from 'next/image';
import { Icon } from '@/components/ui';
import { GlobeIcon } from '@/components/layout/MarketplaceHeader/HeaderIcons';
import type { IconName } from '@/components/ui';
import { FOOTER_LINKS } from '@/mock/catalog';
import { FooterLinkGroup } from './FooterLinkGroup';
import s from './SiteFooter.module.scss';

const SOCIALS: IconName[] = ['linkedin', 'instagram', 'facebook', 'youtube'];

export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.grid}>
          <div className={s.brandCell}>
            <Image
              src="/projecticons/footerlo.png"
              alt="Spectra Plast"
              width={82}
              height={30}
              className={s.brand}
            />

            <p className={s.about}>
              Leading manufacturer and exporter of modular belts, slat chains
              and conveyor components. Serving industries worldwide with
              innovative material handling solutions.
            </p>

            <p className={s.legalName}>Spectra Plast Pvt. Ltd.</p>

            <p className={s.contactRow}>
              <Icon name="pin" size={15} className={s.contactIcon} />
              No. 1A, Buddha 4th Street, Ramakrishnapuram, Ganapathy,
              Coimbatore - 641006, India
            </p>

            <p className={s.contactRow}>
              <Icon name="phone" size={15} className={s.contactIcon} />
              +91 9**** ****0
              <span className={s.numberChip}>
                <Icon name="lock" size={11} />
                View Number
              </span>
            </p>

            <p className={s.contactRow}>
              <Icon name="mail" size={15} className={s.contactIcon} />
              Email@company.com
            </p>

            <div className={s.messageButtons}>
              <a href="#" className={s.messageButton}>
                <Icon name="chat" size={15} />
                Send Message
              </a>
              <a href="#" className={s.messageButton}>
                <Icon name="mail" size={15} />
                Send Email
              </a>
            </div>
          </div>

          <FooterLinkGroup title="Company">
            {FOOTER_LINKS.company.map((link) => (
              <a key={link} href="#" className={s.link}>
                {link}
              </a>
            ))}
          </FooterLinkGroup>

          <FooterLinkGroup title="Products">
            <div className={s.productColumns}>
              {FOOTER_LINKS.productGroups.map((column, i) => (
                <div key={i}>
                  {column.map((group) => (
                    <div key={group.id} className={s.group}>
                      <p className={s.groupTitle}>{group.title}</p>
                      {group.items.map((item) => (
                        <p key={item} className={s.groupItem}>
                          {item}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </FooterLinkGroup>

          <div className={s.social}>
            <span className={s.shareLabel}>Share</span>
            {SOCIALS.map((icon) => (
              <a key={icon} href="#" className={s.socialLink} aria-label={icon}>
                <Icon name={icon} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={s.bottom}>
        <div className={s.bottomInner}>
          <span className={s.bottomLeft}>
            © 2025 Spectra Plast. All rights reserved.
            <span className={s.localeChip}>
              <GlobeIcon size={12} />
              EN
              <Icon name="chevron-down" size={11} />
            </span>
          </span>

          <span className={s.bottomLinks}>
            © 2025 by Business Name. All Rights Reserved.
            <a href="#" className={s.bottomLink}>
              Privacy Policy
            </a>
            |
            <a href="#" className={s.bottomLink}>
              Terms of Use
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
