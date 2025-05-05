interface MemberProps {
  name: string;
  position: string;
}

const BoardMember = ({ name, position }: MemberProps) => {
  return (
    <div className="w-1/3 flex-col justify-items-center space-y-2">
      <p className="font-beVietnamPro text-2xl">{name}</p>
      <p className="font-beVietnamPro text-ptso-purple-secondary text-lg">
        {position}
      </p>
    </div>
  );
};
export default BoardMember;
