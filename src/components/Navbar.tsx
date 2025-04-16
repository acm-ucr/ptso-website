"use client";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { navigations } from "@/data/NavbarLinks";
import ptsoLogo from "@/public/ptsoLogoSmall.webp";
import Divider from "@/components/Divider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-ptso-purple-accent bg-ptso-blue-primary">
      <div className="hidden items-center p-4 md:flex">
        <Link href="/" className="mr-8 flex items-center">
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
        <div className="w-1/3 text-right">JOIN US</div>
      </div>
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 pt-4">
          <Link href="\" onClick={closeMenu}>
            {" "}
            <Image
              src={ptsoLogo}
              alt="PTSO Logo"
              width={49}
              height={70}
              className="hover:cursor-pointer"
            />{" "}
          </Link>
          <div onClick={handleClick} className="hover:cursor-pointer">
            {" "}
            <MenuIcon size={32} />{" "}
          </div>
        </div>
        <div
          className={`items-center gap-3 ${!isOpen ? "hidden" : "flex flex-col"}`}
        >
          {navigations.map(({ link, name }, index) => (
            <Link
              href={link}
              key={index}
              onClick={closeMenu}
              className="border-b"
            >
              {name}
            </Link>
          ))}
          <div className="border-b">JOIN US</div>
        </div>
      </div>
      <div className="mx-4 pt-4 md:pt-0">
        <Divider />
      </div>
    </div>
  );
};
export default Navbar;
