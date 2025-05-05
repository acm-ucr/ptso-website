interface MemberProps {
  name: string;
  position: string;
}

const BoardMember = ({ name, position }: MemberProps) => {
  return (
    <div className="w-1/3 flex-col justify-items-center space-y-2">
      <div className="font-serif text-3xl">{name}</div>
      <div className="font-beVietnamPro text-ptso-purple-secondary text-xl">
        {position}
      </div>
    </div>
  );
};
export default BoardMember;
