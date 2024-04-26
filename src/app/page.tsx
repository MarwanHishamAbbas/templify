import CategoriesList from "~/components/category/CategoriesList";
import SectionHeading from "~/components/common/SectionHeading";
import ProductsList from "~/components/product/ProductsList";
import Hero from "~/components/ui/Hero";

export default async function Home() {
  return (
    <main>
      <Hero />
      <div>
        <SectionHeading title="Top Categories" link="/categories" />
        <CategoriesList />
      </div>
      <div>
        <SectionHeading title="Latest Products" link="/products" />
        <ProductsList query={{ limit: 3, category: null }} />
      </div>
    </main>
  );
}
