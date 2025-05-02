interface MemberProps {
  name: string;
  position: string;
}

const BoardMember = ({ name, position }: MemberProps) => {
  return (
  <div className="flex-col justify-items-center space-y-2 w-1/3">
    <div className="text-3xl font-serif">{name}</div>
    <div className="font-beVietnamPro text-ptso-purple-secondary text-xl">{position}</div>
  </div>
  );
};
export default BoardMember;
