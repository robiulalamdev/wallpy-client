import React, { useState } from "react";
import ASCTwoTab from "./ASCTwoTab";

const ACSPrivacyTab = () => {
  const [profileVTab, setProfileVTab] = useState(0);
  return (
    <div className="w-100 h-100">
      <ASCTwoTab
        label="Profile Visibility"
        tabs={["Visible", "Hidden"]}
        setTab={setProfileVTab}
        tab={profileVTab}
      />
      <ASCTwoTab
        label="Messaging"
        tabs={["Visible", "Hidden"]}
        setTab={setProfileVTab}
        tab={profileVTab}
      />

      <div className="d-flex flex-column align-items-center justify-content-center gap-5 mt-5">
        <button className="profile-save-btn">Save</button>
      </div>

      <hr className="my-5" style={{ border: "1px solid #5A5A5A" }} />
      <div className="d-flex flex-column align-items-center justify-content-center gap-5 mt-5">
        <h1 className="delete-account-title">Delete Account</h1>
        <button className="profile-delete-btn">Delete</button>
      </div>
      <p className="profile-p text-center mt-5">
        Please be aware that account deletion is a permanent action, and it will
        result in the complete erasure of all your data from our servers.
      </p>
    </div>
  );
};

export default ACSPrivacyTab;
