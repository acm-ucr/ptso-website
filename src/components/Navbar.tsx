"use client";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navigations } from "@/data/NavbarLinks";
import ptsoLogo from "@/public/ptsoLogoSmall.webp";
import Divider from "@/components/Divider";

const navItemAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-ptso-purple-accent bg-ptso-blue-primary"
    >
      <div className="hidden items-center p-4 md:flex">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/" className="mr-8 flex items-center">
            <Image src={ptsoLogo} alt="PTSO Logo" height={70} width={49} />
            <div className="px-4 text-3xl">PTSO</div>
          </Link>
        </motion.div>

        <div className="font-beVietnamPro flex w-1/2 gap-11 text-xl">
          {navigations.map(({ link, name }, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              transition={{ ...navItemAnimation.transition, delay: index * 0.1 }}
              variants={navItemAnimation}
            >
              <Link href={link} className="hover:text-ptso-pink-accent">
                {name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="w-1/3 text-right"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="https://www.instagram.com/ucr_ptso/"
            target="_blank"
            className="bg-ptso-pink-secondary rounded-full px-6 py-2 text-white"
          >
            JOIN US
          </Link>
        </motion.div>
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 pt-4">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
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
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <MenuIcon size={32} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.3 }}
          className={`items-center gap-3 overflow-hidden`}
        >
          {navigations.map(({ link, name }, index) => (
            <motion.div
              key={index}
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link}
                onClick={closeMenu}
                className="border-b block p-2 hover:bg-ptso-blue-secondary"
              >
                {name}
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="https://www.instagram.com/ucr_ptso/"
              target="_blank"
              className="bg-ptso-pink-secondary rounded-full px-6 py-2 text-white block m-2"
              onClick={closeMenu}
            >
              JOIN US
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        className="mx-4 pt-4 md:pt-0"
      >
        <Divider />
      </motion.div>
    </motion.div>
  );
};
export default Navbar;