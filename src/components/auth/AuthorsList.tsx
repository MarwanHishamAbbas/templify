import React, { type FC } from "react";
import { Card, CardContent } from "../ui/card";

import { api } from "~/trpc/server";
import Link from "next/link";
import AuthorCard from "./AuthorCard";

interface AuthorListProps {
  limit: number;
}

const AuthorsList: FC<AuthorListProps> = async ({ limit }) => {
  const allAuthors = await api.auth.getAllUsers(limit);

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {allAuthors.reverse().map((author) => (
        <Link key={author.id} href={`/authors/${author.id}`}>
          <Card>
            <CardContent>
              <AuthorCard author={author} />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default AuthorsList;
