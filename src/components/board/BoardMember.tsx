interface MemberProps {
  name: string;
  position: string;
}

const BoardMember = ({ name, position }: MemberProps) => {
  return (
    <div className="w-1/2 flex-col justify-items-center px-8 py-3 text-center md:w-1/3 md:px-3 md:py-4">
      <div className="font-average text-md text-ptso-purple-accent text-lg sm:text-xl md:text-2xl">
        {name}
      </div>
      <p className="font-beVietnamPro text-ptso-purple-secondary text-base sm:text-lg md:text-xl">
        {position}
      </p>
    </div>
  );
};
export default BoardMember;
