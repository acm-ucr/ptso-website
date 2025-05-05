import Year from "@/components/Year";
import BoardMember from "@/components/board/BoardMember";
import { members } from "@/data/OldBoard";

const OldBoard = () => {
  return (
    <div className="mt-12">
      <Year text="'23-'24" />
      <div className="flex w-3/4 flex-wrap justify-center space-y-10 justify-self-center">
        {members.map(({ name, position }, index) => (
          <BoardMember name={name} position={position} key={index} />
        ))}
      </div>
    </div>
  );
};
export default OldBoard;
