import { HiLink } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdFolderSpecial } from "react-icons/md";

interface footer {
  link: string;
  name: string;
  icon: React.ReactNode;
}

export const footer: footer[] = [
  {
    link: "https://www.instagram.com/ucr_ptso/",
    name: "Instagram",
    icon: (
      <div className="bg-ptso-purple-accent rounded-full p-1">
        <AiFillInstagram className="text-white" />
      </div>
    ),
  },
  {
    link: "https://discord.gg/y2UCtMN5ZJ",
    name: "Discord",
    icon: (
      <div className="bg-ptso-purple-accent rounded-full p-1">
        <FaDiscord className="text-white" />
      </div>
    ),
  },
  {
    link: "https://highlanderlink.ucr.edu/organization/pretherapystudentorg",
    name: "Highlander Link",
    icon: (
      <div className="bg-ptso-purple-accent rounded-full p-1">
        <HiLink className="text-white" />
      </div>
    ),
  },
  {
    link: "https://drive.google.com/drive/folders/13XEi6sBnVh6dFxsTshb0ucTLPHLKI-wp?usp=sharing",
    name: "Past Slides",
    icon: (
      <div className="bg-ptso-purple-accent rounded-full p-1">
        <MdFolderSpecial className="text-white" />
      </div>
    ),
  },
];
