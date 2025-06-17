"use client";
import Image from "next/image";
import PTSOLogo from "@/public/ptsoLogoLarge.webp";
import PTSOLogoBackground from "@/public/assets/home/ptsoLogoBackground.svg";
import border from "@/public/assets/home/background/landing.svg";
import purplediamond from "@/public/assets/home/shapes/purpleDiamond.svg";
import whitediamond from "@/public/assets/home/shapes/whiteDiamond.svg";
import { motion } from "motion/react";

const diamondAnimation1 = {
  initial: { scale: 0, y: -20, x: 20 },
  whileInView: { scale: 1, y: 0, x: 0 },
  transition: { duration: 0.8, delay: 0.1 },
};

const diamondAnimation2 = {
  initial: { scale: 0, y: 20, x: -20 },
  whileInView: { scale: 1, y: 0, x: 0 },
  transition: { duration: 0.8, delay: 0.1 },
};

const diamondAnimationShort = {
  initial: { scale: 0 },
  whileInView: { scale: 1 },
  transition: { duration: 0.5, delay: 0.1 },
};

const titleAnimationDown = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay: 0.1 },
};

const titleAnimationUp = {
  initial: { y: -30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay: 0.1 },
};

const Landing = () => {
  return (
    <div className="mb-8">
      <div className="bg-ptso-blue-primary relative z-10 flex flex-col items-center justify-center pt-10 text-center">
        <div className="flex flex-row gap-x-4 px-8 lg:gap-x-18">
          <div className="relative w-full">
            <motion.div
              {...diamondAnimation1}
              className="absolute bottom-0 left-0 hidden md:flex"
            >
              <Image src={whitediamond} alt="star3" />
            </motion.div>

            <motion.div
              initial={{ scale: 0, y: -20, x: 20 }}
              whileInView={{ scale: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute bottom-0 left-0 hidden md:flex"
            >
              <Image src={purplediamond} alt="star2" className="w-1/2" />
            </motion.div>
          </div>
          <motion.div
            {...diamondAnimationShort}
            className="-mt-12 hidden pr-8 md:flex"
          >
            <Image src={purplediamond} alt="star" className="h-auto w-40" />
          </motion.div>

          <div className="relative w-full">
            <motion.div
              transition={{ duration: 0.7, delay: 0.2 }}
              initial={{ opacity: 0, scale: 0.7, y: -20 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Image
                src={PTSOLogo}
                alt="PTSO logo"
                className="mb-6 h-auto w-full"
                priority
              />
              <Image
                src={PTSOLogoBackground}
                alt="Background Aura"
                className="absolute top-0 left-0 -z-10 h-auto w-full"
              />
            </motion.div>
          </div>

          <div className="relative w-full">
            <motion.div {...diamondAnimation2} className="hidden md:flex">
              <Image src={whitediamond} alt="star1" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, y: 20, x: -20 }}
              whileInView={{ scale: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-0 left-0 hidden md:flex"
            >
              <Image src={purplediamond} alt="star5" className="w-1/2" />
            </motion.div>
          </div>
          <motion.div
            {...diamondAnimationShort}
            className="mt-24 hidden md:flex"
          >
            <Image src={purplediamond} alt="star4" className="h-auto w-50" />
          </motion.div>
        </div>

        <div className="text-ptso-navy font-beVietnamPro text-3xl leading-tight font-bold md:text-5xl">
          <motion.div {...titleAnimationDown}>
            Pre-Therapy
            <br />
            Student Organization
          </motion.div>
        </div>
        <div className="text-ptso-navy font-beVietnamPro mt-4 text-lg md:text-xl">
          <motion.div {...titleAnimationUp}>
            UCR Student Organization est. 2024
          </motion.div>
        </div>
      </div>

      <Image
        src={border}
        alt="Header background bottom"
        className="border-ptso-blue-primary -mt-6 w-full border-t-16"
      />
    </div>
  );
};

export default Landing;
