import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ContactForm from "./ContactForm";
import ContactFormWithImmer from "./ContactFormWithImmer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactForm />
    <br />
    <ContactFormWithImmer />
  </StrictMode>
);
