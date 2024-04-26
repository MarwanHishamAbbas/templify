"use client";

import React from "react";
import { Button } from "~/components/ui/button";
import { createProductSchema } from "~/lib/validator/product";
import { useRouter, useSearchParams } from "next/navigation";
const ProductFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  return (
    <div className="flex flex-wrap gap-2">
      {createProductSchema.shape.category._def.values.map((category, idx) => (
        <Button
          key={idx}
          variant={categoryParam === category ? "default" : "secondary"}
          size={"sm"}
          className="rounded-full"
          onClick={() => router.replace(`/products?category=${category}`)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ProductFilter;
