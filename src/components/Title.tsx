import React from "react";

interface titleProps {
  text: string;
}

const Title = ({ text }: titleProps) => {
  return (
    <div
      className={
        "text-ptso-pink-accent font-beVietnamPro mb-12 text-center text-5xl font-bold"
      }
    >
      {text}
    </div>
  );
};

export default Title;
