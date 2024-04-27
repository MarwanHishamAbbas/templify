import type { Product } from "@prisma/client";
import { Eye, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import TemplifyLogo from "~/assets/logo";
import Author from "~/components/auth/Author";

import { Button, buttonVariants } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import Spinner from "../common/Spinner";

interface ProductHeroProps {
  product: Product | null;
}

const ProductHero: FC<ProductHeroProps> = ({ product }) => {
  if (!product) return <Spinner />;
  return (
    <Card>
      <CardContent>
        <div className="relative">
          <Button
            size={"sm"}
            variant={product?.paid ? "default" : "secondary"}
            className="pointer-events-none absolute right-3 top-3 rounded-full !font-semibold"
          >
            {product?.paid ? "Pro" : "Free"}
          </Button>
          <Image
            src={product?.imageUrl ?? ""}
            alt={product?.name ?? "Image"}
            width={1000}
            height={500}
            className=" h-[400px] w-full rounded-md object-cover object-top"
          />
          <Card className="absolute bottom-0 left-0 right-0 w-full rounded-md bg-secondary/70 backdrop-blur-md">
            <CardContent className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <TemplifyLogo textVisible={false} />
                  <h1 className="text-xl font-semibold lg:text-3xl">
                    {product?.name}
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-muted-foreground">Author: </p>
                  <Author userId={product?.authorId} />
                </div>
              </div>
              <div className="space-y-2">
                <Link
                  href={product?.demoLink ?? ""}
                  target="_blank"
                  className={buttonVariants({
                    variant: "secondary",

                    className: "w-full !rounded-full !text-muted",
                  })}
                >
                  <Eye className="size-5" />
                  See Live Demo
                </Link>
                <Link
                  href={product?.demoLink ?? ""}
                  target="_blank"
                  className={buttonVariants({
                    variant: "secondary",

                    className: "w-full !rounded-full !text-muted",
                  })}
                >
                  <Monitor className="size-5" />
                  See Screenshots
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductHero;
