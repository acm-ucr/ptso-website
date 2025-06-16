import { motion } from "motion/react";
import { ReactNode } from "react";

interface animationProp {
  children: ReactNode;
  index: number;
}

const galleryAnimation = {
  initial: { y: 10, opacity: 0.1, scale: 0.8 },
  whileInView: { y: 0, opacity: 1, scale: 1 },
};

const Animation = ({ children, index }: animationProp) => {
  return (
    <motion.div
      {...galleryAnimation}
      transition={{ duration: 0.7, delay: index * 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
