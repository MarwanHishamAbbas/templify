import type { User } from "@prisma/client";
import Image from "next/image";

import { type FC } from "react";
import { SignOutButton } from "~/app/api/auth/_components/AuthButtons";

interface UserNavProps {
  user: Pick<User, "name" | "image" | "email"> | null;
}

const UserNav: FC<UserNavProps> = ({ user }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1.5">
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
      </div>

      <SignOutButton />
    </div>
  );
};

export default UserNav;
