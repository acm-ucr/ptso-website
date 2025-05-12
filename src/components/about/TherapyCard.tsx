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
    <motion.div
      whileHover={{ scale: 1.07 }}
      transition={{ duration: 0.4 }}
      animate={{ rotateY: flipped ? 180 : 0 }}
      onClick={() => setFlipped((prevState) => !prevState)}
      style={{ position: "relative", transformStyle: "preserve-3d" }}
    >
      <div
        className={`${color} mx-auto flex w-3/4 flex-col items-center justify-between space-y-4 rounded-xl`}
        style={{ position: "relative", transformStyle: "preserve-3d" }}
      >
        <div
          className={`${color} flex flex-col items-center space-y-4`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={image}
            alt={alt}
            width={80}
            height={80}
            className="mt-24 object-contain"
          />
          <div className="font-beVietnamPro mb-24 text-center text-2xl text-white">
            {name}
          </div>
        </div>

        <div
          className={`${color} absolute top-5 flex h-3/4 flex-col items-center space-y-3 rounded-xl pr-2 pb-5 pl-2`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Image
            src={image}
            alt={alt}
            width={60}
            height={60}
            className="object-contain"
          />
          <div className="mb-24 text-center font-serif text-white">
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TherapyCard;
