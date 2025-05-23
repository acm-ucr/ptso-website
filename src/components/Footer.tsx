"use client";
import { footer } from "@/data/FooterLinks";
import Link from "next/link";
import Image from "next/image";
import ptsoLogo from "@/public/ptsoLogoSmall.webp";
import Divider from "@/components/Divider";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      className={`px-4 ${pathname == "/about" ? "bg-white" : pathname == "/gallery" || pathname == "/" ? "bg-ptso-blue-primary" : "bg-ptso-pink-light"}`}
    >
      <Divider />
      <div className="mx-auto flex-col justify-items-center py-4 text-xl sm:text-2xl md:flex md:text-3xl">
        <div className="flex items-center">
          <Image src={ptsoLogo} alt="Image" width={49} height={70} />
          <div className="px-4">PTSO</div>
        </div>
        <div className="hidden grid-cols-2 justify-center space-x-5 divide-x-2 md:grid">
          <div className="flex flex-row items-center space-x-5">
            {footer.slice(0, 2).map(({ link, icon }, index) => (
              <Link
                className="transition ease-in-out hover:-translate-y-1"
                key={index}
                href={link}
                target="_blank"
              >
                {icon}
              </Link>
            ))}
          </div>
          <div className="item-center flex flex-col justify-center space-y-3 text-xl">
            {footer.slice(2).map(({ link, name }, index) => (
              <Link
                className="transition ease-in-out hover:-translate-y-1"
                key={index}
                href={link}
                target="_blank"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-row space-x-5 md:hidden">
          {footer.map(({ link, icon }, index) => (
            <Link
              className="transition ease-in-out hover:-translate-y-1"
              key={index}
              href={link}
              target="_blank"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
