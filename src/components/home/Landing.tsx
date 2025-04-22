import Image from "next/image";
import PTSOLogo from "@/public/ptsoLogoLarge.webp";
import "@/app/globals.css";
import PTSOLogoBackground from "@/public/assets/home/ptsoLogoBackground.svg";
import rectangle1 from "@/public/assets/home/background/landing.svg";
import purplediamond from "@/public/assets/home/shapes/purpleDiamond.svg";
import whitediamond from "@/public/assets/home/shapes/whiteDiamond.svg";

const Landing = () => {
  return (
    <div className="mb-20">
      <div className="bg-ptso-blue-primary relative z-10 flex flex-col items-center justify-center pt-10 text-center">
        <Image
          src={purplediamond}
          alt="star"
          width={75}
          className="absolute left-60 -mt-95 ml-75 hidden md:flex"
        />
        <Image
          src={purplediamond}
          alt="star2"
          width={90}
          className="absolute right-20 mt-80 mr-90 hidden md:flex"
        />
        <Image
          src={whitediamond}
          alt="star3"
          width={100}
          className="absolute left-20 mt-12 ml-32 hidden md:flex"
        />
        <Image
          src={purplediamond}
          alt="star4"
          width={40}
          className="absolute left-15 mt-20 ml-50 hidden md:flex"
        />
        <Image
          src={whitediamond}
          alt="star1"
          width={100}
          className="absolute top-10 right-60 mt-15 mr-70 hidden md:flex"
        />
        <Image
          src={purplediamond}
          alt="star5"
          width={40}
          className="absolute top-10 right-60 mt-20 mr-72 hidden md:flex"
        />
        <div className="relative w-full max-w-[250px]">
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
        <div className="text-ptso-navy font-beVietnamPro text-3xl leading-tight font-bold md:text-5xl">
          Pre-Therapy
          <br />
          Student Organization
        </div>
        <div className="text-ptso-navy font-beVietnamPro mt-4 text-lg md:text-xl">
          UCR Student Organization est. 2024
        </div>
      </div>

      <div>
        <Image
          src={rectangle1}
          alt="Header background bottom"
          className="border-ptso-blue-primary -mt-6 w-full border-t-16"
        />
      </div>
    </div>
  );
};

export default Landing;
