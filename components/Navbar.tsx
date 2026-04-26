"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Code of Conduct", href: "/" },
  { label: "Mahapurakh", href: "/mahopurakh" },
  { label: "History", href: "/history" },
  { label: "Gurbani", href: "/gurbani" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Close menu and reset view when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm shadow-slate-900/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4">
          {/* Context-aware Back Button: Only shows if not on Home page */}
          {pathname !== "/" && (
          <button
            onClick={() => router.back()}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-[#002366]"
            aria-label="Go backward"
          >
            <ArrowLeft size={20} />
          </button>
          )}

        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/damdami_logo.png"
            alt="Damdami Taksal Logo"
            width="32"
            height="32"
            className="rounded-[2px] object-contain"
          />
          <span className="text-lg font-semibold text-[#002366]">Damdami Taksal</span>
        </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-[#002366]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-[2px] bg-[#002366] p-2 text-white transition hover:bg-[#001f55] md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white p-6 shadow-xl md:hidden">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-slate-700 hover:text-[#002366]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
