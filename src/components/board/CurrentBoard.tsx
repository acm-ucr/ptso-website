"use client";
import BoardMember from "@/components/board/BoardMember";
import Year from "@/components/Year";
import Image from "next/image";

import currBoard from "@/public/assets/board/PTSOBoard1.webp";

import { members } from "@/data/CurrentBoard";
import { motion } from "motion/react";

const CurrentBoard = () => {
  return (
    <div className="mt-8 justify-items-center">
      <Year text="'24-'25" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={currBoard}
          alt="Image of current board"
          className="mx-auto h-auto w-2/3 rounded-lg border-3"
        />
      </motion.div>

      <motion.p
        className="font-average md:text-md w-2/3 py-3 text-center text-xs sm:text-sm md:w-1/2 md:py-5 md:text-base"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        (left to right): Casey Min, Erica Jwa, Dora Nguyen, Sage Kuck, Abigail
        Hinojales, Koni Moss, Vallery Ayala, Montserrat Ramirez, Natalie Hwang,
        Andrew Bach, (unpictured: Celena Fu)
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center px-4 md:w-4/5 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {members.map(({ name, position }, index) => (
          <BoardMember name={name} position={position} key={index} />
        ))}
      </motion.div>
    </div>
  );
};
export default CurrentBoard;
