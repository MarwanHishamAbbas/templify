import React from "react";
import { createProductSchema } from "~/lib/validator/product";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const CategoriesList = () => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {createProductSchema.shape.category._def.values.map((category, idx) => (
        <Card key={idx}>
          <CardContent>
            <Link
              className={buttonVariants({
                variant: "secondary",
                className: "!size-14 !rounded-full",
                size: "icon",
              })}
              href={`/products?cateogry=${category}`}
            >
              <ArrowUpRight className="text-primary" />
            </Link>
            <h3 className="mt-4 text-lg font-semibold">{category}</h3>
            <p className="text-muted-foreground">50+ Ready Made Templates</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CategoriesList;
