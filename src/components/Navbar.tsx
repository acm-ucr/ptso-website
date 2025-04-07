import Image from "next/image";
import Link from "next/link";
import { navigations } from "@/data/NavbarLinks";
import ptsoLogo from "@/public/ptsoLogo.webp";

type Navigation = {
  name: string;
  href: string;
};

const Navbar = () => {
  return (
    <div className="text-ptso-purple-accent font-beVietnamPro">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-5 text-3xl">
          <Link href="/">
            <Image src={ptsoLogo} alt="PTSO Logo" height={70} width={49} />
          </Link>
          <p className="font-average text-3xl">PTSO</p>
          <div className="flex gap-11 pl-20 text-xl">
            {navigations.map((item: Navigation, index: number) => (
              <Link href={item.href} key={index}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        JOIN US
      </div>
      <div className="bg-ptso-blue-accent mr-3 ml-3 h-1 rounded-2xl"></div>
    </div>
  );
};
export default Navbar;
