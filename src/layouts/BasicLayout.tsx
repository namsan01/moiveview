import React, { ReactNode } from "react";
import BasicHeader from "./basic/BasicHeader";
import BasicFooter from "./basic/BasicFooter";

const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BasicHeader />
      <main>{children}</main>
      <BasicFooter />
    </>
  );
};

export default BasicLayout;
