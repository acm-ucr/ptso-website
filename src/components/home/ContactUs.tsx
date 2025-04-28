import Image from "next/image";
import rectangle2 from "@/public/assets/home/background/rectangle2.svg";
import vector6 from "@/public/assets/home/background/vector6.svg";
import contactUs from "@/public/assets/home/contactUs.webp";
import Title from "@/components/Title";

const ContactUs = () => {
  return (
    <div className="relative w-screen">
      <Image src={rectangle2} alt="Contact Us Wave" className="" />
      <div className="absolute top-0 left-0 flex w-full flex-row">
        <div className="flex w-1/2 justify-center ">
        <div className = "translate-x-[-8vh] translate-y-[40vh]">
        <Title text="Contact Us" />
          <Image src={contactUs} alt="Contact Us Hand" className="h-2/3 " />
          </div>
        </div>
        <div className="flex w-1/2 justify-center">
          <Image src={vector6} alt="Contact Us Blob" className="translate-x-[-8vh] translate-y-[26vh]" />
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
