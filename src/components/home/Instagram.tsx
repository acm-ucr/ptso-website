"use client";
import Link from "next/link";
import Image from "next/image";
import circleLogo from "@/public/assets/home/circleLogo.webp";
import vectorGroup from "@/public/assets/home/background/instaBackground.svg";
import instaBottomWave from "@/public/assets/home/background/instaBottomWave.svg";
import { useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "motion/react";

const Instagram = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://w.behold.so/widget.js";
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }, 20);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="bg-ptso-pink-primary relative z-50 w-full">
        <div className="relative flex flex-row p-8 sm:pt-20">
          <Image
            src={vectorGroup}
            alt="Vector Group"
            className="absolute hidden w-1/2 translate-x-[10%] translate-y-[-30%] lg:block"
          />
          <motion.div
            className="w-full scale-80 md:scale-100"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div data-behold-id={process.env.NEXT_PUBLIC_BEHOLD_ID} />
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center xl:mr-20"
            initial={{ scale: 0.9, opacity: 0, y: 0, x: 10 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={circleLogo}
              alt="Circle Logo"
              className="w-2/5 md:w-1/2"
            />
            <p className="mt-2 text-base sm:text-lg md:text-xl">@ucr_ptso</p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="https://www.instagram.com/ucr_ptso/"
                target="_blank"
                className="bg-ptso-pink-accent mt-4 flex cursor-pointer items-center gap-4 rounded-3xl px-4 py-3 text-xs text-white transition sm:text-sm md:text-base"
              >
                <AiFillInstagram size={20} />
                Follow on Instagram
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Image
        src={instaBottomWave}
        alt="Instagram Bottom Wave"
        className="w-full"
      ></Image>
    </>
  );
};

export default Instagram;
