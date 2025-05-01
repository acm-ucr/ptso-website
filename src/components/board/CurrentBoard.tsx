import BoardMember from "@/components/board/BoardMember";
import Year from "@/components/Year";
import Image from "next/image";

import currBoard from "@/public/assets/board/PTSOBoard1.webp";

const CurrentBoard = () => {
  return (
    <div className="mt-20">
      <Year text="'24-'25" />
      <Image
        src={currBoard}
        alt="Image of current board"
        className="mx-auto h-auto w-2/3 rounded-lg border-3"
      />
      <p className="font-average mx-auto mt-2 w-6/13 text-center">
        (left to right): Casey Min, Erica Jwa, Dora Nguyen, Sage Kuck, Abigail
        Hinojales, Koni Moss, Vallery Ayala, Montserrat Ramirez, Natalie Hwang,
        Andrew Bach, (unpictured: Celena Fu)
      </p>

      <BoardMember />
    </div>
  );
};
export default CurrentBoard;
