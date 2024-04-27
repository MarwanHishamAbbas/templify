import { type FC } from "react";
import { Card, CardContent } from "~/components/ui/card";

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: FC<ProductDescriptionProps> = ({ description }) => {
  return (
    // To Be MDX Later
    <Card className="basis-full">
      <CardContent>
        <article
          className="prose-sm prose-headings:text-muted prose-p:text-muted"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CardContent>
    </Card>
  );
};

export default ProductDescription;
