import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/index.jsx";
import Contactus from "./pages/Contact";
import Signin from "./pages/Signin/index.jsx";
import Aboutus from "./pages/Aboutus/index.jsx";
import FoodItem from "./pages/FoodItem/index.js";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/food-item-details"
        element={
          <Layout>
            <FoodItem />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <Aboutus />
          </Layout>
        }
      />
      <Route
        path="/contact-us"
        element={
          <Layout>
            <Contactus />
          </Layout>
        }
      />
      <Route
        path="/sign-in"
        element={
          <Layout>
            <Signin />
          </Layout>
        }
      />

      <Route path="/not-found" element={<NotFound />}></Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default App;
