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
        <article className="text-muted">{description}</article>
      </CardContent>
    </Card>
  );
};

export default ProductDescription;
