"use client";
import Link from "next/link";
import Image from "next/image";
import circleLogo from "@/public/assets/home/circleLogo.webp";
import vectorGroup from "@/public/assets/home/background/VectorGroup.svg";

import { useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";

const Instagram = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://w.behold.so/widget.js";
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }, 20);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className=" mb-20 flex w-auto flex-row p-8 mt-20 ">
      <Image
        src={vectorGroup}
        alt="Vector Group"
        className="absolute w-3/5 translate-y-[-30%] translate-x-[10%]"
      />
      <div data-behold-id="4u02SoeevQeMHpLj9hs8"/>
      <div className="flex flex-col items-center justify-center">
        <Image src={circleLogo} alt="Circle Logo" className="w-3/5" />
        <Link
          href="https://www.instagram.com/ucr_ptso/"
          target="_blank"
          className="bg-ptso-pink-accent mt-4 flex cursor-pointer items-center gap-2 rounded-xl px-4 py-3 text-white transition ease-in-out hover:-translate-y-1"
        >
          <AiFillInstagram size={20} />
          Follow on Instagram
        </Link>
      </div>
    </div>
  );
};

export default Instagram;
