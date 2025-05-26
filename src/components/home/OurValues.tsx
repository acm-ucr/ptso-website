import Image from "next/image";
import OurValuesText from "@/components/home/OurValuesText";
import background from "@/public/assets/home/values/backgroundValues.svg";
import { values } from "@/data/HomeValues";

const OurValues = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={background}
          alt=""
          className="-z-10 h-140 w-full object-cover md:h-180 lg:h-auto"
        />
        <div className="absolute top-8 m-5 items-center sm:top-15 md:top-28 md:m-8 md:flex md:justify-between lg:top-32 xl:top-40 xl:m-12">
          <div className="mb-8 md:mx-auto md:w-3/4 lg:-mt-8 lg:w-2/3 xl:w-1/2">
            <OurValuesText />
          </div>
          <div className="grid grid-cols-9 md:grid-cols-5">
            {values.map(({ image, alt, className }, index) => (
              <div className={className} key={index}>
                <Image
                  src={image}
                  alt={alt}
                  className="w-16 sm:w-20 md:w-3/5 lg:w-4/5"
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-ptso-pink-primary absolute -z-50 h-[45vh] w-screen -translate-y-55 lg:h-[44vh]"></div>
    </>
  );
};
export default OurValues;
