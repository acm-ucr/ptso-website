import { StaticImageData } from "next/image";
import Image from "next/image";

interface ImageCardProps {
  image: StaticImageData;
  alt: string;
  description: string;
}

const ImageCard = ({ image, alt, description }: ImageCardProps) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl p-2 sm:p-0">
      <div className="absolute inset-2 z-10 rounded-3xl bg-black opacity-0 transition-opacity duration-200 hover:opacity-35 sm:inset-0" />
      <Image src={image} alt={alt} className="h-full w-full rounded-3xl" />
      <div className="pointer-events-none absolute bottom-0 z-20 hidden p-4 text-base text-white group-hover:block sm:text-lg md:text-xl">
        {description}
      </div>
    </div>
  );
};

export default ImageCard;
