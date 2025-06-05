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
    <div className="h-full w-100">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0, scale: 1.01}}
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.5 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        onClick={() => setFlipped((prevState) => !prevState)}
        style={{ position: "relative", transformStyle: "preserve-3d" }}
        className="h-full"
      >
        <div
          className={`${color} absolute mx-9 flex h-full w-3/4 flex-col items-center justify-center space-y-4 rounded-xl`}
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
          className={`${color} top-5 flex flex-col items-center space-y-4 rounded-xl pr-2 pb-5 pl-2`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Image
            src={image}
            alt={alt}
            width={60}
            height={60}
            className="object-contain"
          />
          <div className="text-center font-serif text-white">{description}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default TherapyCard;
