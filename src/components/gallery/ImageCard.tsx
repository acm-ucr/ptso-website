import { StaticImageData } from "next/image";
import Image from "next/image";

interface ImageCard {
  image: StaticImageData;
  alt: string;
  description: string;
}

const ImageCard = ({ image, alt, description }: ImageCard) => {
  return (
    <div className="group relative w-fit">
      <div className="absolute z-1 h-full w-full rounded-2xl bg-black opacity-0 transition-opacity duration-200 hover:opacity-35" />
      <Image src={image} alt={alt} />
      <div className="pointer-events-none absolute bottom-0 z-2 hidden p-4 text-xl text-white group-hover:block">
        {description}
      </div>
    </div>
  );
};
export default ImageCard;
