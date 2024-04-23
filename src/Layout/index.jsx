import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutContainer, MainContainer } from "./component";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
