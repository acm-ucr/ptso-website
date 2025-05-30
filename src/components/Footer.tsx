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
      <div className="flex grid-flow-col grid-cols-1 flex-col items-center gap-4 py-4 text-xl sm:text-2xl md:text-3xl lg:grid">
        <div className="flex items-center">
          <Image src={ptsoLogo} alt="Logo" className="w-15" />
          <div className="px-4">PTSO</div>
        </div>
        <div className="hidden grid-cols-2 space-x-5 md:grid">
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
          <div className="item-center flex flex-col space-y-3 text-xl">
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
        <div className="flex flex-row space-x-5 md:hidden">
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
