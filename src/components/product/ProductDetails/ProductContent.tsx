import React, { type FC } from "react";

import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";

interface ProductContentProps {
  description: string;
  paid: boolean;
  price?: number;
}

const ProductContent: FC<ProductContentProps> = ({
  description,
  paid,
  price,
}) => {
  return (
    <div className="flex flex-col items-start gap-4 lg:flex-row">
      <ProductDescription description={description} />

      <ProductPrice priceData={{ paid, price }} />
    </div>
  );
};

export default ProductContent;
