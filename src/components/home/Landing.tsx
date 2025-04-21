import Image from "next/image";
import PTSOLogo from "@/public/ptsoLogoLarge.webp";
import PTSOLogoBackground from "@/public/assets/home/ptsoLogoBackground.svg";
import rectangle1 from "@/public/assets/home/background/landing.svg";
import purplediamond from "@/public/assets/home/shapes/purpleDiamond.svg";
import whitediamond from "@/public/assets/home/shapes/whiteDiamond.svg";

const Landing = () => {
  return (
    <div className="mb-20">
      <div className="bg-ptso-blue-primary relative z-10 flex flex-col items-center justify-center pt-10 text-center">
        <Image
          src={whitediamond}
          alt="star1"
          className="absolute left-10 ml-25 w-full max-w-[64px]"
        />
        <Image
          src={whitediamond}
          alt="star2"
          className="absolute right-10 mr-20 w-full max-w-[68px]"
        />
        <Image
          src={purplediamond}
          alt="star3"
          className="absolute right-15 mr-12 w-full max-w-[64px]"
        />
        <Image
          src={purplediamond}
          alt="star4"
          className="absolute left-15 ml-15 w-full max-w-[68px]"
        />
        <Image
          src={purplediamond}
          alt="star5"
          className="absolute top-15 left-30 ml-20 w-full max-w-[64px]"
        />
        <Image
          src={purplediamond}
          alt="star6"
          className="absolute top-15 right-30 mr-20 w-full max-w-[68px]"
        />
        <div className="relative w-full max-w-[180px]">
          <Image
            src={PTSOLogo}
            alt="PTSO logo"
            className="mb-6 h-auto w-full"
            priority
          />
          <Image
            src={PTSOLogoBackground}
            alt=""
            className="absolute top-0 left-0 -z-10 h-auto w-full"
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

      <div>
        <Image
          src={rectangle1}
          alt="Header background bottom"
          className="border-ptso-blue-primary -mt-12 w-full border-t-16"
        />
      </div>
    </div>
  );
};

export default Landing;
