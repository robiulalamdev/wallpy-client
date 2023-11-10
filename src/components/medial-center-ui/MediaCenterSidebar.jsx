import React, { useState } from "react";

const MediaCenterSidebar = ({ open }) => {
  const [profileTab, setProfileTab] = useState("");
  return (
    <div className="d-flex flex-column justify-content-between p-3 h-100">
      {open === 0 && (
        <>
          <div>
            <h2 className="mc-sidebar-top-title">Select Wallpapers</h2>
            <div className="mc-sidebar-remove-container text-center mt-5">
              <h1>Remove from list</h1>
              <button className="mt-3">Remove</button>
            </div>
            <div className="hide-profile-container mt-5">
              <h1>Hide from profile</h1>
              <div className="mc-tab-container d-flex justify-content-around align-items-center mx-auto mt-3">
                {["Visible", "Hidden"]?.map((t, i) => (
                  <button
                    onClick={() => setProfileTab(t)}
                    className={`${
                      profileTab === t
                        ? `mc-active-btn ${
                            profileTab === "Visible"
                              ? "mc-btn-bg-visible"
                              : "mc-btn-bg-hide"
                          }`
                        : "mc-dactive-btn"
                    }`}
                    key={i}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <button className="cm-sidebar-save-btn">Save</button>
    </div>
  );
};

export default MediaCenterSidebar;
