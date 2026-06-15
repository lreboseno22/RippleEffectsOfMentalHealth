import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SlideTransitionProps = {
  children: ReactNode;
};

export default function SlideTransition({
  children,
}: SlideTransitionProps) {
  return (
    <motion.div
      className="slide"
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -40,
      }}
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}