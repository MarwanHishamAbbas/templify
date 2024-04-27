import { Download, Sparkle } from "lucide-react";
import { type FC } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

interface ProductPriceProps {
  priceData: {
    paid: boolean;
    price?: number;
  };
}

const ProductPrice: FC<ProductPriceProps> = ({ priceData }) => {
  const { paid, price } = priceData;
  return (
    <Card className=" -order-1 w-full lg:order-2 lg:basis-1/3">
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sparkle className="size-5 text-primary" />
            <p className="font-medium text-muted">Unlimited Website Usage</p>
          </div>
          <div className="flex items-center gap-2">
            <Sparkle className="size-5 text-primary" />
            <p className="font-medium text-muted">30 Day Money-back</p>
          </div>
          <div className="flex items-center gap-2">
            <Sparkle className="size-5 text-primary" />
            <p className="font-medium text-muted"> 1 Year Support</p>
          </div>
        </div>
        <Button size={"lg"} className="w-full">
          <Download className="size-5" />
          {paid ? `Download For $${price}` : "Download For Free"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductPrice;
