import Image from "next/image";
import Title from "@/components/Title";
import valueStarGroup from "@/public/assets/home/shapes/valueStarGroup.webp";

const OurValuesText = () => {
  return (
    <div className="">
      <div className="mr-5 md:mr-0 flex items-center justify-center md:justify-start">
        <Image src={valueStarGroup} alt="Stars" width={50} className="z-5" />
        <Title text="Our Values" />
      </div>
<p className="w-full max-w-6xl md:w-full px-4 sm:px-6 md:px-8 font-quicksand mt-3 text-center text-sm sm:text-base md:text-left md:text-xl">
        At PTSO, we are dedicated to fostering a supportive and inclusive
        community for students pursuing careers in therapy, emphasizing
        collaboration, professional growth, and lifelong learning. Our values
        center on advocacy, integrity, and empowerment, ensuring that every
        member has the resources and opportunities to succeed in their journey
        toward helping others.
      </p>
    </div>
  );
};

export default OurValuesText;
