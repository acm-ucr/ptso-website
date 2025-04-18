const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ptso-pink-primary flex w-2/3 flex-col items-center gap-10 justify-self-center rounded-lg p-10">
      <div className="bg-ptso-purple-primary w-1/2 p-5 text-center text-lg">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-ptso-purple-secondary w-full rounded-full p-5 text-center text-lg">
          {props.text2}
        </div>
        <div className="bg-ptso-purple-secondary w-full rounded-full p-5 text-center text-lg">
          {props.text2}
        </div>
      </div>
      <div className="bg-ptso-purple-accent w-1/2 p-5 text-center text-lg text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
