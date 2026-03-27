import Header from "@/components/Header";
import BoardCard from "@/components/board/BoardCard";
import Boards from "@/data/Boards";
import Founders from "@/components/board/Founders";
import Image from "next/image";
import waves from "@/public/assets/board/boardWaves.svg";

const Board = () => {
  return (
    <>
      <title>UCR PTSO - Board</title>
      <Header>Board</Header>
      {Boards.map(({ year, image, position, board }, index) => (
        <BoardCard
          key={index}
          year={year}
          image={image}
          position={position}
          members={board}
        />
      ))}
      <Image src={waves} alt="Board Waves" className="w-full" />
      <Founders />
    </>
  );
};

export default Board;
