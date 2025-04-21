const TherapyCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen"> 
      <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-ptso-pink-secondary w-[170px] h-[200px]">
        <img
          src="/assets/about/therapyTypes/ring.webp"
          alt="Marriage & Family Therapy"
          className="w-15 h-15 object-contain"
        />
        <h3 className="w-full p-0 text-left text-white font-be-vietnam-pro">
          Marriage & Family
        </h3>
      </div>
    </div>
  );
};

export default TherapyCard;