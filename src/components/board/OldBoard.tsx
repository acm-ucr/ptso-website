import BoardMember from "@/components/board/BoardMember";
import { members } from "@/data/OldBoard";

const OldBoard = () => {
  return (
    <div className="">
      <div>Old Board</div>
      <div className="flex w-3/4 flex-wrap justify-center space-y-15 justify-self-center">
        {members.map(({ name, position }, index) => (
          <BoardMember name={name} position={position} key={index} />
        ))}
      </div>
    </div>
  );
};
export default OldBoard;
