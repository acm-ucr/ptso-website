import Image from "next/image";
import Link from "next/link";
import { navigations } from "@/data/NavbarLinks";
import ptsoLogo from "@/public/ptsoLogo.webp";

const Navbar = () => {
  return (
    <div className="text-ptso-purple-accent">
      <div className="flex items-center justify-between px-6 py-3">
          <Link href="/">
            <Image src={ptsoLogo} alt="PTSO Logo" height={70} width={49} />
          </Link>
          <div className="text-3xl -ml-11">PTSO</div>
          <div className="flex gap-11 text-xl font-beVietnamPro w-3xl justify-start">
            {navigations.map(({ link, name }, index) => (
              <Link href={link} key={index}>
                {name}
              </Link>
            ))}
          </div>
        <div className="pl-48">JOIN US</div>
      </div>
      <div className="bg-ptso-blue-accent mr-3 ml-3 h-1 rounded-2xl"></div>
    </div>
  );
};
export default Navbar;
