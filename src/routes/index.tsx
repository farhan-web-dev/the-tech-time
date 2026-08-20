import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import logo from "@/assets/logo.png.asset.json";
import heroImg from "@/assets/hero.jpg";
import shopifyImg from "@/assets/course-shopify.jpg";
import amazonImg from "@/assets/course-amazon.jpg";
import marketingImg from "@/assets/course-marketing.jpg";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { brand, courses, reviews, stats } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Time Tech — Shopify, Amazon FBA & Digital Marketing Courses" },
      {
        name: "description",
        content:
          "Live, instructor-led courses in Shopify e-commerce, Amazon FBA and digital marketing. 12 hours, 70% hands-on, Dubai-based. Invest in time, build your future.",
      },
      { property: "og:title", content: "The Time Tech — Premium Online Business Courses" },
      {
        property: "og:description",
        content:
          "Build, launch and grow an online business with live practical training in Shopify, Amazon FBA and digital marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Karla:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Home,
});

const covers: Record<string, string> = {
  shopify: shopifyImg,
  "amazon-fba": amazonImg,
  "digital-marketing": marketingImg,
};

const nav = [
  { label: "Courses", href: "#courses" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Enrol", href: "#enrol" },
];

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? (
          <h2 className="mt-3 max-w-3xl text-3xl leading-tight md:text-5xl">{title}</h2>
        ) : null}
        {eyebrow || title ? <div className="rule-gold mt-8 w-24" /> : null}
        <div className={eyebrow || title ? "mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-1" aria-label={`${count} out of 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-gold" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.8-5 4.7 1.3 6.8L12 17.4 5.9 20.6 7.2 13.8l-5-4.7 6.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

function Home() {
  const [active, setActive] = useState(courses[0]!.slug);
  const course = courses.find((c) => c.slug === active) ?? courses[0]!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="The Time Tech logo" width={44} height={44} className="h-11 w-11 object-contain" />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-lg tracking-wide">{brand.name}</span>
              <span className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
                Academy
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#enrol"
            className="rounded-sm bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Enrol now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-gradient-dark">
        <img
          src={heroImg}
          alt="Laptop showing an e-commerce dashboard on a marble desk"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold-soft">{brand.name}</p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-secondary md:text-6xl">
              <span className="text-gradient-gold">Invest in time.</span>
              <br />
              Build your future.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary/75">
              Live, instructor-led programmes in Shopify e-commerce, Amazon FBA and digital
              marketing. Twelve focused hours, seventy percent hands-on, one real project you keep.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#courses"
                className="rounded-sm border border-gold/70 px-7 py-3 text-xs uppercase tracking-[0.18em] text-gold-soft transition-colors hover:bg-gold/10"
              >
                Explore courses
              </a>
              <span className="text-xs uppercase tracking-[0.18em] text-secondary/55">
                From AED 999 · Online live
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-8 border-t border-secondary/15 pt-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-gold-soft">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-secondary/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <Section id="courses" eyebrow="Programmes" title="Three routes into a profitable online business">
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((c) => (
            <article
              key={c.slug}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-luxe)]"
            >
              <img
                src={covers[c.slug]}
                alt={c.title}
                width={1200}
                height={800}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl leading-snug">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.short}</p>
                <dl className="mt-6 space-y-1 text-xs text-muted-foreground">
                  <div className="flex justify-between border-b border-border pb-1">
                    <dt>Duration</dt>
                    <dd className="text-foreground">{c.duration}</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-1 pt-1">
                    <dt>Schedule</dt>
                    <dd className="text-foreground">4 weeks</dd>
                  </div>
                  <div className="flex justify-between pt-1">
                    <dt>Fee</dt>
                    <dd className="text-foreground">
                      <s className="text-muted-foreground/70">{c.price}</s> {c.promo.split(" ").slice(0, 2).join(" ")}
                    </dd>
                  </div>
                </dl>
                <button
                  onClick={() => {
                    setActive(c.slug);
                    document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-7 rounded-sm border border-primary px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  View curriculum
                </button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Curriculum detail */}
      <Section
        id="curriculum"
        eyebrow="Course detail"
        title="What you learn, module by module"
        className="bg-secondary/40"
      >
        <div className="flex flex-wrap gap-3">
          {courses.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              className={`rounded-sm px-5 py-2.5 text-xs uppercase tracking-[0.16em] transition-colors ${
                c.slug === active
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-primary"
              }`}
            >
              {c.title.replace(" Mastery", "")}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h3 className="text-2xl md:text-3xl">{course.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{course.short}</p>
            <p className="mt-6 leading-relaxed">{course.summary}</p>
            {course.detail.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <h4 className="mt-12 text-xl">Full curriculum</h4>
            <ol className="mt-6 divide-y divide-border border-y border-border">
              {course.curriculum.map((m, i) => (
                <li key={m.module} className="flex gap-5 py-4">
                  <span className="font-display text-lg text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-medium">{m.module}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{m.topics}</span>
                  </span>
                </li>
              ))}
            </ol>

            <h4 className="mt-12 text-xl">Key takeaways</h4>
            <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {course.takeaways.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-8">
            <div className="rounded-md border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <p className="eyebrow">Course details</p>
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
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{k}</dt>
                    <dd className="mt-1">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="rule-gold my-7" />
              <p className="eyebrow">Investment</p>
              <p className="mt-3 font-display text-3xl">{course.promo}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Standard fee {course.price}. Corporate and in-company training quoted separately.
              </p>
              <a
                href="#enrol"
                className="mt-6 block rounded-sm bg-primary px-5 py-3 text-center text-xs uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Reserve a seat
              </a>
            </div>

            <div className="rounded-md border border-border bg-card p-7">
              <p className="eyebrow">Prerequisites</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {course.prerequisites.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <MediaPlaceholder
              label={`${course.title} trailer`}
              hint="45–60 second promotional video — to be developed. Space reserved."
            />
          </aside>
        </div>
      </Section>

      {/* About */}
      <Section id="about" eyebrow="About the company" title="The Time Tech">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="font-display text-2xl leading-snug text-primary">{brand.tagline}</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              The Time Tech is a practical training academy for people who want to build real online
              businesses rather than collect certificates. Our programmes are instructor-led and
              delivered live online, structured so that roughly thirty percent of the time is theory
              and seventy percent is hands-on work.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every participant develops an actual demonstration project during their course — a
              Shopify store, an Amazon listing and shipment plan, or a live advertising funnel. No
              prior technical or coding experience is required, and every session is designed to be
              followed on a normal laptop with an internet connection.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                ["Instructor-led", "Live sessions with direct Q&A, not pre-recorded video."],
                ["Project-based", "You finish with a working store, listing or campaign."],
                ["UAE-focused", "Payments, shipping and taxes taught for the UAE market."],
                ["Small groups", "Limited seats so every question gets answered."],
              ].map(([k, v]) => (
                <div key={k} className="border-l border-gold/60 pl-4">
                  <dt className="font-display text-lg">{k}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-6">
            <MediaPlaceholder
              label="Company intro video"
              hint="Add your brand intro film here — space reserved for upload."
            />
            <div className="grid grid-cols-2 gap-6">
              <MediaPlaceholder label="Classroom photo" aspect="4 / 3" />
              <MediaPlaceholder label="Team photo" aspect="4 / 3" />
            </div>
          </div>
        </div>
      </Section>

      {/* Instructor */}
      <Section eyebrow="Instructor" title="Learn from a practitioner" className="bg-secondary/40">
        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-start">
          <MediaPlaceholder label="Instructor photo" aspect="1 / 1" />
          <div>
            <h3 className="text-2xl">Lead Instructor — The Time Tech</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">
              E-commerce · Amazon FBA · Performance marketing
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Instructor biography, credentials and portfolio links to be added. Space is reserved
              here for a short profile, years of experience, brands worked with, and social or
              LinkedIn links.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Hands-on store and campaign builds",
                "Live Q&A in every session",
                "Practical UAE market experience",
                "Support throughout the programme",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section id="reviews" eyebrow="Reviews" title="What students say">
        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-md border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <Stars count={r.rating} />
              <blockquote className="mt-5 flex-1 font-display text-xl leading-snug">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <span className="block font-medium">{r.name}</span>
                <span className="text-muted-foreground">
                  {r.role} · {r.course}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA form */}
      <Section id="enrol" className="bg-gradient-dark">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="eyebrow text-gold-soft">Enrolment</p>
            <h2 className="mt-3 text-3xl leading-tight text-secondary md:text-5xl">
              Reserve your seat in the next cohort
            </h2>
            <div className="rule-gold mt-8 w-24" />
            <p className="mt-8 max-w-md leading-relaxed text-secondary/70">
              Seats are limited so that every participant gets attention. Send your details and we
              will confirm the schedule, payment options and joining link by email.
            </p>
            <ul className="mt-10 space-y-2 text-sm text-secondary/70">
              <li>{brand.email}</li>
              <li>{brand.phone}</li>
              <li>{brand.location}</li>
            </ul>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-md border border-secondary/15 bg-background/95 p-8 shadow-[var(--shadow-luxe)]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="eyebrow">Full name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </label>
              <label className="block text-sm">
                <span className="eyebrow">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </label>
              <label className="block text-sm">
                <span className="eyebrow">Phone / WhatsApp</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+971"
                  className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </label>
              <label className="block text-sm">
                <span className="eyebrow">Course</span>
                <select
                  name="course"
                  defaultValue={course.title}
                  className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
                >
                  {courses.map((c) => (
                    <option key={c.slug}>{c.title}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-5 block text-sm">
              <span className="eyebrow">Message</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your goals or preferred timings"
                className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </label>
            <button
              type="submit"
              className="mt-7 w-full rounded-sm bg-primary px-6 py-3.5 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request enrolment
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Static form for Phase 1 — submissions are not yet stored.
            </p>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
            <div>
              <p className="font-display text-lg">{brand.name}</p>
              <p className="text-xs text-muted-foreground">{brand.tagline}</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {brand.name}
          </p>
        </div>
      </footer>
    </div>
  );
}
