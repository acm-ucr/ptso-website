import Image from "next/image";
import rectangle2 from "@/public/assets/home/background/rectangle2.svg";
import vector6 from "@/public/assets/home/background/vector6.svg";
import contactUs from "@/public/assets/home/contactUs.webp";

const ContactUs = () => {
  return (
    <div>
      <div className="absolute flex flex-row">
        <Image src={contactUs} alt="Contact Us Hand" className="" />
        <Image src={vector6} alt="Contact Us Blob" className="" />
      </div>
      <div className="">
        <Image src={rectangle2} alt="Contact Us Wave" className="" />
      </div>
    </div>
  );
};
export default ContactUs;
