import React, { useState } from "react";
import "../../styles/upload.css";
import UploadSidebar from "../../components/upload-ui/UploadSidebar";
import UploadContentArea from "../../components/upload-ui/UploadContentArea";
import TDTab from "../../components/common-ui/tabs/TDTab";

const Upload = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [images, setImages] = useState([]);
  return (
    <div className="container upload-container">
      <h1 className="title">The Vault</h1>
      <hr style={{ border: "1px solid #5A5A5A" }} />

      <div
        className="mb-4"
        style={{ maxWidth: "295px", height: "fit-content" }}
      >
        <TDTab
          label=""
          tabs={["Drafts", "Published"]}
          setTab={setSelectedTab}
          tab={selectedTab}
          className="mx-auto"
        />
      </div>
      <section
        className="d-flex justify-content-between gap-5"
        style={{ maxHeight: "620px" }}
      >
        <div className="upload-sidebar d-flex flex-column align-items-center gap-4 h-100">
          <UploadSidebar open={selectedTab} />
        </div>
        <UploadContentArea images={images} setImages={setImages} />
      </section>
    </div>
  );
};

export default Upload;
