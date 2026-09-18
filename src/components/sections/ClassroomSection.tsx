import { Check, ChevronRight } from "lucide-react";

export default function ClassroomSection() {
  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C1A0B] leading-tight">
              Everything you can do in a physical classroom,{" "}
              <span className="text-[#C59B27]">you can do here</span>
            </h2>
            <p className="text-sm md:text-base text-[#6E5540] leading-relaxed">
              The Time Tech’s online environment gives you direct access to expert instructors in
              Dubai. Ask questions live, get instant store reviews, and work alongside fellow
              entrepreneurs.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2C1A0B]">Live Q&A and Screen Sharing</p>
                  <p className="text-xs text-[#6E5540]">
                    Get your store configuration or ad campaign audited live by your instructor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2C1A0B]">70% Hands-On Building</p>
                  <p className="text-xs text-[#6E5540]">
                    Build your actual Shopify store, setup Meta pixels, or create Amazon shipping
                    plans during class.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2C1A0B]">
                    Small Class Sizes & Mentor Support
                  </p>
                  <p className="text-xs text-[#6E5540]">
                    Receive individual guidance tailored to your specific business goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#enrol"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C59B27] hover:text-[#B8860B] group"
              >
                <span className="underline decoration-2 underline-offset-4">
                  Learn more about our methodology
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-amber-900/10 overflow-hidden">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 group">
                  <img
                    src="/images/classroom.jpg"
                    alt="Physical Classroom Experience Online"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
