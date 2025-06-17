import Image, { StaticImageData } from "next/image";

interface ValueProps {
  name: string;
  image: StaticImageData;
  alt: string;
  description: string;
}

const Value = ({ name, image, alt, description }: ValueProps) => {
  return (
    <div>
      <div className="flex w-7/8 gap-10 justify-self-center py-6 max-md:hidden">
        <Image src={image} alt={alt} className="w-1/10" />

        <div className="flex-col space-y-5 md:w-6/7 xl:w-9/10">
          <div className="font-quicksand text-ptso-purple-accent text-lg font-semibold lg:text-xl">
            {name}
          </div>
          <div className="font-quicksand text-ptso-purple-accent md:text-lg lg:text-xl">
            {description}
          </div>
        </div>
      </div>
      <div className="flex w-7/8 flex-col gap-4 justify-self-center pb-12 md:hidden">
        <div className="flex gap-6">
          <Image src={image} alt={alt} className="w-1/11" />

          <div className="font-quicksand text-ptso-purple-accent pt-2 text-xl font-semibold sm:text-2xl">
            {name}
          </div>
        </div>

        <div className="font-quicksand text-ptso-purple-accent text-lg sm:text-xl">
          {description}
        </div>
      </div>
    </div>
  );
};
export default Value;
