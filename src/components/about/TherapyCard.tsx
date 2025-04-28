// src/components/about/TherapyTypes.tsx
import Image from "next/image";
import { therapyTypes } from "@/data/TherapyTypes";


const colorClasses = [
  'bg-ptso-pink-secondary',    // (Marriage & Family)
  'bg-ptso-blue-accent',      // (Physical)
  'bg-ptso-purple-primary',     // (Occupational)
  'bg-ptso-blue-accent', // (Respiratory)
  'bg-ptso-pink-secondary',   // Radiation
  'bg-ptso-blue-accent',      // Art
  'bg-ptso-purple-primary',   // Speech-Language
  'bg-ptso-blue-accent',   // Music
  'bg-ptso-pink-secondary',      // Counseling
];

const TherapyTypes = () => {
  return (
    <div className="flex w-full flex-col items-center px-2 py-4">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-x-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {therapyTypes.map(({ image, name, alt }, index) => (
          <div key={index} className="flex justify-center">
            <div className={`${colorClasses[index]} flex h-60 w-50 flex-col items-center justify-center rounded-xl p-4`}>
              <Image
                src={image}
                alt={alt}
                width={60}
                height={60}
                className="mt-1 object-contain"
              />
              <div className="text-white font-beVietnamPro text-center justify-center text-lg">
                {name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapyTypes;