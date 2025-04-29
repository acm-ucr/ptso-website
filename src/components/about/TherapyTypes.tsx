import TherapyCard from "./TherapyCard";
import { therapyTypes } from "@/data/TherapyTypes";

const colorClasses = [
  "bg-ptso-pink-secondary",
  "bg-ptso-blue-accent",
  "bg-ptso-purple-primary",
  "bg-ptso-blue-accent",
  "bg-ptso-pink-secondary",
  "bg-ptso-blue-accent",
  "bg-ptso-purple-primary",
  "bg-ptso-blue-accent",
  "bg-ptso-pink-secondary",
];

const TherapyTypes = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="grid w-2/3 grid-cols-1 gap-x-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {therapyTypes.map((therapy, index) => (
          <TherapyCard
            key={`${therapy.name}-${index}`}
            image={therapy.image}
            name={therapy.name}
            alt={therapy.alt}
            color={colorClasses[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default TherapyTypes;