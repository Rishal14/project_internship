"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Products", href: "#products" },



  
  { name: "Contact Us", href: "#contact" },
  { name: "Download", href: "#download" },
  { name: "Company Profile", href: "#company" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo with spacing and scale */}
        <motion.div
          animate={{
            scale: scrolled ? 0.6 : 1,
            marginTop: scrolled ? "0.5rem" : "3rem", // 0.5rem = mt-2, 3rem = mt-12
          }}
          transition={{ duration: 0.3 }}
          className="origin-top-left"
        >
          <Image
            src="/Bitmap.png"
            alt="Company Logo"
            width={120}
            height={120}
            className="object-contain h-auto"
            priority
          />
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium tracking-wide">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative py-2 transition-all duration-300 ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 rounded-md" />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm px-6 py-4 space-y-2 text-white">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block py-2 ${
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </motion.nav>
  );
}
