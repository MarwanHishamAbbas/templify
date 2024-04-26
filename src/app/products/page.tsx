import React, { type FC } from "react";
import ProductFilter from "~/components/product/ProductFilter";
import ProductsList from "~/components/product/ProductsList";
import { type createProductSchema } from "~/lib/validator/product";

interface ProductsPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

const ProductsPage: FC<ProductsPageProps> = ({ searchParams }) => {
  return (
    <main>
      <ProductFilter />
      <ProductsList
        query={{
          category:
            (searchParams?.category as typeof createProductSchema._type.category) ??
            undefined,
        }}
      />
    </main>
  );
};

export default ProductsPage;
