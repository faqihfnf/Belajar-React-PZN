import React from "react";
import { Outlet } from "react-router";

export default function DataLayout() {
  return (
    <>
      <div>
        <h1>Ini Header</h1>
      </div>
      {/* Outlet digunakan untuk menampilkan child component / component-component yang ada sebagai nested router  */}
      <Outlet />
      <div>
        <h1>Ini Footer</h1>
      </div>
    </>
  );
}
