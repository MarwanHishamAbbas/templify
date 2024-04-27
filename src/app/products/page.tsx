import React, { type FC } from "react";
import SectionHeading from "~/components/common/SectionHeading";
import ProductFilter from "~/components/product/ProductFilter";
import ProductsList from "~/components/product/ProductsList";
import { type createProductSchema } from "~/lib/validator/product";

interface ProductsPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

const ProductsPage: FC<ProductsPageProps> = ({ searchParams }) => {
  return (
    <main>
      <SectionHeading title="Latest Products" />
      <div className="space-y-8">
        <ProductFilter />
        <ProductsList
          query={{
            category:
              (searchParams?.category as typeof createProductSchema._type.category) ??
              undefined,
          }}
        />
      </div>
    </main>
  );
};

export default ProductsPage;
