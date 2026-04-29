"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "History", href: "/history" },
  { label: "Mahapurakh", href: "/mahopurakh" },
  { label: "Gurbani", href: "/gurbani" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-20 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl dark:border-slate-700/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#002b7a]">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#ff9933]/10 text-[#ff9933] ring-1 ring-[#ff9933]/15">
            DT
          </span>
          Damdami Taksal Canada
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-[#002b7a]">
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#002b7a] hover:text-[#002b7a] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white/95 px-6 pb-6 pt-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[2px] px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#ff9933]/10 hover:text-[#002b7a]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
