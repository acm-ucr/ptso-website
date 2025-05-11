import { StaticImageData } from "next/image";

interface picturesData {
  pictures: StaticImageData;
  alt: string;
  description: string;
}
import grid0 from "@/public/assets/gallery/mftApplication.webp";
import grid1 from "@/public/assets/gallery/bestBuddiesColab.webp";
import grid2 from "@/public/assets/gallery/bestBudiesAirplane.webp";
import grid3 from "@/public/assets/gallery/winter24BingoWinners.webp";
import grid4 from "@/public/assets/gallery/gradStudentPanel2.webp";
import grid5 from "@/public/assets/gallery/PTGroupPhoto.webp";
import grid6 from "@/public/assets/gallery/bingoGroupPhoto.webp";
import grid7 from "@/public/assets/gallery/namiMumuPtso1.webp";
import grid8 from "@/public/assets/gallery/applicationProcessChairs.webp";
import grid9 from "@/public/assets/gallery/PTDemo.webp";
import grid10 from "@/public/assets/gallery/PT.webp";
import grid11 from "@/public/assets/gallery/mumuNamiPTSO.webp";
import grid12 from "@/public/assets/gallery/socialBingo.webp";
import grid13 from "@/public/assets/gallery/gradStudentPanel.webp";
import grid14 from "@/public/assets/gallery/PTSOBoard2.webp";
import grid15 from "@/public/assets/gallery/bingoWinners.webp";

export const picturesData: picturesData[] = [
  {
    pictures: grid0,
    alt: "Image 0",
    description: "test",
  },
  {
    pictures: grid1,
    alt: "Image 2",
    description: "test",
  },
  {
    pictures: grid2,
    alt: "Image 3",
    description: "test",
  },
  {
    pictures: grid3,
    alt: "Image 1",
    description: "Winter 2024 Bingo Winners",
  },
  {
    pictures: grid4,
    alt: "Image 2",
    description: "Graduate Student Panel",
  },
  {
    pictures: grid5,
    alt: "Image 1",
    description: "test",
  },
  {
    pictures: grid6,
    alt: "Image 4",
    description: "Graduate Student Panel 2",
  },
  {
    pictures: grid7,
    alt: "Image 5",
    description: "PT Group Photo",
  },
  {
    pictures: grid8,
    alt: "Image 8",
    description: "Bingo Group Photo",
  },
  {
    pictures: grid9,
    alt: "Image 3",
    description: "Nami Mumu PTSO 1",
  },
  {
    pictures: grid10,
    alt: "Image 10",
    description: "Social Bingo",
  },
  {
    pictures: grid11,
    alt: "Image 9",
    description: "PTSO Board 2",
  },

  {
    pictures: grid12,
    alt: "Image 9",
    description: "test",
  },
  {
    pictures: grid13,
    alt: "Image 11",
    description: "PT Demo",
  },

  {
    pictures: grid14,
    alt: "Image 7",
    description: "PT Group Photo",
  },

  {
    pictures: grid15,
    alt: "Image 15",
    description: " Winter Bingo Winners",
  },
];
