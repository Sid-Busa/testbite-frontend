import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutContainer, MainContainer } from "./component";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
