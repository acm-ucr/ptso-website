"use client"

import Image from "next/image";
import circleLogo from "@/public/assets/home/circleLogo.webp"
import vectorGroup from "@/public/assets/home/background/VectorGroup.svg"
import { useEffect } from "react";

const Instagram = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
  <div className = "flex flex-row mb-20 bg-ptso-pink-primary w-screen h-screen">
    <Image src={vectorGroup} alt = "Vector Group" className="absolute"></Image>
      <div data-behold-id="4u02SoeevQeMHpLj9hs8" className=""></div>
      <Image src = {circleLogo} alt = "Circle Logo" className="w-full scale-40">

</Image>
    </div>
  );
};

export default Instagram;