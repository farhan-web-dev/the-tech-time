import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Clock } from "lucide-react";
import shopifyImg from "@/assets/course-shopify.jpg";
import amazonImg from "@/assets/course-amazon.jpg";
import marketingImg from "@/assets/course-marketing.jpg";
import { courses } from "@/data/site";

const courseCovers: Record<string, typeof shopifyImg> = {
  shopify: shopifyImg,
  "amazon-fba": amazonImg,
  "digital-marketing": marketingImg,
};

export default function CoursesSection() {
  return (
    <section className="py-20 bg-[#FAF8F5]" id="courses">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs font-extrabold text-[#C59B27] uppercase tracking-widest">
              CAREER-DEFINING PROGRAMMES
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-[#2C1A0B] mt-2">
              EXPLORE <span className="text-[#C59B27]">OUR AI-POWERED COURSES</span>
            </h2>
            <p className="mt-2 text-sm text-[#6E5540]">
              Practical instructor-led training designed to build real online businesses with AI.
            </p>
          </div>
          <Link
            href="/courses"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C59B27] hover:text-[#B8860B]"
          >
            <span>VIEW ALL COURSES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((c) => {
            const coverImg = courseCovers[c.slug] || shopifyImg;
            return (
              <div
                key={c.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-amber-900/5 border border-amber-900/10 flex flex-col justify-between transition-transform hover:-translate-y-2 group"
              >
                <div>
                  {/* Course Card Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={coverImg}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#2C1A0B]/85 backdrop-blur-md text-amber-200 text-[0.65rem] px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-[#D4AF37]/30">
                      {c.duration}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#C59B27] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
                      {c.promo}
                    </div>
                  </div>

                  {/* Course Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#D4AF37]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                        <span className="text-xs font-bold text-[#2C1A0B] ml-1">5.0</span>
                      </div>
                      <span className="text-[0.65rem] font-extrabold uppercase tracking-wider text-[#C59B27] bg-[#C59B27]/10 px-2.5 py-0.5 rounded-full border border-[#C59B27]/20">
                        AI-POWERED
                      </span>
                    </div>

                    <h3 className="text-lg font-black uppercase tracking-wide text-[#2C1A0B] leading-snug group-hover:text-[#C59B27] transition-colors">
                      {c.title}
                    </h3>

                    <p className="text-xs text-[#6E5540] leading-relaxed line-clamp-3">{c.short}</p>

                    <div className="pt-2 border-t border-amber-900/10 flex items-center justify-between text-xs text-[#3A230F]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                        {c.schedule.split("·")[0]}
                      </span>
                      <span className="font-extrabold text-[#2C1A0B]">{c.price}</span>
                    </div>
                  </div>
                </div>

                {/* Course Card Action Footer */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/courses?slug=${c.slug}`}
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#C59B27] hover:to-[#B8860B] text-white py-3 rounded-2xl font-extrabold text-xs uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>COURSE DETAILS</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
