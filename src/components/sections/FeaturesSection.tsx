import {
  Sparkles,
  CheckCircle2,
  Video,
  Mic,
  Camera,
  PhoneOff,
  ShoppingBag,
  MessageSquare,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-extrabold text-[#C59B27] uppercase tracking-widest">
            OUR FEATURES & AI TOOLS
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-[#2C1A0B] mt-2">
            THIS IS HOW WE MAKE{" "}
            <span className="text-[#C59B27]">E-COMMERCE & LEARNING EASIER WITH AI</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#6E5540]">
            Designed specifically for entrepreneurs, sellers, and professionals looking to leverage
            AI to build online stores and scale faster.
          </p>
        </div>

        {/* AI Feature Spotlight Banner: BUILD STORE WITH AI */}
        <div className="mb-20 bg-gradient-to-r from-[#2C1A0B] via-[#3A230F] to-[#1F1208] rounded-3xl p-8 md:p-12 text-white border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C59B27]/20 border border-[#D4AF37]/40 text-xs font-bold text-[#F3E5AB] uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>SPECIALIZED MODULE: BUILD STORE WITH AI</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-wide text-white">
                LAUNCH YOUR ONLINE STORE IN MINUTES WITH AI
              </h3>
              <p className="text-sm md:text-base text-amber-100/90 leading-relaxed max-w-2xl">
                Stop spending weeks building website layouts manually. Learn how to prompt AI store
                builders, create high-converting copywriting with AI, produce ultra-realistic
                product imagery, and deploy 24/7 AI chat assistants.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bold text-amber-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>AI Store Generation & Prompting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>AI Product Copy & SEO Generator</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>24/7 AI Customer Support Chatbots</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>AI Ad Copy & Visual Creation</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <a
                href="/courses?slug=shopify"
                className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-widest rounded-full shadow-xl transition-all hover:scale-105"
              >
                EXPLORE AI STORE MODULE
              </a>
            </div>
          </div>
        </div>

        {/* Feature Row 1: Interactive Live Video Call UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative bg-[#2C1A0B] rounded-3xl p-4 shadow-2xl text-white overflow-hidden border border-[#D4AF37]/20">
              {/* Mockup Video Interface */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900">
                <img
                  src="/images/instructor.jpg"
                  alt="Live Instructor Call"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute top-3 left-3 bg-[#C59B27] text-[#2C1A0B] text-[0.65rem] px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2C1A0B] animate-ping" />
                  <span>LIVE SESSION</span>
                </div>
                <div className="absolute bottom-16 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-amber-100">
                  Instructor — Lead E-Commerce Specialist
                </div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-4 text-white">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#C59B27] text-[#2C1A0B] flex items-center justify-center">
                    <PhoneOff className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="w-12 h-12 rounded-2xl bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center font-bold">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-[#2C1A0B]">
              INTERACTIVE LIVE CALL & VIDEO SESSIONS
            </h3>
            <p className="text-sm md:text-base text-[#6E5540] leading-relaxed">
              Connect directly with instructors during scheduled live sessions. Ask questions in
              real time, request live screen-sharing store audits, and learn in an engaging virtual
              classroom.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-[#3A230F] font-semibold pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Real-time voice and chat discussion</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Live store screen-sharing & audits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Full HD session recordings available afterwards</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Row 2: Practical Tools & Store Audits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#3A230F] text-[#D4AF37] flex items-center justify-center font-bold">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-[#2C1A0B]">
              PRACTICAL AI TOOLS FOR STORE OWNERS & SELLERS
            </h3>
            <p className="text-sm md:text-base text-[#6E5540] leading-relaxed">
              Build real business assets during the course. From Shopify store building with AI and
              payment gateway setup to Amazon FBA shipping plans and Meta Pixel integration.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-[#3A230F] font-semibold pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Shopify theme customization & AI product listing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Amazon FBA supplier negotiation templates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>High-ROAS Meta and Google ad campaign structures</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-amber-900/10 overflow-hidden">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-100 group">
                <img
                  src="/images/store_preview.jpg"
                  alt="Store Preview & Tools"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Row 3: 1-on-1 Mentor Support */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-amber-900/10 overflow-hidden">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-100 group">
                <img
                  src="/images/team.jpg"
                  alt="1-on-1 Mentor Support"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="w-12 h-12 rounded-2xl bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center font-bold">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-[#2C1A0B]">
              DEDICATED MENTORSHIP & CONTINUOUS SUPPORT
            </h3>
            <p className="text-sm md:text-base text-[#6E5540] leading-relaxed">
              You are never left alone. Receive direct mentor support throughout your course
              duration and get feedback on your assignments, store build, and marketing strategies.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-[#3A230F] font-semibold pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Direct instructor messaging & store feedback</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Community group of fellow UAE entrepreneurs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Step-by-step guidance on real store challenges</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
