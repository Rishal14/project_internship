import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Play, Pause } from 'lucide-react';

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isMounted, setIsMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  
  // 3D tilt effect state and refs
  const tiltRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], ["15deg", "-15deg"]), {
    stiffness: 100,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], ["-15deg", "15deg"]), {
    stiffness: 100,
    damping: 30
  });

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
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8
      },
    },
  };

  const headingVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 100
      },
    },
  };

  const textItemVariants = {
    hidden: { 
      x: 100, 
      opacity: 0,
      filter: "blur(10px)"
    },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 80
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.2, 0.6, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Floating particles */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full shadow-lg"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                opacity: 0,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, -200],
                opacity: [0, 1, 0],
                rotate: [0, 360],
                scale: [null, Math.random() * 0.3 + 0.2]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            variants={headingVariants}
            className="text-center mb-20"
          >
            <motion.div
              animate={floatingAnimation}
              className="inline-block"
            >
              <h2 className="text-6xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
                About Our Company
              </h2>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto max-w-md"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ perspective: "2000px" }}>
            {/* Video Section with 3D Tilt */}
            <motion.div
              variants={textItemVariants}
              className="relative"
            >
              <motion.div
                ref={tiltRef}
                style={{
                  transformStyle: 'preserve-3d',
                  rotateX,
                  rotateY,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
                
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border border-orange-500/20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="aspect-video overflow-hidden rounded-3xl relative">
                    <video 
                      ref={videoRef}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      style={{ transform: "translateZ(40px)" }}
                      poster="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      muted
                      loop
                      autoPlay
                    >
                      <source src="/videos/10551547-hd_1080_1920_30fps.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video overlay with play/pause button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <motion.button
                        onClick={toggleVideo}
                        className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={textItemVariants} className="space-y-6">
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  We, <span className="text-orange-400 font-semibold">Gulf Technical Operations LLC</span>, are a leading supplier of equipment and services to the oil and gas industry worldwide, driven by our philosophy of assured quality, quantity at a reasonable price. Established in Texas in 2016, we specialize in supplying products and services to drilling and service companies, ensuring they have access to the highest quality tools and equipment needed for seamless operations.
                </motion.p>

                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  Our company is led by seasoned professionals with over <span className="text-orange-400 font-semibold">40 years</span> of invaluable experience in the oil and gas sector. <span className="text-orange-400 font-semibold">Jerry Paul</span>, a key leader in our team, has been instrumental in leading major projects, including the rigging, refurbishment, and commissioning of over <span className="text-orange-400 font-semibold">60 land and offshore rigs</span> across the Middle East, Egypt, U.A.E, Oman, Yemen, Saudi Arabia, Pakistan, Iraq, and Kuwait. Drawing upon this wealth of expertise, we pride ourselves on being a reliable and trustworthy partner to the industry.
                </motion.p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={textItemVariants}
                className="pt-8"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.4), 0 10px 10px -5px rgba(249, 115, 22, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl"
                >
                  <span>Learn More About Us</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
