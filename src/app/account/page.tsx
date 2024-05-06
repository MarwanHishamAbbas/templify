import { type User } from "@prisma/client";
import { Edit } from "lucide-react";
import React from "react";
import AuthorCard from "~/components/auth/AuthorCard";
import ProductsList from "~/components/product/ProductsList";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { getServerAuthSession } from "~/server/auth";
import AccountSummary from "./_components/AccountSummary";

const AccountPage = async () => {
  const session = await getServerAuthSession();
  return (
    <main>
      <Card>
        <CardContent className="space-y-10">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <AuthorCard author={session?.user as User} />
            <div className=" space-y-4">
              <p className="font-medium lg:text-xl">
                We&apos;re Open for Any Framer Project You Have. Let Collaborate
                with us!
              </p>
              <Button className="w-full" size={"lg"}>
                Hire Us Now!
              </Button>
            </div>
          </div>
          <hr />
          <AccountSummary
            content="<h1>Hello, Marwan</h1>"
            userId={session?.user.id}
          />

          <hr />
          <ProductsList authorId={session?.user.id} query={{}} />
        </CardContent>
      </Card>
    </main>
  );
};

export default AccountPage;
