import type { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { type FC } from "react";
import { SignOutButton } from "~/app/api/auth/_components/AuthButtons";
import { buttonVariants } from "../ui/button";

interface UserNavProps {
  user: Pick<User, "name" | "image" | "email"> | null;
}

const UserNav: FC<UserNavProps> = ({ user }) => {
  return (
    <div className="flex items-center gap-4">
      <Link
        className={buttonVariants({
          className: "flex items-center gap-1.5",
          variant: "ghost",
        })}
        href="/account"
      >
        <Image
          className="rounded-full"
          src={user?.image ?? ""}
          alt={user?.name ?? ""}
          width={40}
          height={40}
        />
        <div>
          <h4 className="text-sm font-medium">{user?.name}</h4>
          <p className="text-xs text-muted-foreground">{user?.email}</p>
        </div>
      </Link>

      <SignOutButton />
    </div>
  );
};

export default UserNav;
