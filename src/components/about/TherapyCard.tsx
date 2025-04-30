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
    <div
      className={`${color} mx-auto flex w-3/4 flex-col items-center justify-between space-y-4 rounded-xl py-30`}
    >
      <Image
        src={image}
        alt={alt}
        width={80}
        height={80}
        className="object-contain"
      />
      <div className="font-beVietnamPro text-center text-xl text-white">
        {name}
      </div>
    </div>
  );
};

export default TherapyCard;
