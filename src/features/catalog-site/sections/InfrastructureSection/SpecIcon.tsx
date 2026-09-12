import Image from 'next/image';

interface Props {
  name: string;
  className?: string;
}

// Folder name carries the typo from the export; matched verbatim so the path
// resolves. Only arrows-expand sits outside the vuesax/linear set.
const BASE = '/projecticons/infrastrucutreicons/Home';

const ICON_FILES: Record<string, string> = {
  transfer: `${BASE}/vuesax/linear/frame.png`,
  expand: `${BASE}/arrows-expand.png`,
  users: `${BASE}/vuesax/linear/people.png`,
  box: `${BASE}/vuesax/linear/box.png`,
};

/** Infrastructure spec glyph from the Figma export, drawn at 21px. */
export function SpecIcon({ name, className }: Props) {
  const src = ICON_FILES[name];

  if (!src) return null;

  return (
    <Image src={src} alt="" width={21} height={21} className={className} />
  );
}
