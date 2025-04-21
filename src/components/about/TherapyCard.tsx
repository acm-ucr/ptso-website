const TherapyCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-ptso-pink-secondary flex h-[200px] w-[170px] flex-col items-center justify-center rounded-xl p-4">
        <img
          src="/assets/about/therapyTypes/ring.webp"
          alt="Marriage & Family Therapy"
          className="h-15 w-15 object-contain"
        />
        <h3 className="font-be-vietnam-pro w-full p-0 text-left text-white">
          Marriage & Family
        </h3>
      </div>
    </div>
  );
};

export default TherapyCard;
