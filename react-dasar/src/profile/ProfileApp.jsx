import React from "react";
import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddress from "./PRofileAddress";

export default function ProfileApp() {
  return (
    <>
      <ProfileContext.Provider value="Faqih">
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}
