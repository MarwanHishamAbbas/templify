import React, { type FC } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Download, Zap } from "lucide-react";
import { api } from "~/trpc/server";
import Link from "next/link";

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
            <CardContent className="flex items-start gap-6">
              <Image
                src={author.image ?? ""}
                width={100}
                height={100}
                className="rounded-full"
                alt="Author"
              />
              <div>
                <h4 className="text-lg font-semibold lg:text-2xl">
                  {author.name}
                </h4>
                <p className="mb-2 mt-1 text-sm text-muted-foreground lg:text-base">
                  {author.email}
                </p>
                <div className="flex flex-col gap-4 text-nowrap text-xs text-muted-foreground md:text-sm lg:flex-row lg:items-center">
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
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default AuthorsList;
