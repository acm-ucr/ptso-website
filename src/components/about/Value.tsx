import Image from "next/image";
import { StaticImageData } from "next/image";

const Value = (props: {
  name: string;
  image: StaticImageData;
  alt: string;
  description: string;
}) => {
  return (
    <div className="flex w-7/8 gap-10 space-y-25 justify-self-center">
      <Image src={props.image} alt={props.alt} className="" />

      <div className="flex-col space-y-7">
        <div className="font-beVietnamPro text-3xl font-semibold">
          {props.name}
        </div>
        <div className="font-quicksand text-xl text-indigo-950">
          {props.description}
        </div>
      </div>
    </div>
  );
};
export default Value;
