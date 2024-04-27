import React from "react";
import CategoriesList from "~/components/category/CategoriesList";
import SectionHeading from "~/components/common/SectionHeading";

const CategoriesPage = () => {
  return (
    <main>
      <SectionHeading title="Top Categories" />
      <CategoriesList />
    </main>
  );
};

export default CategoriesPage;
