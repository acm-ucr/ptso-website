import Image from "next/image";
import blueStar1 from "@/public/assets/home/shapes/blueStar1.svg";
import blueStar2 from "@/public/assets/home/shapes/blueStar2.svg";
import yellowDiamond from "@/public/assets/home/shapes/yellowDiamond.svg";

const OurValuesText = () => {
  return (
    <div className="w-7/25">
      <div className="flex items-center">
        <div className="relative flex h-20 w-20 place-items-center">
          <Image src={yellowDiamond} alt="diamond" width={50} className="z-5" />
          <Image
            src={blueStar1}
            alt="star"
            width={30}
            className="absolute top-11 left-6 z-10"
          />
          <Image
            src={blueStar2}
            alt="star2"
            width={15}
            className="absolute top-10 right-15 z-10"
          />
        </div>
        <div className="font-beVietnamPro text-ptso-pink-accent mt-5 text-4xl font-extrabold">
          Our Values
        </div>
      </div>
      <p className="font-quicksand mt-3 ml-5">
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
