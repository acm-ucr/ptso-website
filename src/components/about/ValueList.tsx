"use client";
import Value from "@/components/about/Value";
import { values } from "@/data/Values";
import Image from "next/image";
import { motion } from "motion/react";
import Title from "@/components/Title";
import TopWave from "@/public/assets/about/background/topWave.svg";
import BottomWave from "@/public/assets/about/background/bottomWave.svg";

const valueAnimation = (index: number) => ({
  initial: { scale: 0.9, opacity: 0, y: 0, x: 10 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, delay: index * 0.05 },
});

const ValueList = () => {
  return (
    <div className="relative w-full">
      <Image
        src={TopWave}
        alt="Decorative top wave"
        className="w-full object-cover"
      />

      <div className="bg-ptso-pink-light -mt-4 flex-col px-8 pt-8">
        <Title text="Our Values" />

        {values.map(({ name, image, alt, description }, index) => (
          <motion.div key={index} {...valueAnimation(index)}>
            <Value
              name={name}
              image={image}
              alt={alt}
              description={description}
            />
          </motion.div>
        ))}
      </div>

      <Image
        src={BottomWave}
        alt="Decorative bottom wave"
        className="w-full object-cover"
      />
    </div>
  );
};

export default ValueList;
