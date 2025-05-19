import Year from "@/components/Year";
import BoardMember from "@/components/board/BoardMember";
import { members } from "@/data/OldBoard";

const OldBoard = () => {
  return (
    <div className="mt-12 justify-items-center">
      <Year text="'23-'24" />
      <div className="flex flex-wrap justify-center px-4 md:w-4/5 md:px-8">
        {members.map(({ name, position }, index) => (
          <BoardMember name={name} position={position} key={index} />
        ))}
      </div>
    </div>
  );
};
export default OldBoard;
