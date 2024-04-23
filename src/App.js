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
import PrivateRoute from "./Layout/PrivateRoute.js";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Signin />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/food-item-details" element={<FoodItem />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact-us" element={<Contactus />} />
        </Route>
        <Route path="/sign-in" element={<Signin />} />
      </Route>
      <Route path="/not-found" element={<NotFound />}></Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default App;
