"use client";
import BoardMember from "@/components/board/BoardMember";
import Year from "@/components/Year";
import Image, { StaticImageData } from "next/image";

//import currBoard from "@/public/assets/board/PTSOBoard.webp";

//import { members } from "@/data/CurrentBoard";
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
interface BoardMemberData {
  name: string;
  position: string;
}
interface BoardCardProps {
  year: string;
  image?: StaticImageData;
  position?: string;
  members: BoardMemberData[];
}

const BoardCard = ({ year, image, position, members }: BoardCardProps) => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <Year text={year} />
      {image && (
        <div className="flex flex-col items-center">
          <motion.div {...fadeUpAnimation}>
            <Image
              src={image}
              alt="Image of current board"
              className="border-ptso-blue-light mx-auto h-auto w-2/3 rounded-lg border-3"
            />
          </motion.div>

          <motion.p
            className="font-average md:text-md w-2/3 py-3 text-center text-xs whitespace-pre-line sm:text-sm md:w-1/2 md:py-5 md:text-base"
            {...fadeUpAnimation}
          >
            {position}
          </motion.p>
        </div>
      )}

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

export default BoardCard;
