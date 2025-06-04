"use client";
import { footer } from "@/data/FooterLinks";
import Link from "next/link";
import Image from "next/image";
import ptsoLogo from "@/public/ptsoLogoSmall.webp";
import Divider from "@/components/Divider";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      className={`px-4 ${pathname == "/about" ? "bg-white" : pathname == "/gallery" || pathname == "/" ? "bg-ptso-blue-primary" : pathname == "/board" ? "bg-ptso-pink-light" : "bg-ptso-pink-accent-darker"}`}
    >
      <Divider />
      <div className="flex grid-flow-col grid-cols-1 flex-col items-center gap-4 py-4 text-xl sm:text-2xl md:text-3xl lg:grid">
        <div className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center gap-3 md:gap-5">
              <Image src={ptsoLogo} alt="Logo" className="w-15" />
              <div>PTSO</div>
            </Link>
          </motion.div>
        </div>
        <div className="hidden grid-cols-2 space-x-5 divide-x-2 md:grid">
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
