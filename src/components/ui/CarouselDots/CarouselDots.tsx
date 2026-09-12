'use client';

import { cn } from '@/lib/cn';
import s from './CarouselDots.module.scss';

interface Props {
  count: number;
  index: number;
  onSelect: (index: number) => void;
  variant?: 'dots' | 'bars';
  label?: string;
}

export function CarouselDots({
  count,
  index,
  onSelect,
  variant = 'dots',
  label = 'Slide',
}: Props) {
  return (
    <div className={cn(s.dots, variant === 'bars' && s.bars)}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={s.dot}
          aria-current={i === index}
          aria-label={`${label} ${i + 1}`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}
