import React, { useState } from "react";
import "../../styles/messages.css";
import SidebarChats from "../../components/message-ui/SidebarChats";
import MessageConversationArea from "../../components/message-ui/MessageConversationArea";

const Messages = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="container message-container">
      <h1 className="title">Messages</h1>
      <hr style={{ border: "1px solid #5A5A5A" }} />
      width: 295px; height: 620px; flex-shrink: 0;
      <div className="mb-4" style={{ width: "295px" }}>
        <div className="message-tab-container d-flex justify-content-around align-items-center mx-auto">
          {["Inbox", "Sent"]?.map((t, i) => (
            <button
              onClick={() => setSelectedTab(i)}
              className={`${
                selectedTab === i ? "message-active-btn" : "message-dactive-btn"
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
        <div className="message-sidebar d-flex flex-column align-items-center gap-4">
          <SidebarChats />
        </div>
        <MessageConversationArea />
      </section>
    </div>
  );
};

export default Messages;
