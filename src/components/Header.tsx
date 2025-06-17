import { ReactNode } from "react";
import Image from "next/image";
import background from "@/public/assets/header/background.svg";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="text-ptso-pink-accent bg-ptso-blue-primary border-ptso-blue-primary font-beVietnamPro z-20 flex justify-center border-b-4 pt-12 pb-1 text-3xl font-bold sm:text-4xl md:text-5xl">
        {children}
      </div>
      <Image
        src={background}
        alt="Header background top"
        className="-ml-[1vw] block w-[102vw] max-w-none"
      />
    </div>
  );
};

export default Header;
