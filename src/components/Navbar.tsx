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
        <div className="-ml-11 text-3xl">PTSO</div>
        <div className="font-beVietnamPro flex w-3xl justify-start gap-11 text-xl">
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
