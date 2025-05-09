import { StaticImageData } from "next/image";

interface picturesData {
  pictures: StaticImageData;
  alt: string;
  description: string;
}

import fix1 from "@/public/assets/gallery/mftApplication.png";
import fix2 from "@/public/assets/gallery/bestBuddiesColab.png";
import fix3 from "@/public/assets/gallery/bestBudiesAirplane.png";
import fix4 from "@/public/assets/gallery/applicationProcessChairs.png";
import grid1 from "@/public/assets/gallery/winter24BingoWinners.png";
import grid2 from "@/public/assets/gallery/gradStudentPanel2.png";
import grid3 from "@/public/assets/gallery/namiMumuPtso1.png";
import grid4 from "@/public/assets/gallery/gradStudentPanel.png";
import grid5 from "@/public/assets/gallery/PTGroupPhoto.png";
import grid6 from "@/public/assets/gallery/namiMumuPtso2.png";
import grid7 from "@/public/assets/gallery/PT.png";
import grid8 from "@/public/assets/gallery/bingoGroupPhoto.png";
import grid9 from "@/public/assets/gallery/PTSOBoard2.png";
import grid10 from "@/public/assets/gallery/socialBingo.png";
import grid11 from "@/public/assets/gallery/PTDemo.png";
import grid12 from "@/public/assets/gallery/bingoWinners.png";

export const picturesData: picturesData[] = [
  {
    pictures: fix1,
    alt: "Image 1",
    description: "test",
  },
  {
    pictures: fix2,
    alt: "Image 4",
    description: "test",
  },
  {
    pictures: fix3,
    alt: "Image 9",
    description: "test",
  },
  {
    pictures: grid1,
    alt: "Image 1",
    description: "Winter 2024 Bingo Winners",
  },
  {
    pictures: grid3,
    alt: "Image 2",
    description: "Graduate Student Panel",
  },
  {
    pictures: grid6,
    alt: "Image 1",
    description: "test",
  },
  {
    pictures: grid4,
    alt: "Image 4",
    description: "Graduate Student Panel 2",
  },
  {
    pictures: grid5,
    alt: "Image 5",
    description: "PT Group Photo",
  },
  {
    pictures: grid2,
    alt: "Image 8",
    description: "Bingo Group Photo",
  },
  {
    pictures: grid8,
    alt: "Image 3",
    description: "Nami Mumu PTSO 1",
  },
  {
    pictures: grid10,
    alt: "Image 10",
    description: "Social Bingo",
  },
  {
    pictures: grid9,
    alt: "Image 9",
    description: "PTSO Board 2",
  },

  {
    pictures: fix4,
    alt: "Image 9",
    description: "test",
  },
  {
    pictures: grid11,
    alt: "Image 11",
    description: "PT Demo",
  },

  {
    pictures: grid7,
    alt: "Image 7",
    description: "PT Group Photo",
  },

  {
    pictures: grid12,
    alt: "Image 12",
    description: "Bingo Winners",
  },
];
