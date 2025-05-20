"use client";
import { motion } from "motion/react";
interface yearProps {
  text: string;
}

const Year = ({ text }: yearProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={
        "text-ptso-pink-accent font-beVietnamPro mx-auto mb-2 w-7/10 text-2xl font-bold md:mb-4 md:text-3xl"
      }
    >
      {text}
    </motion.div>
  );
};

export default Year;
