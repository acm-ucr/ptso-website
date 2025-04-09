import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="relative w-full bg-blue-100">
      {/* Top Background Image */}
      <img
        src="/assets/header/rectangle2.svg"
        alt="Header background top"
        className="absolute bottom-[-250px] left-0 w-full"
      />

      {/* Bottom Background Image (Lowered) */}
      <img
        src="/assets/header/rectangle1.svg"
        alt="Header background bottom"
        className="absolute bottom-[-190px] left-0 w-full"
      />

      {/* Title */}
      <div className="relative flex items-center justify-center">
        <h1 className="text-ptso-pink-accent pt-30 text-3xl font-bold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Header;
