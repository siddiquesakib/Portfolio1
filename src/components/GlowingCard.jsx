import { useRef, useState } from "react";
import { motion } from "framer-motion";

const GlowingCard = ({ children, className = "", glowColor = "primary" }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowColors = {
    primary: "rgba(6, 182, 212, 0.3)",
    secondary: "rgba(139, 92, 246, 0.3)",
    pink: "rgba(236, 72, 153, 0.3)",
    green: "rgba(34, 197, 94, 0.3)",
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute pointer-events-none rounded-full blur-3xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          width: 200,
          height: 200,
          background: glowColors[glowColor] || glowColors.primary,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowingCard;
