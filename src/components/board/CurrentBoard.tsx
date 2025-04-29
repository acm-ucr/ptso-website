import BoardMember from "@/components/board/BoardMember";
import { members } from "@/data/CurrentBoard";

const CurrentBoard = () => {
  return (
    <div className="">
    <div>Current Board</div>
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
export default CurrentBoard;
