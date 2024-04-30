import { type User } from "@prisma/client";
import { Download, Zap } from "lucide-react";
import Image from "next/image";
import { type FC } from "react";

interface AuthorCardProps {
  author: User | null;
}

const AuthorCard: FC<AuthorCardProps> = ({ author }) => {
  return (
    <div className="flex basis-full items-start gap-6">
      <Image
        src={author?.image ?? ""}
        width={100}
        height={100}
        className="rounded-full"
        alt="Author"
      />
      <div>
        <h4 className="text-lg font-semibold lg:text-2xl">{author?.name}</h4>
        <p className="mb-2 mt-1 text-sm text-muted-foreground lg:text-base">
          {author?.email}
        </p>
        <div className="flex flex-col gap-4 text-xs text-muted-foreground md:text-sm lg:flex-row lg:items-center">
          <div className="flex items-center gap-1">
            <Zap className="size-5 text-primary" />
            <p>36+ Products</p>
          </div>
          <div className="flex items-center gap-1">
            <Download className="size-5 text-primary" />
            <p>Over 4580+ Downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
