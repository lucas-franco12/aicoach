import React from "react";
import { HeroSection } from "./_components/HeroSection";
import { FeaturedCourses } from "./_components/FeaturedCourses";
import { HowItWorks } from "./_components/HowItWorks";
import { AIFeatures } from "./_components/AIFeatures";
import { Testimonials } from "./_components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <HowItWorks />
      <AIFeatures />
      <Testimonials />
    </>
  );
}
