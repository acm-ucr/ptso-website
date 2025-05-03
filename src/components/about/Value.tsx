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
      <Image src={image} alt={alt} width={400} height={400} />

      <div className="flex-col space-y-7">
        <div className="font-quicksand text-3xl font-semibold text-ptso-purple-accent">
          {name}
        </div>
        <div className="font-quicksand text-ptso-purple-accent text-xl">
          {description}
        </div>
      </div>
    </div>
  );
};
export default Value;