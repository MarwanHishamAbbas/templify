import { type FC } from "react";
import AuthorCard from "~/components/auth/AuthorCard";
import ProductsList from "~/components/product/ProductsList";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { api } from "~/trpc/server";

interface AuthorPageProps {
  params: {
    authorId: string | null;
  };
}

const AuthorPage: FC<AuthorPageProps> = async ({ params }) => {
  const { authorId } = params;
  const author = await api.auth.getUserById(authorId ?? "");

  return (
    <Card>
      <CardContent className="space-y-10">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <AuthorCard author={author} />
          <div className=" space-y-4">
            <p className="font-medium lg:text-xl">
              We&apos;re Open for Any Framer Project You Have. Let Collaborate
              with us!
            </p>
            <Button className="w-full" size={"lg"}>
              Hire Us Now!
            </Button>
          </div>
        </div>
        <hr />
        <article
          className="prose-sm prose-headings:text-muted prose-p:text-muted"
          dangerouslySetInnerHTML={{
            __html: author?.summary ?? "",
          }}
        />
        <hr />
        <ProductsList authorId={authorId} query={{}} />
      </CardContent>
    </Card>
  );
};

export default AuthorPage;
