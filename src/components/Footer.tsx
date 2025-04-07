import { FOOTER } from "@/data/FooterLinks";
import Link from "next/link";
import ptsoLogo from "@/../public/ptsoLogo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mx-4 mt-5">
      <hr className="border-ptso-blue-accent border-t-4"></hr>
      <div className="items-center justify-between justify-items-center p-4 text-3xl md:flex md:text-3xl">
        <div className="flex tracking-widest">
          <Image src={ptsoLogo} alt="Image" width={60} height={60} />
          <p className="m-3 mt-8 text-2xl font-semibold md:m-5 md:mt-7 md:text-3xl">
            PTSO
          </p>
        </div>
        <div className="hidden h-24 grid-cols-2 justify-center space-x-5 divide-x-2 md:grid">
          <div className="flex flex-row items-center space-x-5">
            {FOOTER.slice(0, 2).map((social, index) => (
              <Link
                className="transition ease-in-out hover:-translate-y-1"
                key={index}
                href={social.link}
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <div className="item-center flex flex-col justify-center space-y-3 text-xl">
            {FOOTER.slice(4).map((social, index) => (
              <Link
                className="transition ease-in-out hover:-translate-y-1"
                key={index}
                href={social.link}
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-row space-x-5 md:hidden">
          {FOOTER.map((social, index) => (
            <Link
              className="transition ease-in-out hover:-translate-y-1"
              key={index}
              href={social.link}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
