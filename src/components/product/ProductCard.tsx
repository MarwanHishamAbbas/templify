import { type Product } from "@prisma/client";
import { type FC } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

import Author from "../auth/Author";
import Link from "next/link";
interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <CardContent className="relative space-y-2 overflow-hidden">
        <Link key={product.id} href={`/products/${product.id}`}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={1000}
            height={1000}
            className="h-[150px] w-full rounded-lg object-cover"
          />
        </Link>

        <Button
          size={"sm"}
          variant={product.paid ? "default" : "secondary"}
          className="pointer-events-none absolute right-3 top-5 rounded-full !font-semibold"
        >
          {product.paid ? "Pro" : "Free"}
        </Button>
        <div className="flex items-center justify-between">
          <Author userId={product.authorId} />
          <p className="font-semibold text-muted">
            ${product.paid ? product.price : 0}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold capitalize">{product.name}</h1>
          <p className="text-muted-foreground">{product.category}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
