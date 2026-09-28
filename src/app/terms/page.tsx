import Metadata from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { brand, termsAndConditions } from "@/data/site";
import { ShieldAlert, ArrowLeft, FileText, Scale, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | The Time Tech",
  description:
    "Terms and Conditions for The Time Tech educational programs, courses, and digital content.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C1A0B] font-sans antialiased selection:bg-[#C59B27] selection:text-white flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#1F1208] via-[#2C1A0B] to-[#3B2310] text-white py-16 md:py-20 relative overflow-hidden border-b border-[#D4AF37]/30">
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
          <div className="mx-auto max-w-5xl px-6 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3 text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest mb-3">
              <FileText className="w-4 h-4" />
              <span>Legal & Compliance</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-white">
              {termsAndConditions.title}
            </h1>
            <p className="mt-4 text-sm md:text-base text-amber-100/80 max-w-2xl font-light leading-relaxed">
              Please read these terms carefully before engaging with {brand.name} programs, website
              content, or services.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <main className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-amber-900/10 relative">
              <div className="flex items-center gap-4 pb-8 mb-8 border-b border-amber-900/10">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-[#C59B27] flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black uppercase tracking-wide text-[#2C1A0B]">
                    Terms of Use & Disclaimer
                  </h2>
                  <p className="text-xs text-[#6E5540] font-medium mt-0.5">
                    Official terms governing all content provided by {brand.name}
                  </p>
                </div>
              </div>

              <div className="space-y-8 text-[#4A382A] text-sm md:text-base leading-relaxed">
                {termsAndConditions.sections.map((paragraph, index) => (
                  <div
                    key={index}
                    className="p-6 md:p-8 rounded-2xl bg-[#FAF6EE] border border-[#C59B27]/20 flex items-start gap-4 hover:border-[#C59B27]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#C59B27] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-sm">
                      0{index + 1}
                    </div>
                    <p className="font-medium leading-relaxed text-[#2C1A0B]">{paragraph}</p>
                  </div>
                ))}

                <div className="mt-10 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-4">
                  <ShieldAlert className="w-6 h-6 text-[#C59B27] shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm text-[#6E5540] leading-relaxed">
                    By accessing or continuing to use{" "}
                    <strong className="text-[#2C1A0B]">{brand.name}</strong> website and services,
                    you acknowledge that you have read, understood, and agreed to these terms and
                    conditions.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#6E5540] font-semibold tracking-wider">
                  Questions? Contact us at{" "}
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-[#C59B27] underline hover:text-[#B8860B]"
                  >
                    {brand.email}
                  </a>
                </span>
                <Link
                  href="/"
                  className="px-6 py-3 bg-[#2C1A0B] text-white text-xs font-extrabold uppercase tracking-widest rounded-full hover:bg-[#C59B27] transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
