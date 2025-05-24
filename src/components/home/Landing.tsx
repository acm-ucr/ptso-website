"use client";
import Image from "next/image";
import PTSOLogo from "@/public/ptsoLogoLarge.webp";
import PTSOLogoBackground from "@/public/assets/home/ptsoLogoBackground.svg";
import border from "@/public/assets/home/background/landing.svg";
import purplediamond from "@/public/assets/home/shapes/purpleDiamond.svg";
import whitediamond from "@/public/assets/home/shapes/whiteDiamond.svg";
import { motion } from "motion/react";
import React from "react";

const Landing = () => {
  return (
    <div className="mb-8">
      <div className="bg-ptso-blue-primary relative z-10 flex-col items-center justify-center pt-10 text-center">
        <div className="flex flex-row gap-x-4 px-8 lg:gap-x-18">
          <div className="relative mt-20 mt-65 ml-20 w-full">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Image
                src={whitediamond}
                alt="star3"
                width={90}
                className="absolute hidden md:flex"
              />
              <Image
                src={purplediamond}
                alt="star2"
                width={40}
                className="absolute hidden md:flex"
              />
            </motion.div>
          </div>

          <div className="relative mt-25 w-[250px]">
            <motion.div
              transition={{ duration: 0.7, delay: 0.2 }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Image
                src={purplediamond}
                alt="star"
                width={75}
                className="absolute hidden md:flex"
              />
            </motion.div>
          </div>

          <motion.div
            transition={{ duration: 0.7, delay: 0.2 }}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="relative w-full">
              <Image
                src={PTSOLogo}
                alt="PTSO logo"
                className="mb-12 h-auto w-full"
              />
              <Image
                src={PTSOLogoBackground}
                alt="Background Aura"
                className="absolute top-0 left-0 -z-10 h-auto w-full"
              />
            </div>
          </motion.div>

          <div className="relative w-full">
            <motion.div
              transition={{ duration: 0.7, delay: 0.2 }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Image
                src={whitediamond}
                alt="star1"
                width={90}
                className="hidden md:flex"
              />
              <Image
                src={purplediamond}
                alt="star5"
                width={40}
                className="absolute top-0 left-0 hidden md:flex"
              />
            </motion.div>
          </div>

          <div className="relative mt-20 mr-20 w-[300px]">
            <motion.div
              transition={{ duration: 0.7, delay: 0.2 }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Image
                src={purplediamond}
                alt="star4"
                width={75}
                className="mt-24 hidden md:flex"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          transition={{ duration: 0.7, delay: 0.2 }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="text-ptso-navy font-beVietnamPro text-5xl leading-tight font-bold md:text-7xl">
            Pre-Therapy
            <br />
            Student Organization
          </div>
          <div className="text-ptso-navy font-beVietnamPro mt-8 text-2xl md:text-3xl">
            UCR Student Organization est. 2024
          </div>
        </motion.div>
      </div>

      <div>
        <Image
          src={border}
          alt="Header background bottom"
          className="border-ptso-blue-primary -mt-6 w-full border-t-16"
        />
      </div>
    </div>
  );
};

export default Landing;
