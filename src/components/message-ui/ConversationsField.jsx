import React from "react";
import SingleMessage from "./SingleMessage";

const ConversationsField = () => {
  return (
    <div
      className="flex-grow h-100 p-2 d-flex flex-column justify-content-end"
      style={{ overflowY: "auto" }}
    >
      <SingleMessage />
    </div>
  );
};

export default ConversationsField;
