import Value from "@/components/about/Value";
import { values } from "@/data/Values";

const ValueList = () => {
  return (
    <div className="flex-col">
      {values.map(({ name, image, alt, description }, index) => (
        <Value
          name={name}
          image={image}
          alt={alt}
          description={description}
          key={index}
        />
      ))}
    </div>
  );
};
export default ValueList;
