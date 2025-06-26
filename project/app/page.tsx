"use client";

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProductsSection } from '@/components/products-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation/>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <Footer />
    </main>
  );
}