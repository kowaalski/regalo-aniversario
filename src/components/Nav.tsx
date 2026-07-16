"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logout } from "@/lib/auth";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/timeline", label: "Nuestra historia" },
  { href: "/razones", label: "7 razones" },
  { href: "/cupones", label: "Cupones" },
  { href: "/cancionero", label: "Banda sonora" },
  { href: "/carta", label: "El sobre" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-terracota/15 bg-crema/85 shadow-soft backdrop-blur-md">
      <div className="mx-auto grid max-w-5xl grid-cols-[1fr_auto_1fr] items-center px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-serif-display text-xl italic text-tinta transition-opacity hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          Carmen &amp; Diego
        </Link>

        <nav className="hidden items-center gap-1 justify-self-center sm:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm transition-all duration-200 ${
                  active
                    ? "bg-terracota text-cal shadow-soft"
                    : "text-tinta-suave hover:bg-terracota/10 hover:text-tinta"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <form action={logout}>
            <button
              type="submit"
              className="ml-2 rounded-full px-3 py-1.5 text-sm text-tinta-suave underline decoration-dorado decoration-2 underline-offset-4 transition-colors hover:text-tinta"
            >
              Salir
            </button>
          </form>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-11 w-11 items-center justify-center justify-self-end sm:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span
            className={`absolute h-px w-6 bg-tinta transition-transform duration-300 ease-out ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-px w-6 bg-tinta transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-px w-6 bg-tinta transition-transform duration-300 ease-out ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      <nav
        inert={!open}
        className={`flex flex-col gap-1 overflow-hidden border-t border-terracota/15 px-4 transition-[max-height,opacity] duration-300 ease-out sm:hidden ${
          open ? "max-h-[28rem] py-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-base transition-colors ${
                active
                  ? "bg-terracota text-cal"
                  : "text-tinta-suave hover:bg-terracota/10"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <form action={logout}>
          <button
            type="submit"
            className="mt-1 rounded-lg px-3 py-2.5 text-left text-base text-tinta-suave underline decoration-dorado decoration-2 underline-offset-4"
          >
            Salir
          </button>
        </form>
      </nav>
    </header>
  );
}
