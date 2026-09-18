import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { brand } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#1F1208] text-white pt-16 pb-12 border-t border-[#D4AF37]/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Footer Logo & Brand (Enlarged Logo) */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="The Time Tech Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-black text-2xl md:text-3xl uppercase tracking-wider block leading-none text-white">
                {brand.name}
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[#D4AF37] font-extrabold mt-1 block">
                {brand.tagline.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-wider text-amber-100/80 font-bold">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              HOME
            </Link>
            <Link href="/courses" className="hover:text-[#D4AF37] transition-colors">
              COURSES
            </Link>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">
              ABOUT US
            </a>
            <a href="#features" className="hover:text-[#D4AF37] transition-colors">
              FEATURES & AI
            </a>
            <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">
              REVIEWS
            </a>
            <a href="#enrol" className="hover:text-[#D4AF37] transition-colors">
              ENROL NOW
            </a>
          </nav>
        </div>

        {/* Copyright & Info */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-amber-200/60 font-medium uppercase tracking-wider">
          <p>
            © {new Date().getFullYear()} {brand.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              {brand.location.toUpperCase()}
            </span>
            <span>•</span>
            <a
              href={`tel:${brand.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors text-amber-100"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              {brand.phone}
            </a>
            <span>•</span>
            <a href={`mailto:${brand.email}`} className="hover:text-white transition-colors">
              {brand.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
