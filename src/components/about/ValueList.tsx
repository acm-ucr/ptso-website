"use client";
import Value from "@/components/about/Value";
import { values } from "@/data/Values";
import Image from "next/image";
import { motion } from "motion/react";
import Title from "@/components/Title";
import TopWave from "@/public/assets/about/background/topWave.svg";
import BottomWave from "@/public/assets/about/background/bottomWave.svg";

const ValueList = () => {
  return (
    <div className="relative w-full">
      <Image
        src={TopWave}
        alt="Decorative top wave"
        className="w-full object-cover"
      />

      <div className="-mt-4 flex-col bg-[#FFF4F4] px-8 pt-8">
        <Title text="Our Values" />

        {values.map(({ name, image, alt, description }, index) => (
          <motion.div
            initial={{ scale: 0.6, opacity: 0, y: 0, x: 100 }}
            whileInView={{ scale: 1, opacity: 1, y: 30, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Value
              name={name}
              image={image}
              alt={alt}
              description={description}
              key={index}
            />
          </motion.div>
        ))}
      </div>

      <div className="w-full">
        <Image
          src={BottomWave}
          alt="Decorative bottom wave"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};
export default ValueList;
