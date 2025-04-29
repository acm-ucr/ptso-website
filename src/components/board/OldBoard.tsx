import BoardMember from "@/components/board/BoardMember";
import { members } from "@/data/OldBoard"

const OldBoard = () => {
  return (
    <div className="">
      <div>Old Board</div>
      <div className="grid grid-cols-3 space-y-10">
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
