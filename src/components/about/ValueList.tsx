import Value from "@/components/about/Value";
import { values } from "@/data/Values";
import Image from "next/image";
import TopWave from "@/public/assets/about/background/topWave.svg";
import BottomWave from "@/public/assets/about/background/bottomWave.svg";

const ValueList = () => {
  return (
    <div className="relative w-full">
      <Image
        src={TopWave}
        alt="Decorative top wave"
        className="w-full object-cover"
      />

      <div className="-mt-4 flex-col bg-[#FFF4F4] px-8 pt-8">
        {values.map(({ name, image, alt, description }, index) => (
          <Value
            name={name}
            image={image}
            alt={alt}
            description={description}
            key={index}
          />
        ))}
      </div>

      <div className="w-full">
        <Image
          src={BottomWave}
          alt="Decorative bottom wave"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};
export default ValueList;
