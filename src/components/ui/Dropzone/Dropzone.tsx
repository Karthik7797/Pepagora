'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { UPLOAD } from '@/lib/constants';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import s from './Dropzone.module.scss';
import type { DropzoneProps } from './Dropzone.types';

export function Dropzone({
  value,
  onChange,
  accept = UPLOAD.accept,
  maxSizeMb = UPLOAD.maxSizeMb,
  hint = UPLOAD.hint,
  label = 'Banner image',
  variant = 'dropzone',
}: DropzoneProps) {
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const accept_ = (file: File | undefined) => {
    if (!file) return;

    if (file.size > maxSizeMb * 1024 * 1024) {
      setError(`File is larger than ${maxSizeMb}MB.`);
      return;
    }

    setError(null);
    onChange(file);
  };

  const fileInput = (
    <input
      ref={inputRef}
      type="file"
      accept={accept}
      className={s.input}
      aria-label={label}
      onChange={(e) => accept_(e.target.files?.[0])}
    />
  );

  if (value && variant === 'compact') {
    return (
      <>
        <div className={s.compactFilled}>
          <div className={s.compactPreview}>
            {/* Object URL from the picker — next/image can't optimise it. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={value} alt={label} />
          </div>

          <button
            type="button"
            className={s.change}
            onClick={() => inputRef.current?.click()}
          >
            Change
          </button>
        </div>

        {fileInput}
        {error && <span className={s.error}>{error}</span>}
      </>
    );
  }

  if (variant === 'compact') {
    return (
      <>
        <div className={s.compactEmpty}>
          <Button
            variant="outline"
            size="sm"
            pill
            onClick={() => inputRef.current?.click()}
          >
            Upload file
          </Button>
          <span className={s.hint}>{hint}</span>
        </div>

        {fileInput}
        {error && <span className={s.error}>{error}</span>}
      </>
    );
  }

  if (value) {
    return (
      <div className={s.preview}>
        {/* Object URL from the picker — next/image can't optimise it. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={value} alt={label} />
        <IconButton
          icon="close"
          label="Remove image"
          size={28}
          className={s.remove}
          onClick={() => onChange(null)}
        />
      </div>
    );
  }

  return (
    <>
      <div
        className={s.zone}
        data-dragging={dragging}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          accept_(e.dataTransfer.files[0]);
        }}
      >
        <Image
          src="/projecticons/document-copy.png"
          alt=""
          width={30}
          height={30}
          className={s.icon}
        />
        <span className={s.title}>Drag &amp; Drop</span>
        <span className={s.separator}>or</span>

        <Button
          variant="outline"
          size="sm"
          pill
          onClick={() => inputRef.current?.click()}
        >
          Choose File
        </Button>

        <span className={s.hint}>{hint}</span>

        {fileInput}
      </div>

      {error && <span className={s.error}>{error}</span>}
    </>
  );
}
