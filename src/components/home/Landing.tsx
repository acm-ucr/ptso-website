import Image from "next/image";
import PTSOLogo from "@/public/ptsoLogoLarge.webp";
import PTSOLogoBackground from "@/public/assets/home/ptsoLogoBackground.svg";
import rectangle1 from "@/public/assets/header/rectangle1.svg";
import rectangle2 from "@/public/assets/header/rectangle2.svg";
import purplediamond from "@/public/assets/home/shapes/purpleDiamond.svg";
import whitediamond from "@/public/assets/home/shapes/whiteDiamond.svg";

const Landing = () => {
  return (
    <div className="bg-ptso-blue-primary relative">
      {/* Decorative Stars in Flex Row */}
      <div className="absolute right-0 left-0 z-10 flex justify-between px-8">
        <Image src={whitediamond} alt="star1" className="mt-55 mr-20 w-16" />
        <Image
          src={purplediamond}
          alt="star1.5"
          className="mt-55 -ml-95 w-10"
        />
        <Image src={purplediamond} alt="star2" className="-mt-20 -ml-40 w-16" />
        <Image src={whitediamond} alt="star3" className="-mr-39 w-17" />
        <Image src={purplediamond} alt="star4" className="-mt-20 w-10" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center pt-40 text-center">
        <div className="relative">
          <Image
            src={PTSOLogo}
            alt="PTSO logo"
            className="mb-6 h-auto w-[180px]"
            priority
          />
          <Image
            src={PTSOLogoBackground}
            alt=""
            className="absolute top-0 left-0 -z-10 h-auto w-[180px]"
          />
        </div>
        <div className="text-ptso-navy text-3xl leading-tight font-bold md:text-5xl">
          Pre-Therapy
          <br />
          Student Organization
        </div>
        <div className="text-ptso-navy mt-4 text-lg md:text-xl">
          UCR Student Organization est. 2024
        </div>
      </div>
      <Image
        src={rectangle2}
        alt="Header background top"
        className="absolute -bottom-25 -z-20 w-full"
      />
      <Image
        src={rectangle1}
        alt="Header background bottom"
        className="absolute -bottom-15 -z-20 w-full"
      />
    </div>
  );
};

export default Landing;
