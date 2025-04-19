import Casey from "@/public/assets/board/CaseyMin.webp";
import Natalie from "@/public/assets/board/NatalieHwang.webp";
import { StaticImageData } from "next/image";

interface founder {
  name: string;
  image: StaticImageData;
  alt: string;
}

export const founders: founder[] = [
  {
    name: "Casey Min",
    image: Casey,
    alt: "Casey Min",
  },
  {
    name: "Natalie Hwang",
    image: Natalie,
    alt: "Natalie Hwang",
  },
];
