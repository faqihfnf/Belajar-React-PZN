import React, { useState } from "react";

const initialData = {
  name: "",
  message: "",
};
export default function ContactForm() {
  const [contact, setContact] = useState(initialData);

  function handleChangeName(e) {
    setContact({ ...contact, name: e.target.value });
  }
  function handleChangeMessage(e) {
    setContact({ ...contact, message: e.target.value });
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input type="text" placeholder="name" value={contact.name} onChange={handleChangeName} />
        <input type="text" placeholder="message" value={contact.message} onChange={handleChangeMessage} />
      </form>
      <h1>Contact Detail</h1>
      <p>Name: {contact.name}</p>
      <p>Message: {contact.message}</p>
    </div>
  );
}
