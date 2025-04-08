import Image from "next/image";
import Link from "next/link";
import { navigations } from "@/data/NavbarLinks";
import ptsoLogo from "@/public/ptsoLogo.webp";

const Navbar = () => {
  return (
    <div className="text-ptso-purple-accent">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex w-1/5 items-center">
          <Link href="/">
            <Image src={ptsoLogo} alt="PTSO Logo" height={70} width={49} />
          </Link>
          <div className="px-4 text-3xl">PTSO</div>
        </div>
        <div className="font-beVietnamPro flex w-1/2 gap-11 text-xl">
          {navigations.map(({ link, name }, index) => (
            <Link href={link} key={index}>
              {name}
            </Link>
          ))}
        </div>
        <div className="w-1/4 justify-items-end">JOIN US</div>
      </div>
    </div>
  );
};
export default Navbar;
