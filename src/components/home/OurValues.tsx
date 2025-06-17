"use client";
import Image from "next/image";
import OurValuesText from "@/components/home/OurValuesText";
import background from "@/public/assets/home/values/backgroundValues.svg";
import { values } from "@/data/HomeValues";
import { motion } from "motion/react";

const valueAnimation = {
  initial: { scale: 0.9, opacity: 0, y: 0, x: 10 },
  whileInView: { scale: 1, opacity: 1 },
  transition: (index: number) => ({
    duration: 0.8,
    delay: index * 0.1,
  }),
};

const OurValues = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,transparent_0%,transparent_30%,theme(colors.ptso-pink-primary)_30%,theme(colors.ptso-pink-primary)_50%,theme(colors.ptso-pink-primary)_100%)] relative">
      <Image
        src={background}
        alt="Background"
        className="-z-10 h-[50vh] w-full object-cover md:h-[65vh] lg:h-auto"
      />
      <div className="absolute top-8 m-5 items-center sm:top-15 md:top-28 md:m-8 md:flex md:justify-between lg:top-32 xl:top-40 xl:m-12">
        <div className="mb-8 md:mx-auto md:w-3/4 lg:-mt-8 lg:w-2/3 xl:w-1/2">
          <OurValuesText />
        </div>
        <div className="grid grid-cols-9 md:grid-cols-5">
          {values.map(({ image, alt, className }, index) => (
            <motion.div
              key={index}
              className={className}
              {...valueAnimation}
              transition={valueAnimation.transition(index)}
            >
              <Image
                src={image}
                alt={alt}
                className="w-16 sm:w-20 md:w-3/5 lg:w-4/5"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
