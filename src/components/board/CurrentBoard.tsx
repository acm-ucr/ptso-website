import BoardMember from "@/components/board/BoardMember";
import Year from "@/components/Year";
import Image from "next/image";

import currBoard from "@/public/assets/board/PTSOBoard1.webp";

import { members } from "@/data/CurrentBoard";

const CurrentBoard = () => {
  return (
    <div className="mt-8 justify-items-center">
      <Year text="'24-'25" />
      <Image
        src={currBoard}
        alt="Image of current board"
        className="mx-auto h-auto w-2/3 rounded-lg border-3"
      />
      <p className="font-average md:text-md w-2/3 py-3 text-center text-xs md:w-1/2 md:py-5">
        (left to right): Casey Min, Erica Jwa, Dora Nguyen, Sage Kuck, Abigail
        Hinojales, Koni Moss, Vallery Ayala, Montserrat Ramirez, Natalie Hwang,
        Andrew Bach, (unpictured: Celena Fu)
      </p>

      <div className="flex flex-wrap justify-center px-4 md:w-4/5 md:px-8">
        {members.map(({ name, position }, index) => (
          <BoardMember name={name} position={position} key={index} />
        ))}
      </div>
    </div>
  );
};
export default CurrentBoard;
