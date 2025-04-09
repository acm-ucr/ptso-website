import Link from "next/link";

interface buttonProps {
  label: string;
  target: string;
  link: string;
  bgColor: string;
  textColor: string;
  rounded: string;
}

const Button = ({
  label,
  target,
  link,
  bgColor,
  textColor,
  rounded,
}: buttonProps) => {
  return (
    <Link href={link} target={target} className="block">
      <div
        className={
          "${bgColor} ${textColor} ${rounded} px-6 py-2 text-center font-semibold transition duration-200 hover:opacity-90"
        }
      >
        {label}
      </div>
    </Link>
  );
};

export default Button;
