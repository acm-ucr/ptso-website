import Image from "next/image";
import OurValuesText from "@/components/home/OurValuesText";
import background from "@/public/assets/home/values/backgroundValues.svg";
import advocacy from "@/public/assets/home/values/advocacy.webp";
import collaboration from "@/public/assets/home/values/collaboration.webp";
import diversity from "@/public/assets/home/values/diversity.webp";
import integrity from "@/public/assets/home/values/integrity.webp";
import growth from "@/public/assets/home/values/growth.webp";

const OurValues = () => {
  return (
    <div className="">
      <div>
        <Image
          src={background}
          alt=""
          className="absolute -z-10 h-140 w-full object-cover lg:h-auto"
        />
      </div>
      <div className="hidden items-center justify-center p-10 pt-30 md:flex lg:space-x-20 lg:pt-65">
        <div className="w-3/4 lg:w-7/16">
          <OurValuesText />
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2 col-start-3 place-items-center">
            <Image
              src={collaboration}
              alt="Collaboration"
              className="w-3/5 lg:w-4/5"
            />
          </div>
          <div className="col-span-2 col-start-2 place-items-center">
            <Image src={growth} alt="Growth" className="w-3/5 lg:w-4/5" />
          </div>
          <div className="col-span-2 place-items-center">
            <Image src={integrity} alt="Integrity" className="w-3/5 lg:w-4/5" />
          </div>
          <div className="col-span-2 place-items-center">
            <Image src={diversity} alt="Diversity" className="w-3/5 lg:w-4/5" />
          </div>
          <div className="col-span-2 place-items-center">
            <Image src={advocacy} alt="Advocacy" className="w-3/5 lg:w-4/5" />
          </div>
        </div>
        {/*<div className="gap-10">
          <Image
            src={collaboration}
            alt="Collaboration"
            className="w-25 lg:w-45 relative top-28 left-35 lg:top-50 lg:left-90"
          />
          <Image
            src={growth}
            alt="Growth"
            className="w-25 lg:w-45 relative top-22 left-8 lg:top-40 lg:left-50"
          />
          <Image
            src={integrity}
            alt="Integrity"
            className="w-25 lg:w-45 relative top-3 left-40 lg:top-5 lg:left-100"
          />
          <Image
            src={diversity}
            alt="Diversity"
            className="w-25 lg:w-45 relative right-12 bottom-8 lg:bottom-10 lg:left-10"
          />
          <Image
            src={advocacy}
            alt="Advocacy"
            className="w-25 lg:w-45 relative bottom-30 left-20 lg:bottom-50 lg:left-70"
          />
        </div>*/}
      </div>
      <div className="flex-col md:hidden">
        <div className="mb-5 pt-20">
          <OurValuesText />
        </div>
        <div className="mx-auto grid w-5/6 grid-cols-9 md:w-full">
          <div className="col-span-3 place-items-center">
            <Image
              src={collaboration}
              alt="Collaboration"
              className="w-16 sm:w-20"
            />
          </div>
          <div className="col-span-3 place-items-center">
            <Image src={growth} alt="Growth" className="w-16 sm:w-22" />
          </div>
          <div className="col-span-3 place-items-center">
            <Image src={integrity} alt="Integrity" className="w-16 sm:w-22" />
          </div>
          <div className="col-span-2 col-start-3 place-items-center">
            <Image src={diversity} alt="Diversity" className="w-16 sm:w-22" />
          </div>
          <div className="col-span-2 col-start-6 place-items-center">
            <Image src={advocacy} alt="Advocacy" className="w-16 sm:w-22" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurValues;
