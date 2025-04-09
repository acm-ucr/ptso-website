import React from "react";
import Link from "next/link";

const Redirect = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full">
        <svg
          width="full"
          height="auto"
          viewBox="0 0 1440 491"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.000176489 -31H1440V244.633C1440 244.633 1238.5 67 1123.5 180C1008.5 293 897 324.5 749.5 255.5C602 186.5 374.7 288.81 249.5 390C-20.4998 608.22 -0.000176489 402.553 -0.000176489 402.553V-31Z"
            fill="#80AED9"
          />
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-full">
        <svg
          width="full"
          height="auto"
          viewBox="0 0 1440 418"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 -76H1440V199.633C1440 199.633 1309.5 35.0416 1030 186.5C750.5 337.958 597 85.7796 327 304C57.0002 522.22 0 357.553 0 357.553V-76Z"
            fill="#DAEDFE"
          />
        </svg>
      </div>

      <div className="mt-25 mb-60 flex min-h-screen flex-col items-center justify-center text-center">
        <div className="text-ptso-purple-secondary mb-4 inline-block border-b-5 font-[Be_Vietnam_Pro] text-9xl font-extrabold">
          404
        </div>

        <div className="bg-tso-purple-secondary mb-4 h-1 w-40"></div>
        <p className="text-ptso-purple-accent mb-8 text-2xl">
          Oops! The page you are looking for cannot be found.
        </p>

        <Link
          href="/"
          className="bg-ptso-purple-secondary z-10 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-xl text-white transition-all duration-300 ease-in-out hover:scale-105"
        >
          Return home
          <span className="text-xl"> →</span>
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          width="full"
          height="auto"
          viewBox="0 0 1440 618"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 521.352H0V245.719C0 245.719 201.5 423.352 316.5 310.352C431.5 197.352 543 165.852 690.5 234.852C838 303.852 1065.3 201.541 1190.5 100.352C1460.5 -117.869 1440 87.7984 1440 87.7984V521.352Z"
            fill="#B06985"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          width="full"
          height="auto"
          viewBox="0 0 1440 522"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 618H-0.00012207V217.719C-0.00012207 217.719 130.5 382.31 410 230.852C689.5 79.3932 843 331.572 1113 113.352C1383 -104.869 1440 59.7983 1440 59.7983V618Z"
            fill="#FFEDED"
          />
        </svg>
      </div>
    </div>
  );
};

export default Redirect;
