"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/#about" },
  { name: "Services", href: "/#services" },
  {
    name: "Our Products",
    href: "#products",
    children: [
      { name: "TJK Molded Products", href: "/products/tjk-molded-products" },
      { name: "Flow Valve", href: "/products/flow-valve" },
      { name: "KERR Pumps", href: "/products/kerr-pumps" },
      { name: "Open & Close Oilfield Equipment's", href: "/products/open-close-equipment" },
      { name: "Affordable Automation Products", href: "/products/affordable-automation" },
      { name: "SILVER FOX Flow Control Tools", href: "/products/silver-fox" },
      { name: "Keystone Oilfield Fabrication", href: "/products/keystone-fabrication" },
    ],
  },
  { name: "Contact Us", href: "/#contact" },
  { name: "Download", href: "/#download" },
  { name: "Company Profile", href: "/#company" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const current = navItems
        .flatMap((item) => (item.children ? item.children : item))
        .find((item) => {
          // Skip product items as they navigate to different pages
          if (item.href.startsWith('/products/')) return false;
          
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

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    // If it's a product link, navigate to the page
    if (href.startsWith('/products/')) {
      router.push(href);
      setIsOpen(false);
      return;
    }

    // If it's a homepage section link and we're NOT on the homepage, navigate there
    if (href.startsWith('/#') && pathname !== '/') {
      router.push(href);
      setIsOpen(false);
      return;
    }
    
    // Otherwise, scroll to section (existing behavior)
    const selector = href.startsWith('/') ? href.slice(1) : href;
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.replace(/^.*#/, ''));
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
        <motion.div
          animate={{
            scale: scrolled ? 0.6 : 1,
            marginTop: scrolled ? "0.5rem" : "3rem",
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
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="relative group">
                <button
                  className={`py-2 flex items-center gap-1 text-white hover:text-yellow-400 ${
                    activeSection === item.href.substring(1) && "text-yellow-400"
                  }`}
                >
                  {item.name} <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute hidden group-hover:block bg-black/90 backdrop-blur-sm mt-2 py-2 rounded shadow-lg z-50">
                  {item.children.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      onClick={(e) => handleNavigation(e, subItem.href)}
                      className="block px-4 py-2 whitespace-nowrap text-white hover:text-yellow-400"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`relative py-2 transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
              </a>
            )
          )}
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
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name}>
                <span className="block font-semibold text-yellow-400 mt-2">{item.name}</span>
                {item.children.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    onClick={(e) => handleNavigation(e, subItem.href)}
                    className="block ml-4 py-1 hover:text-yellow-400"
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`block py-2 ${
                  activeSection === item.href.substring(1)
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
              >
                {item.name}
              </a>
            )
          )}
        </div>
      )}
    </motion.nav>
  );
}