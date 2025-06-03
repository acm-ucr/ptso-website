"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

interface TherapyCardProps {
  image: StaticImageData;
  name: string;
  description: string;
  alt: string;
  color: string;
}

const TherapyCard = ({
  image,
  description,
  name,
  alt,
  color,
}: TherapyCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="aspect-5/6 w-full">
      <motion.div
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.4 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        onClick={() => setFlipped((prevState) => !prevState)}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full sm:w-full"
      >
        <div
          className={`${color} absolute inset-0 flex flex-col items-center justify-center space-y-4 rounded-xl`}
          style={{
            backfaceVisibility: "hidden",
            zIndex: flipped ? 1 : 2,
          }}
        >
          <div className="relative w-1/2 md:w-1/3">
            <Image src={image} alt={alt} className="object-contain" />
          </div>
          <div className="font-beVietnamPro text-md text-center text-white sm:text-2xl lg:text-3xl xl:text-4xl">
            {name}
          </div>
        </div>

        <div
          className={`${color} absolute inset-0 flex flex-col items-center justify-center space-y-2 rounded-xl p-1 sm:space-y-4 md:p-3 lg:space-y-8`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: flipped ? 2 : 1,
          }}
        >
          <div className="relative w-1/4 sm:w-1/2 md:w-1/3">
            <Image src={image} alt={alt} className="object-contain" />
          </div>
          <div className="md:text-md text-center font-serif text-[8px] text-white sm:text-xs xl:text-xl">
            {description}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TherapyCard;
