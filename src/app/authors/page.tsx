import React from "react";
import AuthorsList from "~/components/auth/AuthorsList";
import SectionHeading from "~/components/common/SectionHeading";

const AuthorsPage = () => {
  return (
    <main>
      <SectionHeading title="Our Authors" />
      <AuthorsList limit={10} />
    </main>
  );
};

export default AuthorsPage;
