"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Products", href: "#products" },
  { name: "Our Services", href: "#services" },
  { name: "Our Gallery", href: "#gallery" },
  { name: "Certification", href: "#certification" },
  { name: "Downloads", href: "#downloads" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact Us", href: "#contact" },
  { name: "Calculator", href: "#calculator" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const current = navItems.find((item) => {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current.href.substring(1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.substring(1));
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 w-full z-50 bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="MSG Logo" width={40} height={40} className="h-10" />
            <span className="text-2xl font-bold tracking-wide">MSG</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex space-x-6 text-sm font-medium tracking-wide">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative py-2 transition-all ${
                  activeSection === item.href.substring(1)
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "hover:text-yellow-400"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm px-6 py-4 space-y-2 text-white">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`block py-2 ${
                activeSection === item.href.substring(1)
                  ? "text-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
