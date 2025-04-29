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

interface TherapyType {
  name: string;
  image: StaticImageData;
  alt: string;
}

export const therapyTypes: TherapyType[] = [
  {
    name: "Marriage & Family",
    image: Ring,
    alt: "Wedding rings icon",
  },
  {
    name: "Physical",
    image: Weight,
    alt: "Weight lifting icon",
  },
  {
    name: "Occupational",
    image: Blocks,
    alt: "Building blocks icon",
  },
  {
    name: "Respiratory",
    image: Lungs,
    alt: "Lungs icon",
  },
  {
    name: "Radiation",
    image: Radiation,
    alt: "Radiation symbol icon",
  },
  {
    name: "Art",
    image: Art,
    alt: "Art palette icon",
  },
  {
    name: "Speech-Language",
    image: TalkingHead,
    alt: "Talking head icon",
  },
  {
    name: "Music",
    image: Music,
    alt: "Music notes icon",
  },
  {
    name: "Counseling",
    image: Masks,
    alt: "Theater masks icon",
  },
];
