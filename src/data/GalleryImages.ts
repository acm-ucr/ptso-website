import { StaticImageData } from "next/image";

interface picturesData {
  pictures: StaticImageData;
  alt: string;
  description: string;
}

import grid1 from "@/public/assets/gallery/winter24BingoWinners.webp";
import grid2 from "@/public/assets/gallery/gradStudentPanel2.webp";
import grid3 from "@/public/assets/gallery/namiMumuPtso1.webp";
import grid4 from "@/public/assets/gallery/gradStudentPanel.webp";
import grid5 from "@/public/assets/gallery/PTGroupPhoto.webp";
import grid6 from "@/public/assets/gallery/namiMumuPtso2.webp";
import grid7 from "@/public/assets/gallery/PT.webp";
import grid8 from "@/public/assets/gallery/bingoGroupPhoto.webp";
import grid9 from "@/public/assets/gallery/PTSOBoard2.webp";
import grid10 from "@/public/assets/gallery/socialBingo.webp";
import grid11 from "@/public/assets/gallery/PTDemo.webp";
import grid12 from "@/public/assets/gallery/bingoWinners.webp";

export const picturesData: picturesData[] = [
  {
    pictures: grid1,
    alt: "Image 1",
    description: "Winter 2024 Bingo Winners",
  },
  {
    pictures: grid2,
    alt: "Image 2",
    description: "Graduate Student Panel",
  },
  {
    pictures: grid3,
    alt: "Image 3",
    description: "Nami Mumu PTSO 1",
  },
  {
    pictures: grid5,
    alt: "Image 5",
    description: "PT Group Photo",
  },
  {
    pictures: grid6,
    alt: "Image 6",
    description: "Nami Mumu PTSO 2",
  },
  {
    pictures: grid4,
    alt: "Image 4",
    description: "Graduate Student Panel 2",
  },
  {
    pictures: grid7,
    alt: "Image 7",
    description: "PT Group Photo",
  },
  {
    pictures: grid8,
    alt: "Image 8",
    description: "Bingo Group Photo",
  },
  {
    pictures: grid9,
    alt: "Image 9",
    description: "PTSO Board 2",
  },
  {
    pictures: grid10,
    alt: "Image 10",
    description: "Social Bingo",
  },
  {
    pictures: grid11,
    alt: "Image 11",
    description: "PT Demo",
  },
  {
    pictures: grid12,
    alt: "Image 12",
    description: "Bingo Winners",
  },
];
