"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

import rectangle1 from "@/public/assets/not-found/rectangle1.svg";
import rectangle2 from "@/public/assets/not-found/rectangle2.svg";
import rectangle3 from "@/public/assets/not-found/rectangle3.svg";
import rectangle4 from "@/public/assets/not-found/rectangle4.svg";

interface redirectProps {
  statusCode: number;
}

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1 },
};

const Redirect = ({ statusCode }: redirectProps) => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={rectangle1}
        alt="Redirect wave 1"
        className="absolute top-0 left-0 z-0 w-full"
      />

      <Image
        src={rectangle2}
        alt="Redirect wave 2"
        className="absolute top-0 left-0 z-0 w-full"
      />

      <motion.div
        {...fadeIn}
        className="flex h-[72vh] flex-col items-center justify-center text-center md:min-h-screen"
      >
        <div className="text-ptso-purple-secondary font-beVietnamPro mb-4 border-b-5 text-7xl font-extrabold sm:text-8xl md:text-9xl">
          {statusCode}
        </div>

        <div className="text-ptso-purple-accent mb-8 text-lg sm:text-xl md:text-2xl">
          Oops! The page you are looking for cannot be found.
        </div>

        <Link
          href="/"
          className="bg-ptso-purple-secondary z-10 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-base text-white transition-all duration-300 ease-in-out hover:scale-105 sm:text-lg md:text-xl"
        >
          Return home →
        </Link>
      </motion.div>

      <Image
        src={rectangle3}
        alt="Redirect wave 3"
        className="absolute bottom-0 left-0 z-0 w-full"
      />

      <Image
        src={rectangle4}
        alt="Redirect wave 4"
        className="absolute bottom-0 left-0 z-0 w-full"
      />
    </div>
  );
};

export default Redirect;
