import Link from "next/link";
import { type FC } from "react";
import { buttonVariants } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  link: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, link }) => {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-xl font-semibold lg:text-4xl">{title}</h2>
      <hr className="flex-1" />
      <Link
        href={link}
        className={buttonVariants({
          variant: "secondary",
          size: "sm",
          className: "!rounded-full !text-xs",
        })}
      >
        Browse All
        <ArrowUpRight className="size-5" />
      </Link>
    </div>
  );
};

export default SectionHeading;
