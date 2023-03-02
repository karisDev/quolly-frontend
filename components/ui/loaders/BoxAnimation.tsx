import { motion } from "framer-motion";

const BoxAnimation = ({ size = 100 }: { size?: number }) => {
  return (
    <motion.div
      style={{
        margin: size,
        width: size,
        height: size,
        background: "var(--color-accent-1)",
      }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};

export default BoxAnimation;
