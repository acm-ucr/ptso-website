import Image from "next/image";
import { StaticImageData } from "next/image";

interface TherapyCardProps {
  image: StaticImageData;
  name: string;
  alt: string;
  color: string;
}

const TherapyCard = ({ image, name, alt, color }: TherapyCardProps) => {
  return (
    <div className="flex justify-center">
      <div className={`${color} flex h-60 w-48 flex-col items-center justify-center rounded-xl p-6`}>
        <div className="flex-1 flex items-center">
          <Image
            src={image}
            alt={alt}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="font-beVietnamPro text-center text-lg text-white">
          {name}
        </div>
      </div>
    </div>
  );
};

export default TherapyCard;