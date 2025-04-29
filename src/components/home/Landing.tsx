import Image from "next/image";
import PTSOLogo from "@/public/ptsoLogoLarge.webp";
import PTSOLogoBackground from "@/public/assets/home/ptsoLogoBackground.svg";
import border from "@/public/assets/home/background/landing.svg";
import purplediamond from "@/public/assets/home/shapes/purpleDiamond.svg";
import whitediamond from "@/public/assets/home/shapes/whiteDiamond.svg";

const Landing = () => {
  return (
    <div className="mb-8">
      <div className="bg-ptso-blue-primary relative z-10 flex flex-col items-center justify-center pt-10 text-center">
        <div className="flex flex-row gap-x-4 px-8 lg:gap-x-18">
          <div className="relative w-full">
            <Image
              src={whitediamond}
              alt="star3"
              width={90}
              className="absolute bottom-0 hidden md:flex"
            />
            <Image
              src={purplediamond}
              alt="star2"
              width={40}
              className="absolute bottom-0 left-0 hidden md:flex"
            />
          </div>
          <Image
            src={purplediamond}
            alt="star"
            width={75}
            className="-mt-12 hidden pr-8 md:flex"
          />

          <div className="relative w-full">
            <Image
              src={PTSOLogo}
              alt="PTSO logo"
              className="mb-6 h-auto w-full"
              priority
            />
            <Image
              src={PTSOLogoBackground}
              alt="Background Aura"
              className="absolute top-0 left-0 -z-10 h-auto w-full"
            />
          </div>

          <div className="relative w-full">
            <Image
              src={whitediamond}
              alt="star1"
              width={90}
              className="hidden md:flex"
            />
            <Image
              src={purplediamond}
              alt="star5"
              width={40}
              className="absolute top-0 left-0 hidden md:flex"
            />
          </div>
          <Image
            src={purplediamond}
            alt="star4"
            width={75}
            className="mt-24 hidden md:flex"
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
          src={border}
          alt="Header background bottom"
          className="border-ptso-blue-primary -mt-6 w-full border-t-16"
        />
      </div>
    </div>
  );
};

export default Landing;
