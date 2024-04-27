import { type FC } from "react";
import ProductContent from "~/components/product/ProductDetails/ProductContent";
import ProductHero from "~/components/product/ProductDetails/ProductHero";
import { api } from "~/trpc/server";

interface PageProps {
  params: {
    productId: string;
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const { productId } = params;

  const product = await api.product.getProductById(parseInt(productId));
  if (!product) return;

  return (
    <div className="space-y-4">
      <ProductHero product={product} />
      <ProductContent
        description={product.description}
        paid={product.paid}
        price={product.price ?? 0}
      />
    </div>
  );
};

export default Page;
