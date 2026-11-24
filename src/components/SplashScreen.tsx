import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const SplashScreen: React.FC = () => {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem('nojunk_splash_shown');
  });

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('nojunk_splash_shown', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  if (!showSplash) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.65, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#FAF4EC] via-[#F2E5D5] to-[#E9D6BE] px-4 pointer-events-none select-none overflow-hidden"
      >
        {/* Golden ambient aura */}
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-amber-400/25 via-amber-300/30 to-amber-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-md">
          {/* Grand Logo Badge with Golden Glow and Rings */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -6 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Outer golden halo */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-60 blur-md animate-pulse" />

            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-amber-400/80 bg-white p-1">
              <img
                src="/assets/nojunk-badge-round.png"
                alt="nojunk emblem"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Grand Typography */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="mt-6 space-y-1"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-900/10 border border-amber-600/30 text-xs font-bold text-nojunk-goldenBrown tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Homemade Luxury Treats</span>
            </div>

            <h1 className="font-script text-5xl sm:text-6xl font-bold text-nojunk-dark tracking-tight">
              nojunk
            </h1>

            <p className="font-serif italic text-base sm:text-xl text-nojunk-goldenBrown font-semibold">
              "only nuts.. nothing else!!"
            </p>
          </motion.div>

          {/* Nut loading animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex items-center gap-2 mt-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
            <span className="w-3 h-3 rounded-full bg-nojunk-goldenBrown" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
