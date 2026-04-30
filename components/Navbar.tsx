"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft, Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  subLinks?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { 
    label: "Code of Conduct", 
    href: "/",
    subLinks: [
      { label: "Overview", href: "/" },
      { label: "Rehat Maryada", href: "/code-of-conduct/rehat" },
      { label: "Taksal Traditions", href: "/code-of-conduct/traditions" },
    ]
  },
  { 
    label: "Mahapurakh", 
    href: "/mahopurakh",
    subLinks: [
      { label: "Overview", href: "/mahopurakh" },
      { label: "Past Jathedars", href: "/mahopurakh/jathedars" },
      { label: "Current Leadership", href: "/mahopurakh/leadership" },
    ]
  },
  { 
    label: "History", 
    href: "/history",
    subLinks: [
      { label: "Overview", href: "/history" },
      { label: "The Ten Gurus", href: "/history/the-ten-gurus" },
      { label: "Leaders", href: "/history/leaders" },
      { label: "Gursikhs", href: "/history/gursikhs" },
      { label: "Shaheeds", href: "/history/shaheeds" },
      { label: "Historical Gurdwaras", href: "/history/gurdwaras" },
    ]
  },
  { 
    label: "Gurbani", 
    href: "/gurbani",
    subLinks: [
      { label: "Overview", href: "/gurbani" },
      { label: "Santhiya", href: "/gurbani/santhiya" },
      { label: "Katha", href: "/gurbani/katha" },
      { label: "Pothis & Steeks", href: "/gurbani/pothis" },
    ]
  },
  { 
    label: "Media", 
    href: "/media",
    subLinks: [
      { label: "Overview", href: "/media" },
      { label: "Audio Library", href: "/media/audio" },
      { label: "Video Gallery", href: "/media/video" },
      { label: "Photo Gallery", href: "/media/gallery" },
    ]
  },
  { 
    label: "Contact", 
    href: "/contact",
    subLinks: [
      { label: "Overview", href: "/contact" },
      { label: "Head Office", href: "/contact/office" },
      { label: "Send a Message", href: "/contact/message" },
    ]
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close menu and reset view when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm shadow-slate-900/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4">
          {/* Context-aware Back Button: Only shows if not on Home page */}
          {pathname !== "/" && (
          <button
            onClick={() => router.back()}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-[#002b7a]"
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
            width="60"
            height="60"
            className="rounded-[2px] object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-[#002b7a]">Official website of Damdami Taksal 
          </span>
            
        </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="group relative">
              {link.subLinks ? (
                <div className="flex items-center gap-1 cursor-default py-2 text-sm font-medium text-slate-700 transition hover:text-[#002b7a]">
                  {link.label}
                  <ChevronDown size={14} />
                  
                  {/* Desktop Dropdown */}
                  <div className="invisible absolute left-0 top-full z-50 w-48 rounded-[2px] border border-slate-100 bg-white p-2 shadow-lg group-hover:visible">
                    <ul className="flex flex-col gap-1">
                      {link.subLinks.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block rounded-[2px] px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-[#002b7a]"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-[#002b7a]"
              >
                {link.label}
              </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-[2px] bg-[#002b7a] p-2 text-white transition hover:bg-[#002366] md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white p-6 shadow-xl md:hidden">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.subLinks ? (
                  <div className="space-y-2">
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className="flex w-full items-center justify-between text-base font-medium text-slate-700"
                    >
                      {link.label}
                      <ChevronDown size={18} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.label && (
                      <ul className="ml-4 space-y-2 border-l border-slate-100 pl-4">
                        {link.subLinks.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm font-medium text-slate-500 hover:text-[#002b7a]"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-base font-medium text-slate-700 hover:text-[#002b7a]"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
