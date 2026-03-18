"use client";
import BoardMember from "@/components/board/BoardMember";
import Year from "@/components/Year";
import Image from "next/image";

import currBoard from "@/public/assets/board/PTSOBoard.webp";

import { members } from "@/data/CurrentBoard";
import { motion } from "motion/react";

const fadeUpAnimation = {
  initial: { opacity: 0, y: -20 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.7 },
};

const fadeDownAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.7 },
};

const CurrentBoard = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <Year text="'25 - '26" />

      <motion.div {...fadeUpAnimation}>
        <Image
          src={currBoard}
          alt="Image of current board"
          className="border-ptso-blue-light mx-auto h-auto w-2/3 rounded-lg border-3"
        />
      </motion.div>

      <motion.p
        className="font-average md:text-md w-2/3 pt-3 text-center text-xs sm:text-sm md:w-1/2 md:pt-5 md:text-base"
        {...fadeUpAnimation}
      >
        Back row (left to right): Casey Min, Montserrat Ramirez, Avishi Singh,
        Ramon Cabral, Nick Swee, Koni Moss,
      </motion.p>
      <motion.p
        className="font-average md:text-md w-2/3 pb-3 text-center text-xs sm:text-sm md:w-1/2 md:pb-5 md:text-base"
        {...fadeUpAnimation}
      >
        Front row (left to right): Victoria Gudino, Haya Salahieh, Laney Wang,
        Jasmine Pascasio, Riddhi Parsekar
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center px-4 md:w-4/5 md:px-8"
        {...fadeDownAnimation}
      >
        {members.map(({ name, position }, index) => (
          <BoardMember name={name} position={position} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default CurrentBoard;
