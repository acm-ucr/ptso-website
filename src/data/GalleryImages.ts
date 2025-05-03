import { StaticImageData } from "next/image";
interface picturesData {
  className: string;
  pictures: StaticImageData;
  alt: string;
}
import grid1 from "@/public/assets/gallery/bingoGroupPhoto.webp";
import grid2 from "@/public/assets/gallery/bingoWinners.webp";
import grid3 from "@/public/assets/gallery/gradStudentPanel.webp";
import grid4 from "@/public/assets/gallery/gradStudentPanel2.webp";
import grid5 from "@/public/assets/gallery/namiMumuPtso1.webp";
import grid6 from "@/public/assets/gallery/namiMumuPtso2.webp";
import grid7 from "@/public/assets/gallery/PT.webp";
import grid8 from "@/public/assets/gallery/PTDemo.webp";
import grid9 from "@/public/assets/gallery/PTGroupPhoto.webp";
import grid10 from "@/public/assets/gallery/PTSOBoard2.webp";
import grid11 from "@/public/assets/gallery/socialBingo.webp";
import grid12 from "@/public/assets/gallery/winter24BingoWinners.webp";
export const picturesData: picturesData[] = [
  {
    className: "",
    pictures: grid1,
    alt: "Image 1",
  },
  {
    className: "",
    pictures: grid2,
    alt: "Image 2",
  },
  {
    className: "",
    pictures: grid3,
    alt: "Image 3",
  },
  {
    className: "",
    pictures: grid5,
    alt: "Image 5",
  },
  {
    className: "",
    pictures: grid6,
    alt: "Image 6",
  },
  {
    className: "",
    pictures: grid4,
    alt: "Image 4",
  },
  {
    className: "",
    pictures: grid7,
    alt: "Image 7",
  },
  {
    className: "",
    pictures: grid8,
    alt: "Image 8",
  },
  {
    className: "",
    pictures: grid9,
    alt: "Image 9",
  },
  {
    className: "",
    pictures: grid10,
    alt: "Image 10",
  },
  {
    className: "",
    pictures: grid11,
    alt: "Image 11",
  },
  {
    className: "",
    pictures: grid12,
    alt: "Image 12",
  },
];
