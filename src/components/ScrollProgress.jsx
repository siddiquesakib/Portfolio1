import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [percentage, setPercentage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercentage(Math.round(latest * 100));
      setShowScrollTop(latest > 0.2);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-pink-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Circular progress indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={scrollToTop}
          className="relative w-14 h-14 rounded-full bg-dark/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg hover:shadow-primary/20 transition-shadow cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* SVG Progress Circle */}
          <svg className="absolute w-14 h-14 -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="3"
              fill="none"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="24"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              style={{
                pathLength: scrollYProgress,
              }}
            />
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Arrow Icon */}
          <FaArrowUp className="text-white text-sm" />
        </motion.button>

        {/* Percentage tooltip */}
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark/90 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          {percentage}%
        </motion.div>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
