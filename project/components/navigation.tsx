"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              className="flex items-center"
              onClick={(e) => scrollToSection(e, '#home')}
            >
              <svg
                className="h-8 w-8 text-orange-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">Gulf Technical</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <HoverCard key={item.name} openDelay={0} closeDelay={0}>
                <HoverCardTrigger asChild>
                  <a
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'text-orange-400 bg-slate-800/50'
                        : 'text-white hover:text-orange-400 hover:bg-slate-800/30'
                    }`}
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.name}
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 p-3 bg-slate-800 border-slate-700">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-orange-400">{item.name}</h4>
                    <p className="text-xs text-gray-300">{item.description}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Desktop Search Button */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(true)}
              className="text-white hover:text-orange-400"
            >
              <Search className="h-4 w-4 mr-2" />
              <span>Search</span>
              <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-slate-900 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
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
