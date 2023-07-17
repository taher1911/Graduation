import React from "react";

type Props = {
  className: string;
  children: any;
};

const Layout = ({ children, className = "" }: Props) => {
  return <div className={`  ${className}`}>{children}</div>;
};

export default Layout;
