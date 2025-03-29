import Header from "@/components/Header";
import CurrentBoard from "@/components/board/CurrentBoard";
import OldBoard from "@/components/board/OldBoard";
import Founders from "@/components/board/Founders";

const Board = () => {
  return (
    <div>
      <Header />
      <CurrentBoard />
      <OldBoard />
      <Founders />
    </div>
  );
};

export default Board;
