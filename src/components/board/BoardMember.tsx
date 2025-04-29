interface MemberProps {
  name: string;
  position: string;
}

const BoardMember = ({ name, position }: MemberProps) => {
  return (
  <div className="flex-col justify-items-center space-y-1">

    <div className="text-3xl">{name}</div>

    <div className="font-beVietnamPro text-ptso-purple-secondary text-xl">{position}</div>



  </div>
  );
};
export default BoardMember;
