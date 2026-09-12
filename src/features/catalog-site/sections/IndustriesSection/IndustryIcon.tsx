import Image from 'next/image';

interface Props {
  name: string;
  className?: string;
}

// Figma exported these with generated node names, so the industry -> file
// mapping lives here rather than leaking artboard names into the page data.
const ICON_FILES: Record<string, string> = {
  agriculture: 'Group',
  manufacturing: 'Group-1',
  construction: 'Clip path group',
  infrastructure: 'Group-2',
  logistics: 'Group-3',
  cement: 'g347',
  piping: 'g15',
  food: 'Layer_1',
};

/** Industry glyph from the Figma export, drawn at 47px in the design. */
export function IndustryIcon({ name, className }: Props) {
  const file = ICON_FILES[name];

  if (!file) return null;

  return (
    <Image
      src={`/projecticons/industryicons/Home/${file}.png`}
      alt=""
      width={47}
      height={47}
      className={className}
    />
  );
}
