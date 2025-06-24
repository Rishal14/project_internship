"use client";

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { TYPOGRAPHY } from '@/lib/typography';
import { ArrowRight, Users, MapPin, Trophy, Target, Drill, ChevronRight, Award, Globe, Zap, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Inter, Poppins } from 'next/font/google';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

// Load fonts
const headingFont = Poppins({
  weight: '600', // SemiBold
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const displayFont = Poppins({
  weight: '700', // Bold
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // 3D tilt effect state and refs
  const tiltRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-1, 1], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-1, 1], ["-10deg", "10deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const currentMouseX = event.clientX - rect.left;
    const currentMouseY = event.clientY - rect.top;

    mouseX.set((currentMouseX / width) * 2 - 1);
    mouseY.set((currentMouseY / height) * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  
  useEffect(() => {
    setIsMounted(true);

    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play()
        .catch(error => {
          console.log('Video autoplay was prevented:', error);
          // Many browsers prevent autoplay with sound
          // We already have muted set, but this is a fallback
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
          }
        });
    }

    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Staggered animation for the text content
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const headingVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const textItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Static overlays to prevent white flash */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Video Background with Overlay */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[140%] overflow-hidden"
        style={{ y, opacity }}
      >
        <video
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
         
          {/* Fallback image if video fails to load */}
          <img
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Oil industry operations"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Animated overlay with breathing effect */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(0,0,0,0.7), rgba(255,107,53,0.1))",
              "linear-gradient(45deg, rgba(0,0,0,0.8), rgba(255,107,53,0.2))",
              "linear-gradient(45deg, rgba(0,0,0,0.7), rgba(255,107,53,0.1))"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Animated particles - only render after mount to avoid hydration mismatch */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
      
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          variants={headingVariants} 
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          About Our Company
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ perspective: "1000px" }}>
          <div className="relative">
            <motion.div
              ref={tiltRef}
              style={{
                transformStyle: 'preserve-3d',
                rotateX,
                rotateY,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Video with layered decoration */}
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border border-orange-500/20" style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-3xl z-20" />
                
                {/* Video element */}
                <div className="relative aspect-video overflow-hidden rounded-3xl">
                  <motion.video 
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    style={{ transform: "translateZ(20px) scale(1.1)" }}
                    transition={{ duration: 0.7 }}
                    poster="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    muted
                    loop
                    autoPlay
                  >
                    <source src="/videos/10551547-hd_1080_1920_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </motion.video>
                  
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.p variants={textItemVariants} className={`${TYPOGRAPHY.body} text-gray-300`}>
              We, Gulf Technical Operations LLC, are a leading supplier of equipment and services to the oil and gas industry worldwide, driven by our philosophy of assured quality, quantity at a reasonable price. Established in Texas in 2016, we specialize in supplying products and services to drilling and service companies, ensuring they have access to the highest quality tools and equipment needed for seamless operations.
            </motion.p>
            <motion.p variants={textItemVariants} className={`${TYPOGRAPHY.body} text-gray-300`}>
              Our company is led by seasoned professionals with over 40 years of invaluable experience in the oil and gas sector. Jerry Paul, a key leader in our team, has been instrumental in leading major projects, including the rigging, refurbishment, and commissioning of over 60 land and offshore rigs across the Middle East, Egypt, U.A.E, Oman, Yemen, Saudi Arabia, Pakistan, Iraq, and Kuwait. Drawing upon this wealth of expertise, we pride ourselves on being a reliable and trustworthy partner to the industry.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
