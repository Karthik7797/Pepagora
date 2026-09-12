import { cn } from '@/lib/cn';
import s from './FormField.module.scss';

export function FormStack({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(s.stack, className)}>{children}</div>;
}

export function FormRow({ children }: { children: React.ReactNode }) {
  return <div className={s.row}>{children}</div>;
}

export function FormDivider() {
  return <div className={s.divider} />;
}

export function FormHint({ children }: { children: React.ReactNode }) {
  return <p className={s.hint}>{children}</p>;
}
