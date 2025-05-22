interface titleProps {
  text: string;
}

const Title = ({ text }: titleProps) => {
  return (
    <div
      className={
        "text-ptso-pink-accent font-beVietnamPro text-center text-3xl md:text-4xl font-bold"
      }
    >
      {text}
    </div>
  );
};

export default Title;
