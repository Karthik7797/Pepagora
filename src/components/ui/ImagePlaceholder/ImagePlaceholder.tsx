import Image from 'next/image';
import { cn } from '@/lib/cn';
import s from './ImagePlaceholder.module.scss';

interface Props {
  className?: string;
}

/** Placeholder artwork from the design, standing in for unset images. */
export function ImagePlaceholder({ className }: Props) {
  return (
    <div className={cn(s.placeholder, className)} aria-hidden="true">
      <Image
        src="/projecticons/placeholder-glyph.png"
        alt=""
        width={47}
        height={47}
        className={s.glyph}
      />
    </div>
  );
}
