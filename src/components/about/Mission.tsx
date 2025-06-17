"use client";
import Image from "next/image";
import GroupPhoto from "@/public/assets/about/therapyAbout.webp";
import { motion } from "motion/react";

const imageAnimation = {
  initial: { scale: 0.9, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { duration: 0.7 },
};

const textAnimation = {
  initial: { scale: 0.9, opacity: 0, x: -20 },
  whileInView: { scale: 1, opacity: 1, x: 0 },
  transition: { duration: 0.6, delay: 0.2 },
};

const Mission = () => {
  return (
    <div className="m-8 flex flex-col items-center justify-around gap-3 md:flex-row">
      <motion.div {...imageAnimation} className="md:w-2/5">
        <Image src={GroupPhoto} alt="Group Photo" className="md:w-full" />
      </motion.div>

      <motion.div
        {...textAnimation}
        className="text-ptso-purple-accent font-quicksand text-center text-lg sm:text-xl md:w-2/5 md:text-2xl"
      >
        <p>
          At PTSO, we are dedicated to fostering a supportive and inclusive
          community for students pursuing careers in therapy, emphasizing
          collaboration, professional growth, and lifelong learning. Our values
          center on advocacy, integrity, and empowerment, ensuring that every
          member has the resources and opportunities to succeed in their journey
          toward helping others.
        </p>
      </motion.div>
    </div>
  );
};

export default Mission;
