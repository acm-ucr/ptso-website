import Image from "next/image";
import Link from "next/link";
import { navigations } from "@/data/NavbarLinks";
import ptsoLogo from "@/public/ptsoLogo.webp";
import Divider from "@/components/Divider";

const Navbar = () => {
  return (
    <div className="text-ptso-purple-accent mx-4">
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image src={ptsoLogo} alt="PTSO Logo" height={70} width={49} />
          <div className="px-4 text-3xl">PTSO</div>
        </Link>
        <div className="font-beVietnamPro flex w-1/2 gap-11 text-xl">
          {navigations.map(({ link, name }, index) => (
            <Link href={link} key={index}>
              {name}
            </Link>
          ))}
        </div>
        <div className="w-1/4 text-right">JOIN US</div>
      </div>
      <Divider />
    </div>
  );
};
export default Navbar;
