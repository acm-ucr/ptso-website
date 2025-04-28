import Image from "next/image";
import { StaticImageData } from "next/image";

interface ValueProps {
  name: string;
  image: StaticImageData;
  alt: string;
  description: string;
}

const Value = ({ name, image, alt, description }: ValueProps) => {
  return (
    <div className="flex w-7/8 gap-10 space-y-20 justify-self-center">
      <Image src={image} alt={alt} className="" />

      <div className="flex-col space-y-7">
        <div className="font-beVietnamPro text-3xl font-semibold">{name}</div>
        <div className="font-quicksand text-xl text-indigo-950">
          {description}
        </div>
      </div>
    </div>
  );
};
export default Value;
