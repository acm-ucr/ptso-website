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
    <div className="bg-ptso-pink-primary relative bottom-[37vh] -z-10 h-[110vh] w-screen sm:h-[120vh] md:h-[115vh]">
      <div className="relative top-[25vh] mt-20 mb-20 flex flex-row p-8 md:top-[35vh]">
        <Image
          src={vectorGroup}
          alt="Vector Group"
          className="absolute hidden w-1/2 translate-x-[10%] translate-y-[-30%] lg:block"
        />
        <div className="w-full scale-70 sm:scale-80 md:scale-100">
          <div data-behold-id="4u02SoeevQeMHpLj9hs8" />
        </div>
        <div className="flex flex-col items-center justify-center lg:mr-20">
          <Image
            src={circleLogo}
            alt="Circle Logo"
            className="w-7/12 md:w-9/12"
          />
          <p className="mt-2 text-base sm:text-lg md:text-xl">@ucr_ptso</p>
          <Link
            href="https://www.instagram.com/ucr_ptso/"
            target="_blank"
            className="bg-ptso-pink-accent mt-4 flex cursor-pointer items-center gap-2 rounded-3xl px-4 py-3 text-white transition ease-in-out hover:-translate-y-1"
          >
            <AiFillInstagram size={20} />
            Follow on Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
