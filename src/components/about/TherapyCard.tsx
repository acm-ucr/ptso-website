"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

interface TherapyCardProps {
  image: StaticImageData;
  name: string;
  description: string;
  alt: string;
  color: string;
}

const cardAnimation = {
  initial: { opacity: 0, y: -30, scale: 0.5 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  whileHover: { scale: 1.05 },
  transition: { duration: 0.7 },
};

const TherapyCard = ({
  image,
  description,
  name,
  alt,
  color,
}: TherapyCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="aspect-5/6 w-full cursor-pointer p-1 lg:p-2">
      <motion.div
        {...cardAnimation}
        animate={{ rotateY: flipped ? 180 : 0 }}
        onClick={() => setFlipped((prevState) => !prevState)}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        <div
          className={`${color} absolute inset-0 flex flex-col items-center justify-center space-y-4 rounded-xl`}
          style={{
            backfaceVisibility: "hidden",
            zIndex: flipped ? 1 : 2,
          }}
        >
          <div className="relative w-1/3">
            <Image src={image} alt={alt} className="object-contain" />
          </div>
          <div className="font-beVietnamPro text-center text-2xl text-white sm:text-2xl lg:text-4xl">
            {name}
          </div>
        </div>

        <div
          className={`${color} absolute inset-0 flex flex-col items-center justify-center space-y-4 rounded-xl p-1 sm:space-y-4 md:p-3 lg:space-y-8`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: flipped ? 2 : 1,
            overflow: "hidden",
          }}
        >
          <div className="relative hidden sm:block sm:w-1/3 md:w-1/4">
            <Image src={image} alt={alt} className="object-contain" />
          </div>
          <div className="md:text-md text-center font-serif text-sm text-white lg:text-lg">
            {description}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TherapyCard;
