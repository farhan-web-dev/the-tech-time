"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { brand } from "@/data/site";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 shadow-sm transition-all">
      <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="The Time Tech Logo"
              className="w-full h-full object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-2xl md:text-3xl uppercase tracking-wider text-[#2C1A0B]">
              {brand.name}
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[#C59B27] font-extrabold mt-1">
              ACADEMY & AI STORE BUILDER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider text-[#5C4532]">
          <Link href="/" className="text-[#C59B27]">
            HOME
          </Link>
          <Link href="/courses" className="hover:text-[#C59B27] transition-colors">
            COURSES
          </Link>
          <a href="#about" className="hover:text-[#C59B27] transition-colors">
            ABOUT US
          </a>
          <a href="#features" className="hover:text-[#C59B27] transition-colors">
            FEATURES & AI
          </a>
          <a href="#reviews" className="hover:text-[#C59B27] transition-colors">
            REVIEWS
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${brand.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 text-xs font-bold text-[#2C1A0B] hover:text-[#C59B27] transition-colors px-2 py-1"
          >
            <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
            {brand.phone}
          </a>
          <a
            href="#enrol"
            className="bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] hover:opacity-95 text-white text-xs font-extrabold uppercase tracking-widest px-6 py-3 rounded-full shadow-md shadow-amber-900/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            ENROL NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#2C1A0B] hover:text-[#C59B27]"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-amber-900/10 px-6 py-4 space-y-3 animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-[#C59B27] font-extrabold uppercase tracking-wider"
          >
            HOME
          </Link>
          <Link
            href="/courses"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-[#5C4532] font-bold uppercase tracking-wider hover:text-[#C59B27]"
          >
            COURSES
          </Link>
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-[#5C4532] font-bold uppercase tracking-wider hover:text-[#C59B27]"
          >
            ABOUT US
          </a>
          <a
            href="#features"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-[#5C4532] font-bold uppercase tracking-wider hover:text-[#C59B27]"
          >
            FEATURES & AI
          </a>
          <a
            href="#reviews"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-[#5C4532] font-bold uppercase tracking-wider hover:text-[#C59B27]"
          >
            REVIEWS
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#enrol"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-white py-2.5 rounded-full font-extrabold uppercase tracking-widest text-xs shadow"
            >
              ENROL NOW
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
