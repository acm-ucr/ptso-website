interface yearProps {
  text: string;
}

const Year = ({ text }: yearProps) => {
  return (
    <div
      className={
        "text-ptso-pink-accent font-beVietnamPro mx-auto mb-4 w-7/10 text-3xl font-bold"
      }
    >
      {text}
    </div>
  );
};

export default Year;
