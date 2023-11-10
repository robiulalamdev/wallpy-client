import React, { useState } from "react";
import MediaCenterSidebar from "../../components/medial-center-ui/MediaCenterSidebar";
import MediaCenterContentArea from "../../components/medial-center-ui/MediaCenterContentArea";
import "../../styles/mediaCenter.css";

const MediaCenter = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="container mc-container">
      <h1 className="title">The Command Center</h1>
      <hr style={{ border: "1px solid #5A5A5A" }} />
      <p className="mc-container-p">
        All favorite wallpapers and collections will be displayed on your public
        profile unless you make privacy adjustments within the command center.
      </p>
      <div className="mb-4" style={{ width: "295px" }}>
        <div className="mc-tab-container d-flex justify-content-around align-items-center mx-auto">
          {["Favorites", "Collections"]?.map((t, i) => (
            <button
              onClick={() => setSelectedTab(i)}
              className={`${
                selectedTab === i ? "mc-active-btn" : "mc-dactive-btn"
              }`}
              key={i}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <section
        className="d-flex justify-content-between gap-5"
        style={{ height: "620px" }}
      >
        <div className="mc-sidebar d-flex flex-column align-items-center gap-4">
          <MediaCenterSidebar open={selectedTab} />
        </div>
        <MediaCenterContentArea open={selectedTab} />
      </section>
    </div>
  );
};

export default MediaCenter;
