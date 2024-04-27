import { type FC } from "react";
import ProductHero from "~/components/product/ProductHero";
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
    <main>
      <ProductHero product={product} />
    </main>
  );
};

export default Page;
