import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};

export default AppRoutes;
