import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Compass, Home, Tag, Users, Verified, Zap } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";

const SideBar = ({}) => {
  return (
    <div className="hidden basis-1/5 lg:inline-block">
      <Card>
        <CardContent className="space-y-4">
          <Link href="/create-product" className={buttonVariants({})}>
            <Home className="size-5" />
            Create Product
          </Link>
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
          <hr className="my-2" />
          <Link
            href="/templates"
            className={buttonVariants({
              variant: "ghost",
              className: "w-full !justify-start",
            })}
          >
            <Compass className="size-5" />
            Explore Templates
          </Link>
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
          <Button size={"lg"} className="w-full">
            <Tag className="size-5" />
            All Access Pack
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SideBar;
