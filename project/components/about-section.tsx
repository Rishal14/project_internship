"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Users, MapPin, Trophy, Target, Drill } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full -translate-x-48 -translate-y-48 opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100 to-transparent rounded-full translate-x-48 translate-y-48 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl mb-6 animate-float shadow-2xl"
          >
            <div className="text-white font-bold text-2xl">GTO</div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Our Company
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10"
              >
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" 
                      alt="Industrial equipment" 
                      className="w-4/5 h-4/5 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl z-20 border-4 border-white"
              >
                <Trophy className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl z-20 border-4 border-white"
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>

              {/* Oil rig themed decoration */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 z-0"
              >
                <Drill className="w-32 h-32 text-orange-500" />
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="space-y-8">
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-slate-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We, <span className="font-semibold text-orange-600">Gulf Technical Operations LLC</span>, 
                are a leading supplier of equipment and services to the oil and gas industry worldwide, 
                driven by our philosophy of assured quality, quantity at a reasonable price. 
                <span className="font-semibold text-slate-900"> Established in Texas in 2016</span>, 
                we specialize in supplying products and services to drilling and service companies, 
                ensuring they have access to the highest quality tools and equipment needed for seamless operations.
              </motion.p>

              <motion.p 
                className="text-lg text-slate-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our company is led by seasoned professionals with <span className="font-semibold text-orange-600">over 40 years of invaluable experience</span> in 
                the oil and gas sector. Jerry Paul, a key leader in our team, has been instrumental in leading 
                major projects, including the rigging, refurbishment, and commissioning of over 60 land and 
                offshore rigs across the Middle East, Egypt, U.A.E, Oman, Yemen, Saudi Arabia, Pakistan, Iraq, 
                and Kuwait. Drawing upon this wealth of expertise, we pride ourselves on being a reliable 
                and trustworthy partner to the industry.
              </motion.p>
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