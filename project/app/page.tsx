"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";
import { SplashScreen } from "@/components/SplashScreen";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 🔧 Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/oil.png')`, // ⛽ Replace with your image path
          }}
        />
        {/* Optional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 🧱 Main Content */}
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      {!showSplash && (
        <div className="relative z-10">
          <Navigation />
          <HeroSection splashDone />
          <AboutSection />
          <ProductsSection />
          <ServicesSection />
          <Footer />
        </div>
      )}
    </main>
  );
}
