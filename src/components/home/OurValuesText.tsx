"use client";
import Image from "next/image";
import Title from "@/components/Title";
import valueStarGroup from "@/public/assets/home/shapes/valueStarGroup.webp";
import { motion } from "motion/react";

const headingAnimation = {
  initial: { scale: 0.9, y: 0, x: -50 },
  whileInView: { scale: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.1 },
  viewport: { once: true },
};

const textAnimation = {
  initial: { scale: 0.9, y: 20, x: 0 },
  whileInView: { scale: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.1 },
};

const OurValuesText = () => {
  return (
    <>
      <motion.div
        {...headingAnimation}
        className="mr-5 flex items-center justify-center md:mr-0 md:justify-start"
      >
        <Image src={valueStarGroup} alt="Stars" width={50} className="z-5" />
        <Title text="Our Values" />
      </motion.div>
      <motion.div
        {...textAnimation}
        className="font-quicksand mt-3 max-w-6xl px-4 text-center text-sm sm:px-6 sm:text-base md:w-full md:px-8 md:text-left md:text-xl"
      >
        At PTSO, we are dedicated to fostering a supportive and inclusive
        community for students pursuing careers in therapy, emphasizing
        collaboration, professional growth, and lifelong learning. Our values
        center on advocacy, integrity, and empowerment, ensuring that every
        member has the resources and opportunities to succeed in their journey
        toward helping others.
      </motion.div>
    </>
  );
};

export default OurValuesText;
