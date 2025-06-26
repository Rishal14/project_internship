"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play, Pause, ExternalLink } from 'lucide-react';
import { useRef, useState } from 'react';

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Minimal tilt effect for a professional corporate feel
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], ["1deg", "-1deg"]), { stiffness: 80, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], ["-1deg", "1deg"]), { stiffness: 80, damping: 25 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Subtle animation variants for a corporate, professional appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };
  
  const buttonVariants = {
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } }
  };

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden bg-gray-900 text-white">
      {/* Static, industry-themed background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565263648353-cb56a7454545?q=80&w=2940&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gray-900/80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white inline-block"
          >
            About Our Company
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-amber-600 mx-auto mt-3"
          />
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left Column: Text Content */}
          <motion.div variants={containerVariants} className="space-y-5">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Gulf Technical Operations LLC
              </h3>
              <div className="w-16 h-0.5 bg-amber-600 mb-5"></div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-gray-200 leading-relaxed text-base">
              We, Gulf Technical Operations LLC, are a leading supplier of equipment and services to the oil and gas industry worldwide, driven by our philosophy of assured quality, quantity at a reasonable price. Established in Texas in 2016, we specialize in supplying products and services to drilling and service companies, ensuring they have access to the highest quality tools and equipment needed for seamless operations.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-200 leading-relaxed text-base">
              Our company is led by seasoned professionals with over 40 years of invaluable experience in the oil and gas sector. Jerry Paul, a key leader in our team, has been instrumental in leading major projects, including the rigging, refurbishment, and commissioning of over 60 land and offshore rigs across the Middle East, Egypt, U.A.E, Oman, Yemen, Saudi Arabia, Pakistan, Iraq, and Kuwait. Drawing upon this wealth of expertise, we pride ourselves on being a reliable and trustworthy partner to the industry.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2.5 px-5 rounded transition-colors duration-200 flex items-center space-x-2 border border-yellow-500/20"
              >
                <span>Learn More</span>
                <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Video Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-md overflow-hidden shadow-md border border-slate-700/50">
              <motion.div
                ref={tiltRef}
                style={{ rotateX, rotateY, transformPerspective: "1000px" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-md overflow-hidden aspect-video"
              >
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/10551547-hd_1080_1920_30fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-end p-4">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-black/40 hover:bg-black/60 p-2.5 rounded-full text-white z-20 border border-white/10"
                    onClick={toggleVideo}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Caption */}
              <div className="bg-slate-800 py-3 px-4 text-sm text-gray-300 border-t border-slate-700/50">
                <p>Gulf Technical Operations facility in Texas, USA</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
