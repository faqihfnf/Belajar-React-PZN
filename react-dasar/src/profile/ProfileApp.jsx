import React, { useState } from "react";
import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddress from "./PRofileAddress";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
  const [name, setName] = useState("Faqih");
  return (
    <>
      <ProfileContext.Provider value={name}>
        <h1>Profile App</h1>
        <ProfileForm name={name} setName={setName} />
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}
