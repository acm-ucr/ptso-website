import Image from "next/image";
import blueStar1 from "@/public/assets/home/shapes/blueStar1.svg";
import blueStar2 from "@/public/assets/home/shapes/blueStar2.svg";
import yellowDiamond from "@/public/assets/home/shapes/yellowDiamond.svg";

const OurValuesText = () => {
  return (
    <div className="w-7/25">
      <div className="flex items-center">
      <div className="flex relative w-20 h-20 place-items-center">
        <Image src={yellowDiamond} alt="diamond" width={50} className=" z-5"/>
        <Image src={blueStar1} alt="star" width={30} className="absolute left-6 top-11 z-10"/>
        <Image src={blueStar2} alt="star2" width={15} className="absolute right-15 top-10 z-10"/>
      </div>
      <div className="mt-5 font-beVietnamPro text-ptso-pink-accent text-4xl font-extrabold">Our Values</div>
      </div>
      <p className="font-quicksand ml-5 mt-3">At PTSO, we are dedicated to fostering a supportive and inclusive community for students pursuing careers in therapy, emphasizing collaboration, professional growth, and lifelong learning. Our values center on advocacy, integrity, and empowerment, ensuring that every member has the resources and opportunities to succeed in their journey toward helping others.
      </p>
    </div>
  );
};

export default OurValuesText;
