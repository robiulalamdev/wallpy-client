import React from "react";

const SingleChat = ({ chat, open, setOpen }) => {
  return (
    <div
      onClick={() => setOpen(!open)}
      className="single-chat-container d-flex gap-2"
    >
      <img src={chat?.img} alt="" />
      <div className="w-100">
        <div className="d-flex justify-content-between align-items-center w-100">
          <h1 className="chat-username">{chat?.name}</h1>
          <p className="chat-time">{chat?.time}</p>
        </div>
        <p className="chat-last-message mt-2">{chat?.lastMessage}</p>
      </div>
    </div>
  );
};

export default SingleChat;
