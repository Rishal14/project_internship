"use client";
import { Drill, Phone, MapPin, Mail, Linkedin, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/animated-section';
import Image from "next/image";

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Rig Services', href: '#' },
  { name: 'Frac Services', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const productLinks = [
  { name: 'TJK Molded Products', href: '/products/tjk-molded-products' },
  { name: 'Flow Valve', href: '/products/flow-valve"' },
  { name: 'Kerr Pumps', href: '/products/kerr-pumps' },
  { name: "Open & Close Oilfield equipment's", href: '/products/open-close-equipment' },
];

export function Footer() {
  const linkHover = {
    rest: { width: 0 },
    hover: { width: '100%', transition: { duration: 0.3 } }
  };

  const iconHover = {
    hover: {
      scale: 1.2,
      color: '#f97316', // orange-500
    }
  };

  return (
    <footer className="relative bg-footer-bg-oil bg-cover bg-center text-white/80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900/90 to-black animate-gradient-xy" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          <AnimatedSection delay={0.1} className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/Bitmap.png" alt="MSG Logo" width={60} height={60} className="object-contain" />
              <div>
                <div className="text-xl font-bold tracking-wider text-white">GTO</div>
                <div className="text-xs text-yellow-400 font-medium tracking-wide">GULF TECHNICAL OPERATIONS</div>
              </div>
            </div>
            <p className="text-sm">
              Top-tier oilfield equipment and services with unmatched reliability and innovation.
            </p>
          </AnimatedSection>

          {/* Column 2: Quick Links */}
          <AnimatedSection delay={0.2} className="space-y-4 md:pl-8">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} passHref>
                    <motion.div className="relative inline-block cursor-pointer group" whileHover="hover" initial="rest" animate="rest">
                      <span className="group-hover:text-yellow-400 transition-colors">{link.name}</span>
                      <motion.div className="absolute bottom-[-2px] left-0 h-0.5 bg-yellow-500" variants={linkHover} />
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Column 3: Our Products */}
          <AnimatedSection delay={0.3} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Products</h3>
            <ul className="space-y-2">
              {productLinks.map(link => (
                <li key={link.name}>
                   <Link href={link.href} passHref>
                    <motion.div className="relative inline-block cursor-pointer group" whileHover="hover" initial="rest" animate="rest">
                      <span className="group-hover:text-yellow-400 transition-colors">{link.name}</span>
                      <motion.div className="absolute bottom-[-2px] left-0 h-0.5 bg-yellow-500" variants={linkHover} />
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>
          
          {/* Column 4: Contact */}
          <AnimatedSection delay={0.4} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3"><Phone size={16} className="text-yellow-400" /><span>+1 972 214 7001</span></li>
              <li className="flex items-center space-x-3"><Mail size={16} className="text-yellow-400" />
                <a href="mailto:sales@gtexas.com" className="hover:text-yellow-400 transition-colors">sales@gtexas.com</a>
              </li>
              <li className="flex items-start space-x-3"><MapPin size={16} className="text-yellow-400 mt-1 flex-shrink-0" /><span>Rockwall, Texas, USA</span></li>
            </ul>
            <div className="flex space-x-4 pt-2">
              <motion.a href="#" whileHover="hover" variants={iconHover}>
                <Linkedin size={20} className="transition-colors" />
              </motion.a>
            </div>
          </AnimatedSection>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 mt-8">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
          <p className="text-sm text-gray-400 text-center">&copy; {new Date().getFullYear()} Gulf technical operations. All rights reserved.</p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute right-4 sm:right-6 lg:right-8 w-10 h-10 bg-yellow-500/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300"
            aria-label="Back to top"
            whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(249, 115, 22, 0.5)' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
} 