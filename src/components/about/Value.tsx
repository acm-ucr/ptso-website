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
    <div className="flex w-7/8 gap-10 space-y-12 justify-self-center">
      <Image src={image} alt={alt} />

      <div className="flex-col space-y-5">
        <div className="font-quicksand text-ptso-purple-accent text-2xl sm:text-3xl font-semibold md:text-4xl">
          {name}
        </div>
        <div className="font-quicksand text-ptso-purple-accent text-base sm:text-lg md:text-xl">
          {description}
        </div>
      </div>
    </div>
  );
};
export default Value;
