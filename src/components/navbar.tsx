"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", active: true },
  { name: "Network", active: false },
  { name: "Product", active: false },
  { name: "Technology", active: false },
  { name: "Our Story", active: false },
  { name: "Knowledge Center", active: false },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* --- LOGO --- */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Lilypads logo"
            width={120}
            height={72}
            className={`w-auto transition-all duration-300 ${
              isScrolled ? "h-10" : "h-12"
            }`}
            priority
          />
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`group flex flex-col items-center gap-1 transition-colors duration-300 ${
                item.active
                  ? "font-bold text-[#6D4C9F]"
                  : "text-gray-600 hover:text-[#6D4C9F]"
              }`}
            >
              {item.name}
              <span
                className={`h-1.5 w-1.5 rounded-full bg-[#6D4C9F] transition-all duration-300 ${
                  item.active 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-1 scale-0 group-hover:opacity-50 group-hover:scale-100"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* --- RIGHT SIDE ACTIONS --- */}
        <div className="flex items-center gap-4">
          {/* Desktop Buttons (Hidden on Mobile) */}
          <button
            className={`hidden rounded-2xl border px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 md:inline-flex ${
              isScrolled
                ? "border-[#6D4C9F] text-[#6D4C9F] hover:bg-[#6D4C9F]/10"
                : "border-white text-white hover:bg-white/10"
            }`}
          >
            Contact Us
          </button>

          <button className="hidden rounded-2xl bg-white px-6 py-2.5 text-sm font-bold text-[#6D4C9F] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:inline-flex">
            Log In
          </button>

          {/* --- MOBILE MENU TOGGLE --- */}
          {/* FIX: Changed default text color to Purple (#6D4C9F) so it's visible on white backgrounds */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition md:hidden ${
                isScrolled 
                  ? "border-gray-200 text-gray-800 hover:bg-gray-100" // Scrolled state
                  : "border-[#6D4C9F]/20 text-[#6D4C9F] hover:bg-[#6D4C9F]/10" // Default state (Purple text)
            }`}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white border-b border-gray-100 shadow-xl md:hidden flex flex-col p-6 gap-4 animate-in slide-in-from-top-2 fade-in duration-200">
           {links.map((item) => (
            <a
              key={item.name}
              href="#"
              className="text-base font-medium text-gray-700 hover:text-[#6D4C9F] py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2">
             <button className="w-full rounded-2xl border border-[#6D4C9F] text-[#6D4C9F] px-6 py-3 text-sm font-semibold hover:bg-[#6D4C9F]/10 transition">
                Contact Us
             </button>
             <button className="w-full rounded-2xl bg-[#6D4C9F] text-white px-6 py-3 text-sm font-bold shadow-md transition hover:bg-[#5a3e85]">
                Log In
             </button>
          </div>
        </div>
      )}
    </header>
  );
}