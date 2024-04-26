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
    <Link key={product.id} href={`/products/${product.id}`}>
      <Card>
        <CardContent className="relative space-y-2">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="h-[150px] w-full rounded-lg object-cover"
          />
          <Button
            size={"sm"}
            variant={product.paid ? "default" : "secondary"}
            className="pointer-events-none absolute right-3 top-5 rounded-full !font-semibold"
          >
            {product.paid ? "Pro" : "Free"}
          </Button>
          <Author userId={product.authorId} />
          <h1 className="text-lg font-semibold capitalize">{product.name}</h1>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
