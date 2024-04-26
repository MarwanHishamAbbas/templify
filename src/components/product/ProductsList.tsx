import { type FC } from "react";
import { type TQueryValidator } from "~/lib/validator/query";
import { api } from "~/trpc/server";

import ProductCard from "./ProductCard";

interface ProductsListProps {
  query: TQueryValidator;
}

const ProductsList: FC<ProductsListProps> = async ({ query }) => {
  const { category, limit } = query;
  const products = await api.product.products({ category, limit });
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsList;
