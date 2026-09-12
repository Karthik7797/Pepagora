/**
 * Icons unique to the marketplace bar. The locale controls come from the
 * design export; the rest are drawn here rather than in the shared Icon set
 * because their fill/stroke details exceed what single-path Icon can express.
 */

import Image from 'next/image';
import s from './HeaderIcons.module.scss';

/** Renders an exported monochrome PNG as a `currentColor` mask. */
function MaskIcon({ src, size }: { src: string; size: number }) {
  const url = `url(${src})`;

  return (
    <span
      className={s.maskIcon}
      style={{
        width: size,
        height: size,
        maskImage: url,
        WebkitMaskImage: url,
      }}
      aria-hidden="true"
    />
  );
}

export function CategoriesIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 7h18M3 12h13M3 17h9" />
    </svg>
  );
}

export function GlobeIcon({ size = 20 }: { size?: number }) {
  return <MaskIcon src="/projecticons/Home/globe-alt.png" size={size} />;
}

export function RupeeIcon({ size = 20 }: { size?: number }) {
  return <MaskIcon src="/projecticons/Home/currency-rupee.png" size={size} />;
}

export function BellIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 9.5a5.5 5.5 0 0 1 11 0c0 4.2 1.6 5.6 1.6 5.6H4.9s1.6-1.4 1.6-5.6Z" />
      <path d="M10.2 18.5a2 2 0 0 0 3.6 0" />
    </svg>
  );
}

export function AccountIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="10" r="3.2" />
      <path d="M5.6 19.2a7 7 0 0 1 12.8 0" />
    </svg>
  );
}

/** Tricolour from the export. Full colour, so it is drawn rather than masked. */
export function IndiaFlag({ width = 22 }: { width?: number }) {
  return (
    <Image
      src="/projecticons/Home/image 579.png"
      alt=""
      width={width}
      height={Math.round((width / 41) * 27)}
      style={{ borderRadius: 2 }}
    />
  );
}
