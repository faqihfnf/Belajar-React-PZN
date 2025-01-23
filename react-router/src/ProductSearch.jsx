import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function ProductSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  function handleSearch(e) {
    if (search) {
      navigate({
        pathname: "/data/product/search",
        search: `?search=${search}`,
      });
    }
  }

  return (
    <>
      <h1>Product Search</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <p>kamu mencari : {searchParams.get("search")}</p>
    </>
  );
}
