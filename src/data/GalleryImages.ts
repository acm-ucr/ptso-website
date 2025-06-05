import { StaticImageData } from "next/image";

interface picturesData {
  pictures: StaticImageData;
  alt: string;
  description: string;
}
import grid0 from "@/public/assets/gallery/mftApplication.webp";
import grid1 from "@/public/assets/gallery/bestBuddiesCollab.webp";
import grid2 from "@/public/assets/gallery/bestBuddiesAirplane.webp";
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
    alt: "mftApplication",
    description: "Marriage and Family Therapy Application",
  },
  {
    pictures: grid1,
    alt: "bestBuddiesCollab",
    description: "Best Buddies Collab",
  },
  {
    pictures: grid2,
    alt: "bestBuddiesAirplane",
    description: "Best Buddies Airplane",
  },
  {
    pictures: grid3,
    alt: "winter24BingoWinners",
    description: "Winter 2024 Bingo Winners",
  },
  {
    pictures: grid4,
    alt: "gradStudentPanel 2",
    description: "Graduate Student Panel 2",
  },
  {
    pictures: grid5,
    alt: "PTGroupPhoto",
    description: "PT Group Photo",
  },
  {
    pictures: grid6,
    alt: "bingoGroupPhoto",
    description: "Bingo Group Photo",
  },
  {
    pictures: grid7,
    alt: "namiMumuPTSO1",
    description: "Nami Mumu PTSO 1",
  },
  {
    pictures: grid8,
    alt: "applicationProcessChairs",
    description: "Application Process Chairs",
  },
  {
    pictures: grid9,
    alt: "PTDemo",
    description: "Physical Therapy Demo",
  },
  {
    pictures: grid10,
    alt: "PT",
    description: "Physical Therapy",
  },
  {
    pictures: grid11,
    alt: "mumuNamiPTSO",
    description: "Mumu Nami PTSO",
  },

  {
    pictures: grid12,
    alt: "socialBingo",
    description: "Social Bingo",
  },
  {
    pictures: grid13,
    alt: "gradStudentPanel",
    description: "Grad Student Panel",
  },

  {
    pictures: grid14,
    alt: "PTSOBoard2",
    description: "PTSO Board 2",
  },

  {
    pictures: grid15,
    alt: "bingoWinners",
    description: "Bingo Winners",
  },
];
