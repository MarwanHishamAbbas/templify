import { type PropsWithChildren, type FC } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={`basis-full `}>{children}</div>;
};

export default Layout;
