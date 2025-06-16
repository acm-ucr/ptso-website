import Header from "@/components/Header";
import CurrentBoard from "@/components/board/CurrentBoard";
import OldBoard from "@/components/board/OldBoard";
import Founders from "@/components/board/Founders";
import Image from "next/image";
import waves from "@/public/assets/board/boardWaves.svg";

const Board = () => {
  return (
    <>
      <Header>Board</Header>
      <CurrentBoard />
      <OldBoard />
      <Image src={waves} alt="Board Waves" className="w-full" />
      <Founders />
    </>
  );
};

export default Board;
