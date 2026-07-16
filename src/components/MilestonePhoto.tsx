"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function MilestonePhoto({
  src,
  alt,
  position = "top",
}: {
  src: string;
  alt: string;
  position?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ver foto completa: ${alt}`}
        className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-3xl border border-terracota/15 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 640px) 40vw, 90vw"
          style={{ objectPosition: position }}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-tinta/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-crema/10 text-2xl text-crema transition-colors hover:bg-crema/20"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-2xl object-contain shadow-lift"
          />
        </div>
      )}
    </>
  );
}
