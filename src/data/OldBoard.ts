interface board {
  year: string;
  board: BoardMember[];
}

interface BoardMember {
  name: string;
  position: string;
}
export const members: board[] = [
  {
    year: "'24-'25",
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
