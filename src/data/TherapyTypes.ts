import { StaticImageData } from "next/image";
import Art from "@/public/assets/about/therapyTypes/art.webp";
import Blocks from "@/public/assets/about/therapyTypes/blocks.webp";
import Lungs from "@/public/assets/about/therapyTypes/lungs.webp";
import Masks from "@/public/assets/about/therapyTypes/masks.webp";
import Music from "@/public/assets/about/therapyTypes/music.webp";
import Radiation from "@/public/assets/about/therapyTypes/radiation.webp";
import Ring from "@/public/assets/about/therapyTypes/ring.webp";
import TalkingHead from "@/public/assets/about/therapyTypes/talkingHead.webp";
import Weight from "@/public/assets/about/therapyTypes/weight.webp";

export interface TherapyType {
  name: string;
  image: StaticImageData;
  alt: string;
  color: string;
}

export const therapyTypes: TherapyType[] = [
  {
    name: "Marriage & Family",
    image: Ring,
    alt: "Wedding rings icon",
    color: "bg-ptso-pink-secondary",
  },
  {
    name: "Physical",
    image: Weight,
    alt: "Weight lifting icon",
    color: "bg-ptso-blue-accent",
  },
  {
    name: "Occupational",
    image: Blocks,
    alt: "Building blocks icon",
    color: "bg-ptso-purple-primary",
  },
  {
    name: "Respiratory",
    image: Lungs,
    alt: "Lungs icon",
    color: "bg-ptso-blue-accent",
  },
  {
    name: "Radiation",
    image: Radiation,
    alt: "Radiation symbol icon",
    color: "bg-ptso-pink-secondary",
  },
  {
    name: "Art",
    image: Art,
    alt: "Art palette icon",
    color: "bg-ptso-blue-accent",
  },
  {
    name: "Speech-Language",
    image: TalkingHead,
    alt: "Talking head icon",
    color: "bg-ptso-purple-primary",
  },
  {
    name: "Music",
    image: Music,
    alt: "Music notes icon",
    color: "bg-ptso-blue-accent",
  },
  {
    name: "Counseling",
    image: Masks,
    alt: "Theater masks icon",
    color: "bg-ptso-pink-secondary",
  },
];
