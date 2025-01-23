import React from "react";
import { NavLink, Outlet } from "react-router";
import "./data.css";

export default function DataLayout() {
  return (
    <>
      <div>
        <h1>Ini Header</h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/data/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/data/seller">Seller</NavLink>
          </li>
          <li>
            <NavLink to="/data/customer">Customer</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: "/data/product", search: "?id=1", hash: "#test" }}>Product</NavLink>
          </li>
        </ul>
      </div>
      {/* Outlet digunakan untuk menampilkan child component / component-component yang ada sebagai nested router  */}
      <div>
        {" "}
        <Outlet />
      </div>
      <div>
        <h1>Ini Footer</h1>
      </div>
    </>
  );
}
