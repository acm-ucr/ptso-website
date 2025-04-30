import React from "react";

interface yearProps {
  text: string;
}

const Year = ({ text }: yearProps) => {
  return (
    <div
      className={
        "text-ptso-pink-accent font-beVietnamPro mx-auto w-7/10 text-4xl font-bold"
      }
    >
      {text}
    </div>
  );
};

export default Year;
