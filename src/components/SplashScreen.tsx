import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen: React.FC = () => {
  const [showSplash, setShowSplash] = useState(() => {
    // Only show splash screen once per session
    return !sessionStorage.getItem('nojunk_splash_shown');
  });

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('nojunk_splash_shown', 'true');
      }, 1900);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  if (!showSplash) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.6, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#F7F2EB] px-4 pointer-events-none select-none"
      >
        {/* Subtle radial parchment gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-100/60 via-[#F7F2EB] to-[#EFE6DD]" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
          {/* Animated circular badge */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotate: -4 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-nojunk-caramel/40 bg-[#F5EFEB] p-1 relative"
          >
            <img
              src="/assets/nojunk-badge-round.png"
              alt="nojunk mascot and badge"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Squirrel & Brand Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-script text-4xl sm:text-5xl font-bold text-nojunk-dark mt-5"
          >
            nojunk
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-sm sm:text-base font-serif italic text-nojunk-brown mt-1.5 tracking-wide"
          >
            "Only nuts.. nothing else!!"
          </motion.p>

          {/* Decorative nut loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex items-center gap-2 mt-6"
          >
            <span className="w-2 h-2 rounded-full bg-nojunk-caramel animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-nojunk-brown" />
            <span className="w-2 h-2 rounded-full bg-nojunk-caramel" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
