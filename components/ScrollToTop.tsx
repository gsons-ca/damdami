"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#002366] text-white shadow-xl transition-all hover:bg-[#ff9933] hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Scroll backward to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}