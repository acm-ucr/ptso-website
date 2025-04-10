import Image from "next/image";
import rectangle1 from "@/public/assets/header/rectangle1.svg";
import rectangle2 from "@/public/assets/header/rectangle2.svg";

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <div className="absolute top-0 -z-20 w-full">
      <div className="text-ptso-pink-accent bg-ptso-blue-primary relative flex h-54 items-center justify-center pt-12 text-3xl font-bold">
        {title}
      </div>
      <Image
        src={rectangle2}
        alt="Header background top"
        className="absolute -bottom-24 -z-20 w-full"
      />
      <Image
        src={rectangle1}
        alt="Header background bottom"
        className="absolute -bottom-12 -z-20 w-full"
      />
    </div>
  );
};

export default Header;
