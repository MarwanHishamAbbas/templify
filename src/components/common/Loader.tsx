import { Loader2 } from "lucide-react";
import { type FC } from "react";

interface LoaderProps {
  indicator: boolean;
}

const Loader: FC<LoaderProps> = ({ indicator }) => {
  return indicator && <Loader2 className="size-5 animate-spin" />;
};

export default Loader;
