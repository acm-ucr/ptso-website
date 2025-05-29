"use client";
import Image from "next/image";
import OurValuesText from "@/components/home/OurValuesText";
import background from "@/public/assets/home/values/backgroundValues.svg";
import { values } from "@/data/HomeValues";
import { motion } from "motion/react";

const OurValues = () => {
  return (
    <div className="relative">
      <Image
        src={background}
        alt=""
        className="-z-10 h-140 w-full object-cover md:h-180 lg:h-auto"
      />
      <div className="absolute top-8 m-5 items-center sm:top-15 md:top-28 md:m-8 md:flex md:justify-between lg:top-32 xl:top-40 xl:m-12">
        <div className="mb-8 md:mx-auto md:w-3/4 lg:-mt-8 lg:w-2/3 xl:w-1/2">
          <OurValuesText />
        </div>
        <div className="grid grid-cols-9 md:grid-cols-5">
          {values.map(({ image, alt, className }, index) => (
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 0, x: 10 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              key={index}
              className={className}
            >
              <Image
                src={image}
                alt={alt}
                className="w-16 sm:w-20 md:w-3/5 lg:w-4/5"
              />{" "}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurValues;
