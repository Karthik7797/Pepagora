import Image from 'next/image';

interface Props {
  variant: 'trusecure' | 'eco';
  className?: string;
}

const BADGES = {
  trusecure: { src: '/Home/Frame 1984079560.svg', label: 'TruSecure certified' },
  eco: { src: '/Home/Frame 1984079559.svg', label: 'ECO Verified certified' },
} as const;

/** Certification seal exported from Figma; drawn at 130px in the design. */
export function CertBadge({ variant, className }: Props) {
  const badge = BADGES[variant];

  return (
    <Image
      src={badge.src}
      alt={badge.label}
      width={130}
      height={130}
      unoptimized
      className={className}
    />
  );
}
