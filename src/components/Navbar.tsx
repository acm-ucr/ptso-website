"use client";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { navigations } from "@/data/NavbarLinks";
import ptsoLogo from "@/public/ptsoLogoSmall.webp";
import Divider from "@/components/Divider";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2, type: "tween" }
};

const navItemAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-ptso-purple-accent bg-ptso-blue-primary"
    >
      {/* Desktop Navigation */}
      <div className="hidden items-center p-4 md:flex">
        <motion.div {...navItemAnimation}>
          <Link href="/" className="mr-8 flex items-center">
            <Image src={ptsoLogo} alt="PTSO Logo" height={70} width={49} />
            <div className="px-4 text-3xl">PTSO</div>
          </Link>
        </motion.div>

        <div className="font-beVietnamPro flex w-1/2 gap-11 text-xl">
          {navigations.map(({ link, name }, index) => (
            <motion.div
              key={index}
              {...navItemAnimation}
              transition={{ ...navItemAnimation.transition, delay: index * 0.1 }}
            >
              <Link
                href={link}
                className={`${pathname === link ? "text-ptso-pink-secondary font-semibold" : ""}`}
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div className="w-1/3 text-right origin-right" {...hoverScale}>
          <Link
            href="https://www.instagram.com/ucr_ptso/"
            className="inline-block rounded-full bg-ptso-pink-secondary px-6 py-2 text-white hover:bg-ptso-pink-secondary/90"
          >
            JOIN US
          </Link>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 pt-4">
          <motion.div {...navItemAnimation}>
            <Link href="\" onClick={closeMenu}>
              <Image
                src={ptsoLogo}
                alt="PTSO Logo"
                width={49}
                height={70}
                className="hover:cursor-pointer"
              />
            </Link>
          </motion.div>
          
          <motion.div 
            onClick={handleClick} 
            className="hover:cursor-pointer"
            {...hoverScale}
          >
            <MenuIcon size={32} />
          </motion.div>
        </div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="overflow-hidden"
        >
          <div className="flex flex-col items-center gap-4 py-3">
            {navigations.map(({ link, name }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link}
                  onClick={closeMenu}
                  className={`pb-1 border-b ${
                    pathname === link 
                      ? "border-ptso-pink-secondary text-ptso-pink-secondary font-semibold" 
                      : "border-ptso-purple-accent text-ptso-purple-accent"
                  }`}
                >
                  {name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              className="mt-2"
            >
              <Link
                href="https://www.instagram.com/ucr_ptso/"
                className="rounded-full bg-ptso-pink-secondary px-6 py-2 text-white hover:bg-ptso-pink-secondary/90"
                onClick={closeMenu}
              >
                JOIN US
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="pt-4 md:pt-0">
        <Divider />
      </div>
    </motion.div>
  );
};
export default Navbar;