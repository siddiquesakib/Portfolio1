import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = direction === "up" ? [100, -100] : [-100, 100];
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    yRange.map((v) => v * speed)
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
