import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import Customer from "./Customer.jsx";
import Seller from "./Seller.jsx";
import Data from "./Data.jsx";
import DataLayout from "./DataLayout.jsx";
import ProductDetail from "./ProductDetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Nested Route */}
        <Route path="/data" element={<DataLayout />}>
          <Route index element={<Data />} />
          {/* routenya adalah = /data/product */}
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="customer" element={<Customer />} />
          <Route path="seller" element={<Seller />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
