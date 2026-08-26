"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import shopifyImg from "@/assets/course-shopify.jpg";
import amazonImg from "@/assets/course-amazon.jpg";
import marketingImg from "@/assets/course-marketing.jpg";
import { brand, courses } from "@/data/site";

const covers: Record<string, typeof shopifyImg> = {
  shopify: shopifyImg,
  "amazon-fba": amazonImg,
  "digital-marketing": marketingImg,
};

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get("slug") || courses[0]!.slug;
  const [activeSlug, setActiveSlug] = useState(initialSlug);

  const course = courses.find((c) => c.slug === activeSlug) ?? courses[0]!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link href="/" className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="The Time Tech logo"
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
            />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-black text-2xl uppercase tracking-wider text-foreground">
                {brand.name}
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-primary font-extrabold mt-1">
                ACADEMY & AI STORE BUILDER
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex font-bold text-xs uppercase tracking-wider">
            <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
              HOME
            </Link>
            <Link href="/courses" className="text-primary">
              ALL COURSES
            </Link>
            <a
              href="/#about"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              ABOUT
            </a>
            <a
              href="/#reviews"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              REVIEWS
            </a>
          </nav>
          <a
            href="#enrol"
            className="rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 shadow-md"
          >
            ENROL NOW
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-dark py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-gold-soft uppercase tracking-widest font-extrabold">
            PROGRAMMES & AI CURRICULUMS
          </p>
          <h1 className="mt-4 text-3xl font-black uppercase tracking-wider text-secondary md:text-5xl">
            DETAILED COURSE OVERVIEW & SYLLABUS
          </h1>
          <p className="mt-4 max-w-2xl text-secondary/75 leading-relaxed text-sm md:text-base font-medium">
            Select a course to inspect its comprehensive module breakdown, AI store building tools,
            key takeaways, schedules, and reserved course media previews.
          </p>

          {/* Course Selector Tabs */}
          <div className="mt-8 flex flex-wrap gap-3">
            {courses.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveSlug(c.slug)}
                className={`rounded-full px-6 py-3 text-xs uppercase tracking-[0.16em] transition-all font-extrabold ${
                  c.slug === activeSlug
                    ? "bg-gold text-background shadow-md"
                    : "border border-secondary/20 text-secondary/80 hover:bg-secondary/10"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Course Content */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src={covers[course.slug]!}
                alt={course.title}
                className="h-64 w-full object-cover md:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="eyebrow text-gold-soft font-extrabold uppercase tracking-widest">
                  {course.duration}
                </span>
                <h2 className="text-2xl md:text-3xl text-white font-black uppercase tracking-wide mt-1">
                  {course.title}
                </h2>
              </div>
            </div>

            <p className="mt-8 text-lg font-medium leading-relaxed">{course.summary}</p>
            {course.detail.map((p, i) => (
              <p key={i} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            {/* Full Curriculum Breakdown */}
            <h3 className="mt-12 text-2xl font-black uppercase tracking-wider text-foreground">
              FULL MODULE CURRICULUM
            </h3>
            <div className="rule-gold mt-3 w-16" />
            <ol className="mt-6 divide-y divide-border border-y border-border">
              {course.curriculum.map((m, i) => (
                <li key={m.module} className="flex gap-5 py-4">
                  <span className="font-display text-xl text-gold font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="block font-bold text-base uppercase tracking-wide">
                      {m.module}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{m.topics}</span>
                  </div>
                </li>
              ))}
            </ol>

            {/* Key Takeaways */}
            <h3 className="mt-12 text-2xl font-black uppercase tracking-wider text-foreground">
              KEY TAKEAWAYS & AI SKILLS
            </h3>
            <div className="rule-gold mt-3 w-16" />
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {course.takeaways.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted-foreground font-medium">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>

            {/* Dedicated Media Section (Videos & Images) */}
            <h3 className="mt-14 text-2xl font-black uppercase tracking-wider text-foreground">
              COURSE MEDIA & PREVIEWS
            </h3>
            <div className="rule-gold mt-3 w-16" />
            <p className="mt-2 text-sm text-muted-foreground">
              Reserved space for video overview, live classroom recordings, and student AI store
              project screenshots.
            </p>

            <div className="mt-6 space-y-6">
              <div className="overflow-hidden rounded-2xl border border-gold/50 bg-black shadow-lg">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                >
                  <source src="/intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Course Images & Screenshots */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                  <Image
                    src="/images/store_preview.jpg"
                    alt="Student Store Output Preview"
                    width={600}
                    height={450}
                    className="h-44 w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <p className="p-2.5 text-center text-xs font-bold uppercase tracking-wider bg-card">
                    AI E-COMMERCE STORE OUTPUT
                  </p>
                </div>
                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                  <Image
                    src="/images/classroom.jpg"
                    alt="Live Classroom Workshop"
                    width={600}
                    height={450}
                    className="h-44 w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <p className="p-2.5 text-center text-xs font-bold uppercase tracking-wider bg-card">
                    LIVE WORKSHOP SESSION
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Details */}
          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <p className="eyebrow uppercase tracking-widest font-extrabold">
                COURSE SPECIFICATIONS
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["Duration", course.duration],
                  ["Recommended schedule", course.schedule],
                  ["Format", course.format],
                  ["Delivery", "Online live"],
                  ["Language", course.language],
                  ["Training method", course.method],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground font-bold">
                      {k}
                    </dt>
                    <dd className="mt-1 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="rule-gold my-7" />
              <p className="eyebrow uppercase tracking-widest font-extrabold">INVESTMENT FEE</p>
              <p className="mt-3 font-black text-4xl text-primary">{course.promo}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Standard fee {course.price}. Corporate discounts available.
              </p>
              <a
                href="#enrol"
                className="mt-6 block rounded-full bg-primary px-5 py-3.5 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 shadow-md"
              >
                RESERVE YOUR SEAT
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7">
              <p className="eyebrow uppercase tracking-widest font-extrabold">PREREQUISITES</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground font-medium">
                {course.prerequisites.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Enrolment Form */}
      <section id="enrol" className="bg-gradient-dark py-20 px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-secondary/15 bg-background/95 p-8 shadow-[var(--shadow-luxe)]">
          <p className="eyebrow text-gold-soft uppercase tracking-widest font-extrabold">
            ENROLMENT
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-wider text-foreground">
            ENROL IN {course.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Complete the form below and our team will contact you with batch timing and payment
            details.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-bold uppercase tracking-wider">
                <span className="eyebrow">FULL NAME</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </label>
              <label className="block text-sm font-bold uppercase tracking-wider">
                <span className="eyebrow">EMAIL ADDRESS</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </label>
              <label className="block text-sm font-bold uppercase tracking-wider">
                <span className="eyebrow">PHONE / WHATSAPP</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder={brand.phone}
                  className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </label>
              <label className="block text-sm font-bold uppercase tracking-wider">
                <span className="eyebrow">SELECTED COURSE</span>
                <select
                  name="course"
                  value={course.title}
                  onChange={(e) => {
                    const selected = courses.find((c) => c.title === e.target.value);
                    if (selected) setActiveSlug(selected.slug);
                  }}
                  className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold font-semibold"
                >
                  {courses.map((c) => (
                    <option key={c.slug}>{c.title}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-5 block text-sm font-bold uppercase tracking-wider">
              <span className="eyebrow">MESSAGE / QUESTIONS</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your goals or preferred timings"
                className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </label>
            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-primary px-6 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 shadow-lg"
            >
              SUBMIT ENROLMENT REQUEST
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-14 bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="The Time Tech logo"
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
            />
            <div>
              <p className="font-black text-2xl uppercase tracking-wider text-foreground">
                {brand.name}
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                {brand.tagline}
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-wider font-bold text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              HOME
            </Link>
            <Link href="/courses" className="hover:text-primary">
              COURSES
            </Link>
            <a href="/#about" className="hover:text-primary">
              ABOUT
            </a>
            <a href="/#reviews" className="hover:text-primary">
              REVIEWS
            </a>
          </nav>
          <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} {brand.name.toUpperCase()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading course details...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
