const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ptso-pink-primary flex w-2/3 flex-col items-center gap-13 justify-self-center rounded-lg p-10">
      <div className="bg-ptso-purple-primary font-quicksand w-1/2 p-6 text-center text-xl font-black">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-3">
        <div className="bg-ptso-purple-secondary font-quicksand w-full rounded-full p-6 text-center text-xl font-black">
          {props.text2}
        </div>
        <div className="bg-ptso-purple-secondary font-quicksand w-full rounded-full p-6 text-center text-xl font-black">
          {props.text2}
        </div>
      </div>
      <div className="bg-ptso-purple-accent font-quicksand w-1/2 p-6 text-center text-xl font-black text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
