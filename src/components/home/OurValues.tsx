import Image from "next/image";
import OurValuesText from "@/components/home/OurValuesText";
import background from "@/public/assets/home/values/backgroundValues.svg";
import { values } from "@/data/HomeValues";

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
      <div className="flex flex-col items-center justify-center p-10 py-25 md:flex-row lg:space-x-20 lg:py-70">
        <div className="mb-8 md:w-3/4 lg:w-7/16">
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
  );
};
export default OurValues;
