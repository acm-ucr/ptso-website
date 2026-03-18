"use client";
import Year from "@/components/Year";
import BoardMember from "@/components/board/BoardMember";
import { members } from "@/data/OldBoard";
import { motion } from "motion/react";

const containerAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.7 },
};

const OldBoard = () => {
  return (
    <div className="mt-8 flex flex-col items-center md:mt-12">
      {members.map(({ year, board }, index) => (
        <div className="flex flex-col items-center" key={index}>
          <Year text={year} />
          <motion.div
            className="flex flex-wrap justify-center px-4 md:w-4/5 md:px-8 md:py-2"
            {...containerAnimation}
          >
            {board.map(({ name, position }, index) => (
              <BoardMember name={name} position={position} key={index} />
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
export default OldBoard;
