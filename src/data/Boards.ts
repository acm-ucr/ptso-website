import { StaticImageData } from "next/image";
import Board24_25 from "@/public/assets/board/24-25_Board.jpg";
import Board25_26 from "@/public/assets/board/25-26_Board.webp";

interface board {
  year: string;
  image?: StaticImageData;
  position?: string;
  board: BoardMember[];
}

interface BoardMember {
  name: string;
  position: string;
}
export const members: board[] = [
  {
    year: "'25-'26",
    image: Board25_26,
    position: `Back row (left to right): Casey Min, Montserrat Ramirez, Avishi Singh, Ramon Cabral, Nick Swee, Koni Moss, \n \n Front row (left to right): Victoria Gudino, Haya Salahieh, Laney Wang, Jasmine Pascasio, Riddhi Parsekar`,
    board: [
      {
        name: "Casey Min",
        position: "President",
      },
      {
        name: "Montserrat Ramirez",
        position: "Vice President",
      },
      {
        name: "Victoria Gudino",
        position: "Vice President Intern",
      },
      {
        name: "Laney Wang",
        position: "Secretary",
      },
      {
        name: "Avishi Singh",
        position: "Treasurer",
      },
      {
        name: "Nick Swee",
        position: "Co-Director of Activities",
      },
      {
        name: "Riddhi Parsekar",
        position: "Co-Director of Activities",
      },
      {
        name: "Ramon Cabral",
        position: "Co-Director of Outreach",
      },
      {
        name: "Koni Moss",
        position: "Co-Director of Outreach",
      },
      {
        name: "Haya Salahieh",
        position: "Co-Director of Publicity",
      },
      {
        name: "Jasmine Pascasio",
        position: "Co-Director of Publicity",
      },
    ],
  },
  {
    year: "'24-'25",
    image: Board24_25,
    position: `(left to right): Casey Min, Erica Jwa, Dora Nguyen, Sage Kuck, Abigail Hinojales, Koni Moss, Vallery Ayala, Montserrat Ramirez, Natalie Hwang, Andrew Bach, (unpictured: Celena Fu)`,
    board: [
      {
        name: "Casey Min",
        position: "President",
      },
      {
        name: "Natalie Hwang",
        position: "Vice President",
      },
      {
        name: "Montserrat Ramirez",
        position: "Vice President Intern",
      },
      {
        name: "Vallery Ayala",
        position: "Secretary",
      },
      {
        name: "Andrew Bach",
        position: "Treasurer",
      },
      {
        name: "Sage Kuck",
        position: "Director of Activities",
      },
      {
        name: "Dora Nguyen",
        position: "Co-Director of Outreach",
      },
      {
        name: "Koni Moss",
        position: "Co-Director of Outreach",
      },
      {
        name: "Celena Fu",
        position: "Co-Director of Outreach",
      },
      {
        name: "Abigail Hinojales",
        position: "Co-Director of Publicity",
      },
      {
        name: "Erica Jwa",
        position: "Co-Director of Publicity",
      },
    ],
  },
  {
    year: "'23-'24",
    board: [
      {
        name: "Casey Min",
        position: "President",
      },
      {
        name: "Natalie Hwang",
        position: "Vice President",
      },
      {
        name: "Vallery Ayala",
        position: "Secretary",
      },
      {
        name: "Kayla Le",
        position: "Treasurer",
      },
      {
        name: "Sage Kuck",
        position: "Co-Director of Activities",
      },
      {
        name: "Matthew Garcia",
        position: "Co-Director of Activities",
      },
      {
        name: "Angel Tang",
        position: "Director of Publicity",
      },
    ],
  },
];

export default members;
