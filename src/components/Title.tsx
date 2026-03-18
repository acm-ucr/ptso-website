interface titleProps {
  text: string;
}

const Title = ({ text }: titleProps) => {
  return (
    <h2
      className={
        "text-ptso-pink-accent font-beVietnamPro text-center text-3xl font-bold md:text-4xl"
      }
    >
      {text}
    </h2>
  );
};

export default Title;
