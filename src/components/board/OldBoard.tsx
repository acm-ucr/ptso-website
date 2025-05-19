"use client";
import Year from "@/components/Year";
import BoardMember from "@/components/board/BoardMember";
import { members } from "@/data/OldBoard";
import { motion } from "motion/react";

const OldBoard = () => {
  return (
    <div className="mt-8 justify-items-center md:mt-12">
      <Year text="'23-'24" />
      <motion.div
        className="flex flex-wrap justify-center px-4 md:w-4/5 md:px-8 md:py-2"
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
export default OldBoard;
