"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { club, navItems } from "@/lib/content";
import { buttonClass } from "@/components/Button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-paper">
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="mr-auto min-w-0 max-w-[10.5rem] font-display text-lg leading-tight text-asphalt sm:max-w-none sm:text-xl"
        >
          {club.name}
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`font-display text-lg leading-none text-asphalt ${
                  active
                    ? "underline decoration-sunrise decoration-4 underline-offset-8"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/join" className={`${buttonClass.primary} shrink-0`}>
          Join a Run
        </Link>
        <button
          type="button"
          className="inline-flex min-h-12 min-w-12 shrink-0 items-center justify-center border border-mist bg-paper px-3 font-display text-lg leading-none text-asphalt lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-mist bg-paper px-4 py-2 lg:hidden"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="block py-3 font-display text-3xl leading-none text-asphalt"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}

export function HeaderFallback() {
  return (
    <div className="sticky top-0 z-40 border-b border-mist bg-paper">
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-10">
        <span className="font-display text-xl text-asphalt">{club.name}</span>
      </div>
    </div>
  );
}
