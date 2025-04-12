import Link from "next/link";

interface buttonProps {
  label: string;
  target: string;
  link: string;
}

const Button = ({ label, target, link }: buttonProps) => {
  return (
    <Link href={link} target={target} className="block">
      <div
        className={
          "px-6 py-2 text-center font-semibold transition duration-200 hover:opacity-90"
        }
      >
        {label}
      </div>
    </Link>
  );
};

export default Button;
