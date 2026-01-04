import { motion } from "framer-motion";

const FloatingElements = () => {
  const shapes = [
    { type: "circle", size: 60, x: "10%", y: "20%", duration: 8, delay: 0 },
    { type: "square", size: 40, x: "85%", y: "25%", duration: 10, delay: 1 },
    { type: "triangle", size: 50, x: "75%", y: "65%", duration: 12, delay: 2 },
    { type: "circle", size: 30, x: "15%", y: "75%", duration: 9, delay: 0.5 },
    { type: "donut", size: 70, x: "90%", y: "85%", duration: 11, delay: 1.5 },
    { type: "cross", size: 35, x: "5%", y: "45%", duration: 7, delay: 2.5 },
    { type: "square", size: 25, x: "50%", y: "10%", duration: 8, delay: 3 },
    { type: "donut", size: 45, x: "30%", y: "90%", duration: 10, delay: 0.8 },
  ];

  const floatAnimation = (duration) => ({
    y: [0, -30, 0],
    x: [0, 15, 0],
    rotate: [0, 180, 360],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  });

  const renderShape = (type, size) => {
    switch (type) {
      case "circle":
        return (
          <div
            className="rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm"
            style={{ width: size, height: size }}
          />
        );
      case "square":
        return (
          <div
            className="rounded-lg bg-gradient-to-br from-secondary/20 to-pink-500/20 backdrop-blur-sm"
            style={{ width: size, height: size }}
          />
        );
      case "triangle":
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid rgba(139, 92, 246, 0.15)`,
            }}
          />
        );
      case "donut":
        return (
          <div
            className="rounded-full border-4 border-primary/20"
            style={{ width: size, height: size }}
          />
        );
      case "cross":
        return (
          <div className="relative" style={{ width: size, height: size }}>
            <div className="absolute top-1/2 left-0 w-full h-1 bg-pink-500/20 -translate-y-1/2 rounded" />
            <div className="absolute top-0 left-1/2 w-1 h-full bg-pink-500/20 -translate-x-1/2 rounded" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.6,
            scale: 1,
            ...floatAnimation(shape.duration),
          }}
          transition={{ delay: shape.delay, duration: 1 }}
        >
          {renderShape(shape.type, shape.size)}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
