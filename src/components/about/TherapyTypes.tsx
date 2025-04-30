import TherapyCard from "./TherapyCard";
import { therapyTypes } from "@/data/TherapyTypes";

const TherapyTypes = () => {
  return (
    <div className="mx-auto w-11/12 max-w-6xl py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {therapyTypes.map((therapy, index) => (
          <TherapyCard
            key={index}
            image={therapy.image}
            name={therapy.name}
            alt={therapy.alt}
            color={therapy.color}
          />
        ))}
      </div>
    </div>
  );
};

export default TherapyTypes;
