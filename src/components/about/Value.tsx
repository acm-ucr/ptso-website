import Image from "next/image";

import collaboration from "@/public/assets/about/values/collaboration.svg";

const Value = () => {
  return (
    <div className="flex w-7/8 gap-10 justify-self-center">
      <Image src={collaboration} alt="Collaboration Icon" className="" />

      <div className="flex-col space-y-7">
        <div className="font-beVietnamPro text-3xl font-semibold">
          Collaboration
        </div>
        <div className="font-quicksand text-xl text-indigo-950">
          PTSO is committed to creating a collaborative environment where
          teamwork and adversity are valued. We aim to create meaningful
          partnerships by encouraging group collaboration during meetings and
          social events. We want to work together to achieve shared goals and
          strengthen connections within our club.
        </div>
      </div>
    </div>
  );
};
export default Value;
