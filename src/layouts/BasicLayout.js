import React from "react";

import BasicHeader from "./basic/BasicHeader";
import BasicFooter from "./basic/BasicFooter";

// 객체 구조 분해 할당
const BasicLayout = ({ children }) => {
  return (
    <>
      <header>
        <BasicHeader />
      </header>

      <main>{children}</main>

      <footer>
        <BasicFooter />
      </footer>
    </>
  );
};

export default BasicLayout;
