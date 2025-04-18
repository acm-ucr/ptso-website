import Header from "@/components/Header";
import Mission from "@/components/about/Mission";
import ValueList from "@/components/about/ValueList";
import TherapyTypes from "@/components/about/TherapyTypes";

const About = () => {
  return (
    <div>
      <Header title="About" />
      <div className="mt-36">
        <Mission />
        <ValueList />
        <TherapyTypes />
      </div>
    </div>
  );
};

export default About;
