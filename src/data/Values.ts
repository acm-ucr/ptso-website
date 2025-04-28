import collaboration from "@/public/assets/about/values/collaboration.svg";
import growth from "@/public/assets/about/values/growth.svg";
import integrity from "@/public/assets/about/values/integrity.svg";
import diversity from "@/public/assets/about/values/diversity.svg";
import advocacy from "@/public/assets/about/values/advocacy.svg";
import { StaticImageData } from "next/image";

interface value {
  name: string;
  image: StaticImageData;
  alt: string;
  description: string;
}

export const values: value[] = [
  {
    name: "Collaboration",
    image: collaboration,
    alt: "Collaboration Icon",
    description:
      "PTSO is committed to creating a collaborative environment where teamwork and adversity are valued. We aim to create meaningful partnerships by encouraging group collaboration during meetings and social events. We want to work together to achieve shared goals and strengthen connections within our club.",
  },
  {
    name: "Growth",
    image: growth,
    alt: "Growth Icon",
    description:
      "PTSO is dedicated to upholding growth by instilling personal, academic, and professional development within our members. We provide valuable resources, mentorship, and opportunities to help them learn about different therapy-related careers with seminars and guest speakers during our meetings.",
  },
  {
    name: "Integrity",
    image: integrity,
    alt: "Integrity Icon",
    description:
      "PTSO is committed to upholding integrity through honesty, accountability, and ethical behavior in all our activities and member interactions. We strive to create a club with members who embody these values and do the right thing, even when no one is watching.",
  },
  {
    name: "Diversity & Inclusion",
    image: diversity,
    alt: "Diversity & Inclusion Icon",
    description:
      "PTSO is committed to promoting diversity and inclusion by creating an environment where individuals from all backgrounds are valued and respected. By including the diverse range of career paths within therapy, we focus on ensuring a community where therapists of all majors and fields feel a sense of belonging in our club.",
  },
  {
    name: "Advocacy",
    image: advocacy,
    alt: "Advocacy Icon",
    description:
      "PTSO is an organization that advocates for learning about the diverse therapy fields that exist reducing the stigma surrounding both the mental and physical challenges. By introducing more conversations at UCR, we aim to shine light on the ways future therapists can make meaningful impacts in the career paths they choose.",
  },
];
