"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  X,
  Star,
  CheckCircle2,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  Video,
  ShoppingBag,
  BarChart3,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Menu,
  Clock,
  Globe,
  Mic,
  Camera,
  PhoneOff,
  Send,
  SlidersHorizontal,
  Check,
} from "lucide-react";

import shopifyImg from "@/assets/course-shopify.jpg";
import amazonImg from "@/assets/course-amazon.jpg";
import marketingImg from "@/assets/course-marketing.jpg";
import { brand, courses, reviews, stats } from "@/data/site";

const courseCovers: Record<string, typeof shopifyImg> = {
  shopify: shopifyImg,
  "amazon-fba": amazonImg,
  "digital-marketing": marketingImg,
};

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "shopify",
    notes: "",
  });

  const activeReview = reviews[activeTestimonialIdx] ?? reviews[0]!;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C1A0B] font-sans antialiased selection:bg-[#C59B27] selection:text-white">
      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#1F1208] rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/30">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full bg-black">
              <video src="/intro.mp4" controls autoPlay className="w-full h-full object-contain" />
            </div>
            <div className="p-6 bg-[#2C1A0B] text-white flex items-center justify-between border-t border-[#D4AF37]/20">
              <div>
                <h3 className="text-lg font-bold text-[#F3E5AB]">
                  The Time Tech — Academy Overview
                </h3>
                <p className="text-xs text-amber-200/70">Live instructor-led training in Dubai</p>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-5 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#C59B27] hover:to-[#B8860B] text-white text-xs font-bold rounded-full transition-all shadow"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 shadow-sm transition-all">
        <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="The Time Tech Logo"
                className="w-full h-full object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-2xl md:text-3xl uppercase tracking-wider text-[#2C1A0B]">
                {brand.name}
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[#C59B27] font-extrabold mt-1">
                ACADEMY & AI STORE BUILDER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider text-[#5C4532]">
            <Link href="/" className="text-[#C59B27]">
              HOME
            </Link>
            <Link href="/courses" className="hover:text-[#C59B27] transition-colors">
              COURSES
            </Link>
            <a href="#about" className="hover:text-[#C59B27] transition-colors">
              ABOUT US
            </a>
            <a href="#features" className="hover:text-[#C59B27] transition-colors">
              FEATURES & AI
            </a>
            <a href="#reviews" className="hover:text-[#C59B27] transition-colors">
              REVIEWS
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${brand.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-xs font-bold text-[#2C1A0B] hover:text-[#C59B27] transition-colors px-2 py-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              {brand.phone}
            </a>
            <a
              href="#enrol"
              className="bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] hover:opacity-95 text-white text-xs font-extrabold uppercase tracking-widest px-6 py-3 rounded-full shadow-md shadow-amber-900/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              ENROL NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#2C1A0B] hover:text-[#C59B27]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-amber-900/10 px-6 py-4 space-y-3 animate-in slide-in-from-top-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-[#C59B27] font-extrabold uppercase tracking-wider"
            >
              HOME
            </Link>
            <Link
              href="/courses"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-[#5C4532] font-bold uppercase tracking-wider hover:text-[#C59B27]"
            >
              COURSES
            </Link>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-[#5C4532] font-bold uppercase tracking-wider hover:text-[#C59B27]"
            >
              ABOUT US
            </a>
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-[#5C4532] font-bold uppercase tracking-wider hover:text-[#C59B27]"
            >
              FEATURES & AI
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-[#5C4532] font-bold uppercase tracking-wider hover:text-[#C59B27]"
            >
              REVIEWS
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#enrol"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-white py-2.5 rounded-full font-extrabold uppercase tracking-widest text-xs shadow"
              >
                ENROL NOW
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#2C1A0B] via-[#3A230F] to-[#4A2E00] rounded-b-[40px] md:rounded-b-[70px] lg:rounded-b-[100px] pt-12 pb-24 md:pb-32 text-white overflow-hidden">
        {/* Background Gold Ambient Glows */}
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#C59B27]/15 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C59B27]/20 border border-[#D4AF37]/40 text-xs font-extrabold uppercase tracking-widest text-[#F3E5AB]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>BUILD STORE WITH AI & LIVE ACADEMY</span>
              </div> */}

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
                  onClick={() => setIsVideoModalOpen(true)}
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

      {/* "OUR SUCCESS" Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-[#2C1A0B]">
            OUR SUCCESS & IMPACT
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#6E5540] max-w-2xl mx-auto">
            WE ARE DEDICATED TO EMPOWERING ENTREPRENEURS ACROSS THE UAE & GLOBALLY WITH AI STORE
            BUILDING & PRACTICAL SKILLS.
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
            <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#C59B27]/20 transition-transform hover:-translate-y-1">
              <span className="text-4xl lg:text-5xl font-black text-[#C59B27] tracking-tight">
                15K+
              </span>
              <p className="mt-2 text-xs md:text-sm font-bold text-[#3A230F] uppercase tracking-wider">
                Enrolled Students
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#B8860B]/20 transition-transform hover:-translate-y-1">
              <span className="text-4xl lg:text-5xl font-black text-[#B8860B] tracking-tight">
                75%
              </span>
              <p className="mt-2 text-xs md:text-sm font-bold text-[#3A230F] uppercase tracking-wider">
                Success Rate
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#D4AF37]/20 transition-transform hover:-translate-y-1">
              <span className="text-4xl lg:text-5xl font-black text-[#D4AF37] tracking-tight">
                35+
              </span>
              <p className="mt-2 text-xs md:text-sm font-bold text-[#3A230F] uppercase tracking-wider">
                Live AI Modules
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#4A2E00]/20 transition-transform hover:-translate-y-1">
              <span className="text-4xl lg:text-5xl font-black text-[#4A2E00] tracking-tight">
                26
              </span>
              <p className="mt-2 text-xs md:text-sm font-bold text-[#3A230F] uppercase tracking-wider">
                Chief Experts
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#8B6B23]/20 transition-transform hover:-translate-y-1 col-span-2 md:col-span-1">
              <span className="text-4xl lg:text-5xl font-black text-[#8B6B23] tracking-tight">
                16
              </span>
              <p className="mt-2 text-xs md:text-sm font-bold text-[#3A230F] uppercase tracking-wider">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "ALL-IN-ONE AI LEARNING EXPERIENCE" Section */}
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

      {/* "What is The Time Tech?" + Video Highlight Section */}
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
                    onClick={() => setIsVideoModalOpen(true)}
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

      {/* Feature Showcase 1: "Everything you can do in a physical classroom..." */}
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

      {/* "OUR FEATURES & AI TOOLS" Section */}
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
              Designed specifically for entrepreneurs, sellers, and professionals looking to
              leverage AI to build online stores and scale faster.
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
                  Stop spending weeks building website layouts manually. Learn how to prompt AI
                  store builders, create high-converting copywriting with AI, produce
                  ultra-realistic product imagery, and deploy 24/7 AI chat assistants.
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
                real time, request live screen-sharing store audits, and learn in an engaging
                virtual classroom.
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
                Build real business assets during the course. From Shopify store building with AI
                and payment gateway setup to Amazon FBA shipping plans and Meta Pixel integration.
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
                duration and get feedback on your assignments, store build, and marketing
                strategies.
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

      {/* "EXPLORE OUR COURSES" Section */}
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

                      <p className="text-xs text-[#6E5540] leading-relaxed line-clamp-3">
                        {c.short}
                      </p>

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

      {/* Testimonials Section ("WHAT OUR STUDENTS SAY") */}
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
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-900/10 relative">
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

      {/* "Request Enrolment" Form Section */}
      <section className="py-20 bg-[#FAF8F5]" id="enrol">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-900/10 relative">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-extrabold text-[#C59B27] uppercase tracking-widest">
                TAKE THE NEXT STEP
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-[#2C1A0B] mt-2">
                REQUEST <span className="text-[#C59B27]">ENROLMENT</span>
              </h2>
              <p className="mt-2 text-sm text-[#6E5540]">
                Reserve your seat for the upcoming cohort. Seats are limited to ensure small group
                interaction.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-[#FAF6EE] border border-[#C59B27]/30 rounded-2xl text-center space-y-3 animate-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-[#C59B27] text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-[#2C1A0B]">
                  ENROLMENT REQUEST RECEIVED!
                </h3>
                <p className="text-xs md:text-sm text-[#6E5540] max-w-md mx-auto">
                  Thank you for submitting your details. Our admissions mentor will contact you
                  shortly to confirm your seat and course schedule.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#C59B27] text-white text-xs font-extrabold uppercase tracking-widest rounded-full"
                >
                  SUBMIT ANOTHER REQUEST
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#2C1A0B] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayesha Rahman"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-amber-50/50 border border-amber-900/15 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2C1A0B] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-amber-50/50 border border-amber-900/15 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#2C1A0B] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={brand.phone}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-amber-50/50 border border-amber-900/15 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2C1A0B] uppercase tracking-wider mb-2">
                      Select Course *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-amber-50/50 border border-amber-900/15 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition-all font-semibold"
                    >
                      {courses.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.title} — ({c.promo})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C1A0B] uppercase tracking-wider mb-2">
                    Questions / Business Background (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your product idea or background..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-amber-50/50 border border-amber-900/15 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition-all"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] hover:opacity-95 text-white text-xs font-extrabold uppercase tracking-widest rounded-full shadow-xl shadow-amber-950/20 transition-all hover:scale-105"
                  >
                    SUBMIT ENROLMENT REQUEST
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F1208] text-white pt-16 pb-12 border-t border-[#D4AF37]/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
            {/* Footer Logo & Brand (Enlarged Logo) */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt="The Time Tech Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-2xl md:text-3xl uppercase tracking-wider block leading-none text-white">
                  {brand.name}
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[#D4AF37] font-extrabold mt-1 block">
                  {brand.tagline.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-wider text-amber-100/80 font-bold">
              <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                HOME
              </Link>
              <Link href="/courses" className="hover:text-[#D4AF37] transition-colors">
                COURSES
              </Link>
              <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                ABOUT US
              </a>
              <a href="#features" className="hover:text-[#D4AF37] transition-colors">
                FEATURES & AI
              </a>
              <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">
                REVIEWS
              </a>
              <a href="#enrol" className="hover:text-[#D4AF37] transition-colors">
                ENROL NOW
              </a>
            </nav>
          </div>

          {/* Copyright & Info */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-amber-200/60 font-medium uppercase tracking-wider">
            <p>
              © {new Date().getFullYear()} {brand.name.toUpperCase()}. ALL RIGHTS RESERVED.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                {brand.location.toUpperCase()}
              </span>
              <span>•</span>
              <a
                href={`tel:${brand.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors text-amber-100"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                {brand.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${brand.email}`} className="hover:text-white transition-colors">
                {brand.email}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
