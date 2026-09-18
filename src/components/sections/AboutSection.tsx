import { Sparkles, ShoppingBag, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 bg-[#FAF8F5]" id="about">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-[#2C1A0B]">
          ALL-IN-ONE <span className="text-[#C59B27]">AI & E-COMMERCE LEARNING EXPERIENCE</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#6E5540] max-w-2xl mx-auto uppercase tracking-wide font-medium">
          THE TIME TECH PROVIDES EVERYTHING YOU NEED TO BUILD ONLINE STORES WITH AI AND SCALE
          PROFITABLE CAMPAIGNS.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-amber-900/5 border border-amber-900/10 hover:border-[#C59B27]/40 transition-all hover:-translate-y-1.5 text-center relative group">
            <div className="w-16 h-16 rounded-2xl bg-[#3A230F] text-[#D4AF37] flex items-center justify-center mx-auto shadow-lg shadow-amber-950/20 group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="mt-6 text-xl font-extrabold uppercase tracking-wider text-[#2C1A0B]">
              BUILD STORE WITH AI
            </h3>
            <p className="mt-3 text-xs md:text-sm text-[#6E5540] leading-relaxed">
              Generate high-converting Shopify store structures, themes, product descriptions, and
              media assets automatically using AI tools.
            </p>
          </div>

          {/* Pillar Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-amber-900/5 border border-amber-900/10 hover:border-[#C59B27]/40 transition-all hover:-translate-y-1.5 text-center relative group">
            <div className="w-16 h-16 rounded-2xl bg-[#C59B27] text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-900/20 group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="mt-6 text-xl font-extrabold uppercase tracking-wider text-[#2C1A0B]">
              STORE & SOURCING MASTERY
            </h3>
            <p className="mt-3 text-xs md:text-sm text-[#6E5540] leading-relaxed">
              Comprehensive step-by-step training in Shopify store creation, product validation,
              supplier negotiation, and Amazon FBA logistics.
            </p>
          </div>

          {/* Pillar Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-amber-900/5 border border-amber-900/10 hover:border-[#C59B27]/40 transition-all hover:-translate-y-1.5 text-center relative group">
            <div className="w-16 h-16 rounded-2xl bg-[#8B6B23] text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-900/20 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="mt-6 text-xl font-extrabold uppercase tracking-wider text-[#2C1A0B]">
              AI ADS & DIGITAL GROWTH
            </h3>
            <p className="mt-3 text-xs md:text-sm text-[#6E5540] leading-relaxed">
              Master AI-powered ad copy, Meta Ads, Google Performance Max, SEO, and email
              automations. Read analytics dashboards with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
