import Image from "next/image";
import Title from "@/components/Title";
import valueStarGroup from "@/public/assets/home/shapes/valueStarGroup.webp";

const OurValuesText = () => {
  return (
    <>
      <div className="mr-5 flex items-center justify-center md:mr-0 md:justify-start">
        <Image src={valueStarGroup} alt="Stars" width={50} className="z-5" />
        <Title text="Our Values" />
      </div>
      <p className="font-quicksand mt-3 max-w-6xl px-4 text-center text-sm sm:px-6 sm:text-base md:w-full md:px-8 md:text-left md:text-xl">
        At PTSO, we are dedicated to fostering a supportive and inclusive
        community for students pursuing careers in therapy, emphasizing
        collaboration, professional growth, and lifelong learning. Our values
        center on advocacy, integrity, and empowerment, ensuring that every
        member has the resources and opportunities to succeed in their journey
        toward helping others.
      </p>
    </>
  );
};

export default OurValuesText;
