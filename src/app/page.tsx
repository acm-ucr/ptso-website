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
      <Example text1="One" text2="Two" text3="Three" />
    </div>
  );
};

export default Home;
