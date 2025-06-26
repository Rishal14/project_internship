"use client";

import React from "react";

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/17516669-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl w-full px-8 sm:px-12 lg:px-20">
        <div className="w-full max-w-xl mt-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Material
            <br />
            <span>Solutions Grid</span>
          </h1>
          <button
            onClick={scrollToAbout}
            className="bg-yellow-400 text-black px-6 py-3 text-base font-semibold shadow-md hover:bg-yellow-300 transition rounded-none"
          >
            Who We Are
          </button>
        </div>
      </div>
    </section>
  );
}
