"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Drill } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { CommandDialog, CommandInput, CommandList, CommandGroup, CommandItem } from '@/components/ui/command';

const navItems = [
  { 
    name: 'HOME', 
    href: '#home',
    description: 'Welcome to Gulf Technical Operations LLC'
  },
  { 
    name: 'ABOUT US', 
    href: '#about',
    description: 'Learn about our company history and expertise'
  },
  { 
    name: 'OUR PRODUCTS', 
    href: '#products',
    description: 'Explore our range of high-quality equipment and tools'
  },
  { 
    name: 'SERVICES', 
    href: '#services',
    description: 'Discover our comprehensive oilfield services'
  },
  { 
    name: 'CONTACT US', 
    href: '#contact',
    description: 'Get in touch with our expert team'
  },
  { 
    name: 'DOWNLOAD', 
    href: '#download',
    description: 'Access our product catalogs and documentation'
  },
  { 
    name: 'COMPANY PROFILE', 
    href: '#profile',
    description: 'View our detailed company information'
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();

  useEffect(() => {
    // Keyboard shortcut for search (Cmd+K / Ctrl+K)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    
    // Handle scroll to update active section and header style
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection]);

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.substring(1));
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-20 space-x-8">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center transform rotate-45 animate-pulse-glow">
                <Drill className="w-6 h-6 text-white transform -rotate-45" />
              </div>
            </div>
            <div className="text-white">
              <div className="text-lg font-bold tracking-wider">GTO</div>
              <div className="text-xs text-orange-400 font-medium">GULF TECHNICAL OPERATIONS</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <HoverCard key={item.name} openDelay={50} closeDelay={50}>
                <HoverCardTrigger asChild>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-md ${
                      activeSection === item.href.substring(1) ? 'text-orange-400' : 'text-white hover:text-orange-400'
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="absolute inset-x-1 -bottom-1 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600"
                        layoutId="active-nav-link"
                      />
                    )}
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 bg-slate-800/80 backdrop-blur-md border-slate-700 text-white shadow-lg">
                  <div className="p-2">
                    <h4 className="font-bold text-orange-400 mb-1">{item.name}</h4>
                    <p className="text-sm text-slate-300">{item.description}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.span>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`block py-2 px-4 rounded-md transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-orange-400 bg-slate-800/50'
                      : 'text-white hover:text-orange-400 hover:bg-slate-800/30'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              <Button
                variant="outline"
                className="w-full mt-4 text-white border-slate-700 hover:bg-slate-800/50 hover:text-orange-400"
                onClick={() => {
                  setSearchOpen(true);
                  setIsOpen(false);
                }}
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Dialog */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search sections..." />
        <CommandList>
          <CommandGroup heading="Navigation">
            {navItems.map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => {
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(item.href.substring(1));
                    setSearchOpen(false);
                    setIsOpen(false);
                  }
                }}
                className="cursor-pointer"
              >
                <span>{item.name}</span>
                <span className="ml-2 text-xs text-gray-400">{item.description}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </motion.nav>
  );
}
