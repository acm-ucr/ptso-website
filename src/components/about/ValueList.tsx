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
        width={1440}
        height={200}
        className="w-full object-cover"
      />

      <div
        className="flex-col px-8 py-24"
        style={{ backgroundColor: "#fbf3f3" }}
      >
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
          width={1440}
          height={200}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};
export default ValueList;
