import Landing from "@/components/home/Landing";
import Description from "@/components/home/Description";
import OurValues from "@/components/home/OurValues";
import Instagram from "@/components/home/Instagram";
import ContactUs from "@/components/home/ContactUs";
import Example from "@/components/Example";

const Home = () => {
  return (
    <div>
      <Landing />
      <Description />
      <OurValues />
      <Instagram />
      <ContactUs />
      <Example text1="Adjust" text2="Props" text3="Props" />
    </div>
  );
};

export default Home;
