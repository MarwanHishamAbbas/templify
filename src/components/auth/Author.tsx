import Image from "next/image";
import { type FC } from "react";
import { api } from "~/trpc/server";

interface AuthorProps {
  userId: string;
}

const Author: FC<AuthorProps> = async ({ userId }) => {
  const author = await api.auth.getUserById(userId);
  return (
    <div className=" flex items-center gap-1.5">
      <Image
        className="rounded-full"
        src={author?.image ?? ""}
        alt={author?.name ?? ""}
        width={35}
        height={35}
      />
      <h4 className="text-sm font-medium text-muted">{author?.name}</h4>
    </div>
  );
};

export default Author;
