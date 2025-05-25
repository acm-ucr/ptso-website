import Advocacy from "@/public/assets/home/values/advocacy.webp";
import Collaboration from "@/public/assets/home/values/collaboration.webp";
import Diversity from "@/public/assets/home/values/diversity.webp";
import Integrity from "@/public/assets/home/values/integrity.webp";
import Growth from "@/public/assets/home/values/growth.webp";
import { StaticImageData } from "next/image";

interface value {
  image: StaticImageData;
  alt: string;
  className: string;
}

export const values: value[] = [
  {
    image: Collaboration,
    alt: "Collaboration",
    className: "col-span-3 md:col-span-2 md:col-start-3 flex justify-center",
  },
  {
    image: Growth,
    alt: "Growth",
    className: "col-span-3 md:col-span-2 md:col-start-2 flex justify-center",
  },
  {
    image: Integrity,
    alt: "Integrity",
    className: "col-span-3 md:col-span-2 flex justify-center",
  },
  {
    image: Diversity,
    alt: "Diversity",
    className: "col-span-2 col-start-3 md:col-span-2 flex justify-center",
  },
  {
    image: Advocacy,
    alt: "Advocacy",
    className: "col-span-2 col-start-6 md:col-start-3 flex justify-center",
  },
];
