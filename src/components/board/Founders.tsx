import Image from "next/image";
import { founders } from "@/data/Founders";

const Founders = () => {
  return (
    <div className="flex-col justify-items-center">
      <div className="text-ptso-pink-accent font-beVietnamPro text-center text-3xl font-extrabold md:text-5xl">
        Our Founders
      </div>
      <div className="w-2/3 justify-between sm:flex">
        {founders.map(({ image, name, alt }, index) => (
          <div className="m-6 flex-col text-center md:text-2xl" key={index}>
            <Image
              src={image}
              alt={alt}
              width={300}
              height={300}
              className="mb-2"
            />
            {name}
          </div>
        ))}
      </div>
      <div className="w-4/5 text-center">
        When we founded the Pre-Therapy Student Organization (PTSO), we wanted
        to create something more than just a club—we wanted a community. As
        students navigating the complex journey toward careers in therapy, we
        knew how overwhelming it could be to find the right resources, gain
        hands-on experience, and connect with professionals in the field. We
        built PTSO to bridge that gap at UC Riverside. Our goal was to support
        each other, learn together, and create opportunities that would help us
        grow both personally and professionally. Through workshops, guest
        speakers, and volunteer experiences, we have worked to make PTSO a place
        where aspiring therapists can find guidance, encouragement, and a sense
        of belonging.
      </div>
    </div>
  );
};
export default Founders;
