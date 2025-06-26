"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function SplashScreen() {
  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 4 }}
        className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, duration: 1.2 }}
          className="flex flex-col items-center space-y-6"
        >
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            <Image
              src="/Bitmap.png"
              alt="Company Logo"
              width={150}
              height={150}
              className="drop-shadow-xl"
            />
          </motion.div>

          <motion.h1
            className="text-5xl font-extrabold text-white tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Welcome
          </motion.h1>

          <motion.p
            className="text-yellow-400 text-lg tracking-wide font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Gulf Technical Operations LLC
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
