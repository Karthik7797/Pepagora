'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dropzone, Input, Select, Tabs, Textarea } from '@/components/ui';
import { RadioCardGroup } from '@/components/ui';
import { FIELD_LIMITS, LINK_OPTIONS } from '@/lib/constants';
import type { BannerSlide, HeroData } from '@/features/catalog-site/types';
import { Collapsible, FormRow, FormStack, formStyles } from '../shared';
import s from './HeroForm.module.scss';
import type { SectionFormProps } from '../types';

type HeroTab = 'banners' | 'options';

// Banners leads, as in the design. Its panel is the overlay picker; the banner
// list sits behind Options.
const TABS = [
  { id: 'banners' as const, label: 'Banners' },
  { id: 'options' as const, label: 'Options' },
];

// Previews are the banner stills from the export rather than flat colour, so
// each option shows the overlay as it actually reads over a photo.
const OVERLAY_OPTIONS = [
  {
    value: 'gradient',
    label: 'Gradient',
    preview: (
      <Image
        src="/projecticons/overlays/gradient.png"
        alt=""
        width={318}
        height={93}
        className={s.swatch}
      />
    ),
  },
  {
    value: 'black-tint',
    label: 'Black Tint',
    preview: (
      <Image
        src="/projecticons/overlays/black-tint.png"
        alt=""
        width={322}
        height={93}
        className={s.swatch}
      />
    ),
  },
];

export function HeroForm({ data, onChange }: SectionFormProps<HeroData>) {
  const [tab, setTab] = useState<HeroTab>('banners');
  const [openBannerId, setOpenBannerId] = useState<string | null>(
    data.banners[0]?.id ?? null,
  );

  const patchBanner = (id: string, patch: Partial<BannerSlide>) => {
    onChange({
      banners: data.banners.map((banner) =>
        banner.id === id ? { ...banner, ...patch } : banner,
      ),
    });
  };

  const addBanner = () => {
    const next: BannerSlide = {
      id: `banner-${Date.now()}`,
      image: null,
      heading: '',
      subline: '',
      ctaLabel: '',
      ctaLink: '',
    };
    onChange({ banners: [...data.banners, next] });
    setOpenBannerId(next.id);
  };

  const renderBannerFields = (banner: BannerSlide) => (
    <FormStack>
      <Dropzone
        value={banner.image}
        onChange={(file) =>
          patchBanner(banner.id, {
            image: file ? URL.createObjectURL(file) : null,
          })
        }
      />

      <Input
        label="Hero text"
        placeholder="Your Message, The Hero of Every Banner."
        maxLength={FIELD_LIMITS.heroHeading}
        value={banner.heading}
        onChange={(e) => patchBanner(banner.id, { heading: e.target.value })}
      />

      <Textarea
        label="Subline ( Optional )"
        placeholder="This is your subheading text for banner, you can keep it minimal , short and crisp."
        maxLength={FIELD_LIMITS.heroSubline}
        value={banner.subline}
        onChange={(e) => patchBanner(banner.id, { subline: e.target.value })}
      />

      <FormRow>
        <Input
          label="Button CTA"
          placeholder="View Products"
          value={banner.ctaLabel}
          onChange={(e) => patchBanner(banner.id, { ctaLabel: e.target.value })}
        />
        <Select
          label="Link"
          options={LINK_OPTIONS}
          value={banner.ctaLink}
          placeholder="Select page to link"
          onChange={(value) => patchBanner(banner.id, { ctaLink: value })}
        />
      </FormRow>
    </FormStack>
  );

  return (
    <div>
      <div className={s.tabs}>
        <Tabs
          tabs={TABS}
          value={tab}
          onChange={setTab}
          variant="segmented"
          ariaLabel="Hero section settings"
        />
      </div>

      {tab === 'options' ? (
        <div>
          {data.banners.map((banner, i) => (
            <Collapsible
              key={banner.id}
              title={`Banner ${String(i + 1).padStart(2, '0')}`}
              open={openBannerId === banner.id}
              onToggle={() =>
                setOpenBannerId(openBannerId === banner.id ? null : banner.id)
              }
            >
              {renderBannerFields(banner)}
            </Collapsible>
          ))}

          <div className={formStyles.collapsible}>
            <div className={formStyles.linkRow}>
              <button
                type="button"
                className={formStyles.addLink}
                onClick={addBanner}
              >
                + Add New Banner
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h4 className={s.overlayTitle}>Banner Overlay</h4>
          <p className={s.overlayHint}>
            A theme-based gradient will overlay the banner.
          </p>

          <RadioCardGroup
            name="banner-overlay"
            options={OVERLAY_OPTIONS}
            value={data.overlay}
            onChange={(value) =>
              onChange({ overlay: value as HeroData['overlay'] })
            }
            ariaLabel="Banner overlay style"
          />
        </div>
      )}
    </div>
  );
}
