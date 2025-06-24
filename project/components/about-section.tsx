"use client";

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, MapPin, Trophy, Target, Drill, ChevronRight, Award, Globe, Zap, Play, Info } from 'lucide-react';
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

const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  
  const toggleVideo = () => {
    setIsPlaying((prev) => !prev);
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  
  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Video Background with Overlay */}
      <motion.div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ y, opacity }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/videos/about-bg.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Oil industry operations"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        
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
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl mb-8 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className={`${headingFont.className} text-white text-3xl font-bold relative z-10`}>GTO</div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ x: '-100%', y: '-100%' }}
              whileHover={{ x: '100%', y: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6 border border-orange-500/20"
            >
              WHO WE ARE
            </motion.span>
            
            <motion.h2 
              className={`${headingFont.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                Leading the Future of 
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                Energy Innovation
              </motion.span>
            </motion.h2>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              viewport={{ once: true }}
              className="h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Video with layered decoration */}
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:shadow-orange-500/20 group-hover:-translate-y-2 border border-orange-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-3xl z-20" />
                
                {/* Video element */}
                <div className="relative aspect-video overflow-hidden rounded-3xl">
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                    poster="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    muted
                    loop
                  >
                    <source src="/videos/company-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play button overlay */}
                  <motion.button
                    onClick={toggleVideo}
                    className="absolute inset-0 flex items-center justify-center z-30 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className={`w-24 h-24 rounded-full flex items-center justify-center ${isPlaying ? 'bg-red-600' : 'bg-gradient-to-r from-orange-500 to-red-600'} text-white shadow-lg`}
                      whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255,107,53,0.4)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      {isPlaying ? (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-8 h-8 bg-white rounded-sm"
                        />
                      ) : (
                        <Play className="w-10 h-10" fill="white" />
                      )}
                    </motion.div>
                  </motion.button>
                </div>
              </div>
              
              {/* Floating elements with improved animations */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex flex-col items-center justify-center shadow-2xl z-20 border-2 border-orange-300/30"
              >
                <Trophy className="w-10 h-10 text-white mb-1" />
                <span className="text-xs font-bold text-white tracking-wider">AWARD 2023</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl z-20 border-2 border-blue-300/30"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">40+</div>
                  <div className="text-xs font-medium text-blue-100">YEARS</div>
                </div>
              </motion.div>

              {/* Animated decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-32 opacity-20"
              >
                <Globe className="w-full h-full text-orange-400" />
              </motion.div>
            </motion.div>
            
            {/* Stats grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mt-16 grid grid-cols-3 gap-4"
            >
              {[
                { value: '40+', label: 'Years Experience', icon: Award },
                { value: '500+', label: 'Projects', icon: Zap },
                { value: '50+', label: 'Countries', icon: Globe }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center group hover:bg-white/15 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-300 uppercase tracking-wider mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-10">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-red-600 rounded-full" />
                <h3 className={`${headingFont.className} text-3xl md:text-4xl font-bold text-white mb-6`}>
                  Pioneering Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500">Energy Solutions</span>
                </h3>
              </motion.div>
              
              <motion.p 
                className={`${bodyFont.className} text-lg text-gray-300 leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                At <span className="font-semibold text-orange-400">Gulf Technical Operations LLC</span>, we stand at the 
                forefront of the oil and gas industry, delivering unparalleled equipment and services with an unwavering 
                commitment to quality, innovation, and operational excellence. Since our establishment in 2016, we've been 
                the trusted partner of choice for leading drilling and service companies worldwide.
              </motion.p>
              
              <motion.p 
                className={`${bodyFont.className} text-lg text-gray-300 leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                Our philosophy is simple: provide <span className="font-semibold text-orange-300">assured quality</span> and 
                <span className="font-semibold text-orange-300"> exceptional value</span> in every solution we deliver. 
                With a global footprint spanning the Middle East, North Africa, and Southeast Asia, we combine 
                four decades of industry expertise with cutting-edge technology to drive operational success for our clients.
              </motion.p>

              <motion.div 
                className="mt-10 space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: <Users className="h-6 w-6 text-orange-500" />,
                      title: "Expert Team",
                      description: "Our seasoned professionals bring decades of combined experience and technical expertise to every project.",
                      bg: "bg-orange-50"
                    },
                    {
                      icon: <Globe className="h-6 w-6 text-blue-500" />,
                      title: "Global Reach",
                      description: "With operations across three continents, we deliver local expertise with a global perspective.",
                      bg: "bg-blue-50"
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-green-500" />,
                      title: "Innovation",
                      description: "We leverage cutting-edge technology to provide efficient and sustainable energy solutions.",
                      bg: "bg-green-50"
                    },
                    {
                      icon: <Award className="h-6 w-6 text-purple-500" />,
                      title: "Quality Assurance",
                      description: "Rigorous quality control measures ensure the highest standards in all our products and services.",
                      bg: "bg-purple-50"
                    }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className={`p-6 rounded-2xl border border-gray-100 bg-white hover:border-orange-100 transition-all duration-300`}
                    >
                      <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}>
                        {feature.icon}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-slate-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex justify-center mt-10"
              >
                <Link href="/about" className="group relative inline-flex items-center px-8 py-4 text-base font-medium rounded-md text-white overflow-hidden transition-all duration-300">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-70 group-hover:opacity-100 transition-opacity"></span>
                  <span className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <Info className="mr-2 h-5 w-5" />
                    Learn More About Us
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              </motion.div>
            </div>

            {/* Enhanced feature highlights */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 industrial-border"
              >
                <Users className="w-8 h-8 text-orange-500 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">Expert Team</h4>
                <p className="text-sm text-slate-600">Seasoned professionals with decades of experience</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 industrial-border"
              >
                <MapPin className="w-8 h-8 text-orange-500 mb-3" />
                <h4 className="font-semibold text-slate-900 mb-2">Global Reach</h4>
                <p className="text-sm text-slate-600">Serving Middle East, North Africa, and Southeast Asia</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-orange-500/25 group text-lg"
              >
                Read More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}