import TherapyCard from "@/components/about/TherapyCard";
import Title from "../Title";

const TherapyTypes = () => {
  return (
    <div>
      <Title text="Therapy Types" />
      <p className="font-average mx-auto h-auto w-5/6 text-center text-xl text-black">
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

      <TherapyCard />
    </div>
  );
};
export default TherapyTypes;
