import Link from "next/link";
import Image from "next/image";

import rectangle1 from "@/public/assets/not-found/rectangle1.svg";
import rectangle2 from "@/public/assets/not-found/rectangle2.svg";
import rectangle3 from "@/public/assets/not-found/rectangle3.svg";
import rectangle4 from "@/public/assets/not-found/rectangle4.svg";

interface redirectProps {
  statusCode?: number;
}

const Redirect = ({ statusCode = 404 }: redirectProps) => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={rectangle1}
        alt="Redirect wave 1"
        className="absolute top-0 left-0 z-0 w-full"
      />

      <Image
        src={rectangle2}
        alt="Redirect wave 2"
        className="absolute top-0 left-0 z-0 w-full"
      />

      <div className="flex h-[72vh] md:min-h-screen flex-col items-center justify-center text-center">
        <div className="text-ptso-purple-secondary mb-4 inline-block border-b-5 font-beVietnamPro text-9xl font-extrabold">
          {statusCode}
        </div>

        <p className="text-ptso-purple-accent mb-8 text-2xl">
          Oops! The page you are looking for cannot be found.
        </p>

        <Link
          href="/"
          className="bg-ptso-purple-secondary z-10 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-xl text-white transition-all duration-300 ease-in-out hover:scale-105"
        >
          Return home
          <div className="text-xl"> →</div>
        </Link>
      </div>

      <Image
        src={rectangle3}
        alt="Redirect wave 3"
        className="absolute bottom-0 left-0 z-0 w-full"
      />

      <Image
        src={rectangle4}
        alt="Redirect wave 1"
        className="absolute bottom-0 left-0 z-0 w-full"
      />
    </div>
  );
};

export default Redirect;
