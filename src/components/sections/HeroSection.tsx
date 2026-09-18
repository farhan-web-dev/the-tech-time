"use client";

import { ArrowRight, Play, CheckCircle2, Users, Video } from "lucide-react";
import { brand } from "@/data/site";

interface HeroSectionProps {
  onWatchVideo: () => void;
}

export default function HeroSection({ onWatchVideo }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#2C1A0B] via-[#3A230F] to-[#4A2E00] rounded-b-[40px] md:rounded-b-[70px] lg:rounded-b-[100px] pt-12 pb-24 md:pb-32 text-white overflow-hidden">
      {/* Background Gold Ambient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#C59B27]/15 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide leading-[1.15]">
              BUILD YOUR STORE WITH{" "}
              <span className="text-[#D4AF37] relative underline decoration-wavy decoration-[#D4AF37]/60">
                AI
              </span>{" "}
              & MASTER E-COMMERCE WITH <span className="text-white">THE TIME TECH</span>
            </h1>

            <p className="text-base md:text-md text-amber-100/90 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {brand.tagline.toUpperCase()} Learn how to build stores with AI, generate winning
              product descriptions, launch Meta & Google ads, and master Amazon FBA with 70%
              hands-on training.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#enrol"
                className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] hover:opacity-95 text-white px-8 py-4 rounded-full font-extrabold text-sm tracking-wide shadow-xl shadow-amber-950/40 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Join For Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onWatchVideo}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 px-7 py-3.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#2C1A0B] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch how it works</span>
              </button>
            </div>

            {/* Quick Trust Tags */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-amber-200/90 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>100% Live Instructor-Led</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>70% Practical Exercises</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Dubai Based Mentors</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual & Floating UI Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Circle Background */}
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-3xl transform rotate-3 scale-105" />

              {/* Main Hero Image Container / Slot */}
              <div className="relative bg-[#1F1208] rounded-3xl p-3 shadow-2xl border border-[#D4AF37]/40 overflow-hidden group">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-stone-900">
                  <img
                    src="/images/instructor.jpg"
                    alt="The Time Tech Instructor & Classroom"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Badge 1: 15K+ Active Students */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-amber-900/10 text-[#2C1A0B] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#2C1A0B]">15K+ Students</p>
                  <p className="text-[0.65rem] text-[#6E5540]">Enrolled worldwide</p>
                </div>
              </div>

              {/* Floating Badge 2: Live Class Session */}
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-amber-900/10 text-[#2C1A0B] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4A2E00]/15 text-[#4A2E00] flex items-center justify-center font-bold">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#2C1A0B]">Interactive Live</p>
                  <p className="text-[0.65rem] text-[#6E5540]">Real-time Q&A</p>
                </div>
              </div>

              {/* Floating Badge 3: Practical Success */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-amber-900/10 text-[#2C1A0B] flex items-center gap-3 whitespace-nowrap">
                <div className="w-9 h-9 rounded-full bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center font-extrabold text-xs">
                  70%
                </div>
                <div className="text-left">
                  <p className="text-xs font-extrabold text-[#2C1A0B]">Practical Exercises</p>
                  <p className="text-[0.65rem] text-[#6E5540]">Learn by doing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
