"use client";

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Users, MapPin, Trophy, Target, Drill, ChevronRight, Award, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { useState, useEffect } from 'react';
import { Poppins, Inter } from 'next/font/google';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-br from-orange-50 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70" />
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-tl from-blue-50 to-transparent rounded-full translate-x-1/2 translate-y-1/2 opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl mb-8 shadow-2xl relative overflow-hidden group"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium mb-6">WHO WE ARE</span>
            <h2 className={`${headingFont.className} text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight`}>
              Leading the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Energy Innovation</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
          </motion.div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.2} className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-100 to-transparent rounded-full opacity-50 blur-3xl -z-10" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-50 blur-3xl -z-10" />
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Main image with layered decoration */}
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 rounded-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Industrial equipment" 
                  className="w-full h-auto rounded-3xl transform transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* Floating elements with improved animations */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex flex-col items-center justify-center shadow-2xl z-20 border-4 border-white"
              >
                <Trophy className="w-8 h-8 text-white mb-1" />
                <span className="text-xs font-bold text-white tracking-wider">AWARD 2023</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl z-20 border-4 border-white"
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
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 opacity-20"
              >
                <Globe className="w-full h-full text-blue-400" />
              </motion.div>
            </motion.div>
            
            {/* Stats grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mt-16 grid grid-cols-3 gap-4"
            >
              {[
                { value: '40+', label: 'Years Experience', icon: Award },
                { value: '500+', label: 'Projects', icon: Zap },
                { value: '50+', label: 'Countries', icon: Globe }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-slate-800 group-hover:text-orange-500 transition-colors duration-300">{stat.value}</div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="space-y-10">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-red-600 rounded-full" />
                <h3 className={`${headingFont.className} text-3xl md:text-4xl font-bold text-slate-900 mb-6`}>
                  Pioneering Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Energy Solutions</span>
                </h3>
              </motion.div>
              
              <motion.p 
                className={`${bodyFont.className} text-lg text-slate-700 leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                At <span className="font-semibold text-orange-600">Gulf Technical Operations LLC</span>, we stand at the 
                forefront of the oil and gas industry, delivering unparalleled equipment and services with an unwavering 
                commitment to quality, innovation, and operational excellence. Since our establishment in 2016, we've been 
                the trusted partner of choice for leading drilling and service companies worldwide.
              </motion.p>
              
              <motion.p 
                className={`${bodyFont.className} text-lg text-slate-700 leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                Our philosophy is simple: provide <span className="font-semibold text-slate-900">assured quality</span> and 
                <span className="font-semibold text-slate-900"> exceptional value</span> in every solution we deliver. 
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
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true, margin: "-50px" }}
                className="pt-6"
              >
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl shadow-orange-500/30 text-lg"
                >
                  <span className="relative z-10">Learn More About Us</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}