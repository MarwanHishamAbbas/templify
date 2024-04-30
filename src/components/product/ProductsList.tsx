import { type FC } from "react";
import { type TQueryValidator } from "~/lib/validator/query";
import { api } from "~/trpc/server";

import ProductCard from "./ProductCard";

interface ProductsListProps {
  query: TQueryValidator;
  authorId?: string | null;
}

const ProductsList: FC<ProductsListProps> = async ({ query, authorId }) => {
  const { category, limit } = query;
  let products = await api.product.products({ category, limit });
  if (authorId) {
    products = await api.auth.getUserProducts(authorId);
  }
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {products.reverse().map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsList;
