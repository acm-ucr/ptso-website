import Image from "next/image";
import Ring from "@/public/assets/about/therapyTypes/ring.webp";

const TherapyCard = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="bg-ptso-pink-secondary flex flex-col items-center justify-center rounded-xl p-12">
        <Image
          src={Ring}
          alt="Marriage & Family Therapy"
          width={80}
          height={80}
          className="mt-12 object-contain"
        />
        <div className="font-beVietnamPro mb-12 w-full p-0 text-center text-2xl text-white">
          Marriage & Family
        </div>
      </div>
    </div>
  );
};

export default TherapyCard;
