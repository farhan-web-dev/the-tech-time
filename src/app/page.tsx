"use client";

import { useState } from "react";
import VideoModal from "@/components/sections/VideoModal";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import SuccessImpactSection from "@/components/sections/SuccessImpactSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatIsTimeTechSection from "@/components/sections/WhatIsTimeTechSection";
import ClassroomSection from "@/components/sections/ClassroomSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CoursesSection from "@/components/sections/CoursesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import EnrolmentSection from "@/components/sections/EnrolmentSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C1A0B] font-sans antialiased selection:bg-[#C59B27] selection:text-white">
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <Header />
      <HeroSection onWatchVideo={() => setIsVideoModalOpen(true)} />
      <SuccessImpactSection />
      <AboutSection />
      <WhatIsTimeTechSection onOpenVideoModal={() => setIsVideoModalOpen(true)} />
      <ClassroomSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <EnrolmentSection />
      <Footer />
    </div>
  );
}
