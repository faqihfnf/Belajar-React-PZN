import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import GuestBook from "./GUestBook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GuestBook />
  </StrictMode>
);
