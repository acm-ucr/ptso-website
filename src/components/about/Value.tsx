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
    <div className="flex w-7/8 gap-10 justify-self-center pb-12">
      <Image src={image} alt={alt} className="sm-w-1/4 xl:w-1/10" />

      <div className="sm-w-3/4 flex-col space-y-5 xl:w-9/10">
        <div className="font-quicksand text-ptso-purple-accent text-2xl font-semibold md:text-3xl">
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
