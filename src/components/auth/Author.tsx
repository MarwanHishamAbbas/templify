import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { api } from "~/trpc/server";
import { buttonVariants } from "../ui/button";

interface AuthorProps {
  userId: string;
}

const Author: FC<AuthorProps> = async ({ userId }) => {
  const author = await api.auth.getUserById(userId);
  return (
    <Link
      href={`/authors/${author?.id}`}
      className={buttonVariants({
        variant: "ghost",
        className: "flex items-center pl-0",
      })}
    >
      <Image
        className="rounded-full"
        src={author?.image ?? ""}
        alt={author?.name ?? ""}
        width={35}
        height={35}
      />
      <h4 className="text-sm font-medium text-muted">{author?.name}</h4>
    </Link>
  );
};

export default Author;
