import React from "react";
import { useImmer } from "use-immer";

const initialData = {
  name: "",
  message: "",
};
export default function ContactFormWithImmer() {
  const [contact, setContact] = useImmer(initialData);
  function handleChangeName(e) {
    //draft method bawaan dari immer untuk menggantikan spread syntax
    setContact((draft) => {
      draft.name = e.target.value;
    });
  }
  function handleChangeMessage(e) {
    setContact((draft) => {
      draft.message = e.target.value;
    });
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
