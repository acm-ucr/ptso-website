import React from "react";

const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="bg-ptso-pink-primary flex w-3/4 flex-col items-center gap-4 rounded-lg p-10">
      <div className="bg-ptso-blue-secondary w-full rounded-full p-5 text-center text-xl">
        {props.text1}
      </div>
      <div className="bg-ptso-blue-secondary w-full rounded-full p-5 text-center text-xl">
        {props.text2}
      </div>
      <div className="bg-ptso-blue-accent w-full rounded p-5 text-center text-xl">
        {props.text3}
      </div>
      <div className="bg-ptso-blue-accent-dark w-full rounded p-5 text-center text-xl text-white">
        {props.text4}
      </div>
    </div>
  );
};

export default Example;
