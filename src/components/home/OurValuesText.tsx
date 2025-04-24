import Image from "next/image";
import Title from "@/components/Title";
import valueStarGroup from "@/public/assets/home/shapes/valueStarGroup.png";

const OurValuesText = () => {
  return (
    <div className="w-7/25">
      <div className="flex items-center">
        <Image src={valueStarGroup} alt="Stars" width={50} className="z-5" />

        <Title text="Our Values" />
      </div>
      <p className="font-quicksand mt-3 ml-5 text-xl">
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
