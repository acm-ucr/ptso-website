import BoardMember from "@/components/board/BoardMember";
import { members } from "@/data/OldBoard"

const OldBoard = () => {
  return (
    <div className="">
      <div>Old Board</div>
      <div className="flex flex-wrap space-y-15 w-3/4 justify-center justify-self-center">
        {members.map(({ name, position }, index) => (
          <BoardMember 
          name={name}
          position={position}
          key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default OldBoard;
