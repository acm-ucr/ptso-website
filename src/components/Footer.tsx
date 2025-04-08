import { footer } from "@/data/FooterLinks";
import Link from "next/link";
import ptsoLogo from "@/public/ptsoLogo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mx-4 mt-5">
      <div className="items-center justify-between justify-items-center p-4 text-3xl md:flex md:text-3xl">
        <div className="flex tracking-widest">
          <Image src={ptsoLogo} alt="Image" width={60} height={60} />
          <div className="m-3 mt-8 text-2xl font-semibold md:m-5 md:mt-7 md:text-3xl">
            PTSO
          </div>
        </div>
        <div className="hidden grid-cols-2 justify-center space-x-5 divide-x-2 md:grid">
          <div className="flex flex-row items-center space-x-5">
            {footer.slice(0, 2).map(({ link, icon }, index) => (
              <Link
                className="transition ease-in-out hover:-translate-y-1"
                key={index}
                href={link}
                target="_blank"
              >
                {icon}
              </Link>
            ))}
          </div>
          <div className="item-center flex flex-col justify-center space-y-3 text-xl">
            {footer.slice(2).map(({ link, name }, index) => (
              <Link
                className="transition ease-in-out hover:-translate-y-1"
                key={index}
                href={link}
                target="_blank"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-row space-x-5 md:hidden">
          {footer.map(({ link, icon }, index) => (
            <Link
              className="transition ease-in-out hover:-translate-y-1"
              key={index}
              href={link}
              target="_blank"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
