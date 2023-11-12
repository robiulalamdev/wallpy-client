import React, { useState } from "react";
import "../../styles/messages.css";
import SidebarChats from "../../components/message-ui/SidebarChats";
import MessageConversationArea from "../../components/message-ui/MessageConversationArea";
import { leftArrow } from "../../utils/icons/global_icons";

const Messages = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <div className="container message-container">
      <h1 className="title">Messages</h1>
      <hr style={{ border: "1px solid #5A5A5A" }} />
      <div className="mb-4 mx-auto mx-md-0" style={{ width: "295px" }}>
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
      <div className="msg-left-arrow d-lg-none">{leftArrow}</div>
      <section
        className="d-flex justify-content-between gap-5 h-100"
        style={{ maxHeight: "620px" }}
      >
        <div
          className={`${
            open ? "d-none d-lg-block" : "d-block"
          } message-sidebar d-flex flex-column align-items-center gap-4 sw-full`}
        >
          <SidebarChats open={open} setOpen={setOpen} />
        </div>
        <MessageConversationArea open={open} setOpen={setOpen} />
      </section>
    </div>
  );
};

export default Messages;
