"use client";

import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

interface WhatIsTimeTechSectionProps {
  onOpenVideoModal: () => void;
}

export default function WhatIsTimeTechSection({ onOpenVideoModal }: WhatIsTimeTechSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C1A0B]">
            What is <span className="text-[#C59B27]">The Time Tech</span>?
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#6E5540]">
            The Time Tech is a premier training academy in Dubai providing live, practical
            instructor-led courses for entrepreneurs, sellers, and digital marketers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Integrated Video Player (Uses User's Video /intro.mp4) */}
          <div className="relative rounded-3xl overflow-hidden group shadow-2xl border border-amber-900/20 bg-[#2C1A0B] text-white">
            <div className="relative aspect-video w-full bg-black">
              <video
                src="/intro.mp4"
                controls
                poster="/images/store_preview.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-3 bg-gradient-to-t from-[#2C1A0B] via-[#2C1A0B] to-transparent">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                WATCH ACADEMY DEMO
              </span>
              <h3 className="text-2xl font-bold">FOR STUDENTS & ENTREPRENEURS</h3>
              <p className="text-xs md:text-sm text-amber-100/80">
                See how our live interactive sessions guide students step-by-step from zero to
                launching live Shopify stores and Amazon FBA listings.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenVideoModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#C59B27] hover:to-[#B8860B] text-white text-xs font-bold transition-all shadow-md"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Fullscreen Video</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Course & Academy Preview */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-900/10 bg-white flex flex-col justify-between">
            <div className="relative aspect-video w-full overflow-hidden bg-stone-100 group">
              <img
                src="/images/classroom.jpg"
                alt="Classroom Session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="p-8 space-y-3">
              <span className="text-xs font-bold text-[#C59B27] uppercase tracking-wider">
                INSTRUCTOR-LED COURSES
              </span>
              <h3 className="text-2xl font-bold text-[#2C1A0B]">FOR PROFESSIONALS & SELLERS</h3>
              <p className="text-xs md:text-sm text-[#6E5540]">
                Small class sizes, dedicated mentor Q&A, and practical assignments ensure every
                student walks away with tangible e-commerce assets.
              </p>
              <div className="pt-2">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3A230F] hover:bg-[#2C1A0B] text-white text-xs font-bold transition-all shadow-md"
                >
                  <span>EXPLORE ALL COURSES</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
