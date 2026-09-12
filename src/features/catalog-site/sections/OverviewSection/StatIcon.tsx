import Image from 'next/image';

interface Props {
  name: string;
  className?: string;
}

// Exported assets are named by glyph, not by the stat they sit on, so the
// mapping lives here rather than in the page data. security-user serves two
// stats; the design reuses the same glyph for both.
const ICON_FILES: Record<string, string> = {
  globe: 'global',
  'shield-user': 'security-user',
  user: 'user',
  building: 'buliding',
  clock: 'clock',
  briefcase: 'briefcase',
  cash: 'moneys',
};

/** Overview stat glyph, drawn from the Figma PNG export at 20px. */
export function StatIcon({ name, className }: Props) {
  const file = ICON_FILES[name];

  if (!file) return null;

  return (
    // The source art is 39px; requesting 40 keeps it crisp on retina, and CSS
    // scales it back to the 20px box.
    <Image
      src={`/section1icons/Home/${file}.png`}
      alt=""
      width={40}
      height={40}
      className={className}
    />
  );
}
