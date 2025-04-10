const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ptso-pink-primary flex w-2/3 items-center gap-13 justify-self-center p-10 flex-col rounded-lg">
      <div className="bg-ptso-blue-primary w-1/2 p-6 text-center text-xl font-quicksand font-black">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-3">
        <div className="bg-ptso-blue-secondary w-full p-6 text-center rounded-full text-xl font-quicksand font-black">
          {props.text2}
        </div>
        <div className="bg-ptso-blue-secondary w-full p-6 text-center rounded-full text-xl font-quicksand font-black">
          {props.text2}
        </div>
      </div>
      <div className="bg-ptso-blue-accent w-1/2 p-6 text-center text-white text-xl font-quicksand font-black">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
