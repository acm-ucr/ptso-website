import Image from "next/image";
import GroupPhoto from "@/public/assets/about/therapyAbout.webp";

const Mission = () => {
  return (
    <div className="m-8 flex flex-col items-center justify-around gap-3 md:flex-row">
      <Image src={GroupPhoto} alt="Group Photo" className="md:w-2/5" />
      <p className="text-ptso-purple-accent font-quicksand text-center text-lg md:w-2/5 md:text-xl">
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
export default Mission;
