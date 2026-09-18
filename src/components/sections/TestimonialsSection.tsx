"use client";

import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import { reviews } from "@/data/site";

export default function TestimonialsSection() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const activeReview = reviews[activeTestimonialIdx] ?? reviews[0]!;

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Testimonial Left Header */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold text-[#C59B27] uppercase tracking-widest">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-[#2C1A0B]">
              WHAT OUR <span className="text-[#C59B27]">STUDENTS SAY!</span>
            </h2>
            <p className="text-sm md:text-base text-[#6E5540] leading-relaxed">
              The Time Tech has helped hundreds of students, boutique owners, and entrepreneurs
              across the UAE launch AI stores and scale their online businesses.
            </p>
            <div className="pt-2">
              <a
                href="#enrol"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2C1A0B] hover:bg-[#1F1208] text-white text-xs font-extrabold uppercase tracking-widest transition-all shadow-md border border-[#D4AF37]/30"
              >
                <span>ENROL & JOIN THEM</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="lg:col-span-7">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-900/10">
              <div className="flex items-center gap-1 text-[#D4AF37] mb-6">
                {Array.from({ length: activeReview.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-base md:text-lg text-[#2C1A0B] italic font-medium leading-relaxed mb-8">
                &ldquo;{activeReview.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between border-t border-amber-900/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center font-bold text-lg">
                    {activeReview.name[0]}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#2C1A0B]">{activeReview.name}</h4>
                    <p className="text-xs text-[#6E5540]">
                      {activeReview.role} ·{" "}
                      <span className="text-[#C59B27] font-semibold">{activeReview.course}</span>
                    </p>
                  </div>
                </div>

                {/* Testimonial Nav Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveTestimonialIdx(
                        (prev) => (prev - 1 + reviews.length) % reviews.length,
                      )
                    }
                    className="w-10 h-10 rounded-full border border-amber-900/20 hover:border-[#C59B27] hover:bg-[#C59B27] hover:text-white flex items-center justify-center text-[#2C1A0B] font-bold transition-colors"
                    aria-label="Previous review"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setActiveTestimonialIdx((prev) => (prev + 1) % reviews.length)}
                    className="w-10 h-10 rounded-full border border-amber-900/20 hover:border-[#C59B27] hover:bg-[#C59B27] hover:text-white flex items-center justify-center text-[#2C1A0B] font-bold transition-colors"
                    aria-label="Next review"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
