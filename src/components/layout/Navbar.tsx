import { getServerAuthSession } from "~/server/auth";
import { Card } from "../ui/card";
import TemplifyLogo from "~/assets/logo";
import { Download, Menu, PackagePlus } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Compass, Home, Tag, Users, Verified, Zap } from "lucide-react";

import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

import UserNav from "../auth/UserNav";
import type { User } from "@prisma/client";
import Image from "next/image";
import {
  SignInButton,
  SignOutButton,
} from "~/app/api/auth/_components/AuthButtons";

const Navbar = async ({}) => {
  const session = await getServerAuthSession();

  return (
    <Card className="flex h-16 items-center justify-between">
      <TemplifyLogo />
      {/* Desktop Version */}
      <div className="hidden lg:block">
        {!session?.user ? (
          <div className="flex items-center gap-4">
            <SignInButton />

            <Link
              className={buttonVariants({ variant: "ghost" })}
              href="submit"
            >
              <Download className="size-5" />
              Submit Your Template
            </Link>
          </div>
        ) : (
          <UserNav user={session.user as User} />
        )}
      </div>
      {/* Mobile Version */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="space-y-4">
              {session?.user && <SignOutButton />}
              {session?.user ? (
                <div className="flex items-center gap-1.5">
                  <Image
                    className="rounded-full"
                    src={session?.user?.image ?? ""}
                    alt={session?.user?.name ?? ""}
                    width={40}
                    height={40}
                  />
                  <div>
                    <h4 className="text-sm font-medium">
                      {session?.user?.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {session?.user?.email}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <SignInButton />
                  <SheetClose asChild>
                    <Link
                      className={buttonVariants({ variant: "ghost" })}
                      href="submit"
                    >
                      <Download className="size-5" />
                      Submit Your Template
                    </Link>
                  </SheetClose>
                </div>
              )}
              <div className="space-y-4">
                <SheetClose asChild>
                  <Link
                    href="/create-product"
                    className={buttonVariants({ className: "w-full" })}
                  >
                    <PackagePlus className="size-5" />
                    Create Product
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/"
                    className={buttonVariants({
                      variant: "ghost",
                      className: "w-full !justify-start",
                    })}
                  >
                    <Home className="size-5" />
                    Home
                  </Link>
                </SheetClose>
                <hr className="my-2" />
                <SheetClose asChild>
                  <Link
                    href="/products"
                    className={buttonVariants({
                      variant: "ghost",
                      className: "w-full !justify-start",
                    })}
                  >
                    <Compass className="size-5" />
                    Explore Templates
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/products"
                    className={buttonVariants({
                      variant: "ghost",
                      className: "w-full !justify-start",
                    })}
                  >
                    <Zap className="size-5" />
                    Latest Products
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/categories"
                    className={buttonVariants({
                      variant: "ghost",
                      className: "w-full !justify-start",
                    })}
                  >
                    <Verified className="size-5" />
                    All Categories
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/authors"
                    className={buttonVariants({
                      variant: "ghost",
                      className: "w-full !justify-start",
                    })}
                  >
                    <Users className="size-5" />
                    Our Authors
                  </Link>
                </SheetClose>
                <Button size={"lg"} className="w-full">
                  <Tag className="size-5" />
                  All Access Pack
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
};

export default Navbar;
