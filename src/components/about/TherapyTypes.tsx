import TherapyCard from "./TherapyCard";
import Title from "@/components/Title";
import { therapyTypes } from "@/data/TherapyTypes";

const TherapyTypes = () => {
  return (
    <div className="pt-4 pb-8">
      <Title text="Therapy Types" />
      <p className="font-quicksand mx-auto my-8 h-auto w-5/6 text-center text-base text-black sm:text-lg md:text-xl">
        Therapy comes in many forms, each designed to support individuals in
        different aspects of their health and well-being. Whether it’s improving
        physical function, enhancing communication skills, strengthening
        relationships, or managing emotional challenges, therapy provides
        valuable tools for healing and growth. Below is an overview of various
        therapy types, each playing a unique role in helping individuals lead
        healthier, more fulfilling lives. For more information, please reference
        our slides from previous general meetings to gain greater insights from
        guest speakers of the career and the graduate school application
        process.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {therapyTypes.map((therapy, index) => (
          <div className="flex w-2/4 justify-center md:w-5/11 lg:w-3/10">
            <TherapyCard
              key={index}
              image={therapy.image}
              name={therapy.name}
              description={therapy.description}
              alt={therapy.alt}
              color={therapy.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapyTypes;
