import React from "react";
import ConversationsField from "./ConversationsField";

const MessageConversationArea = () => {
  return (
    <div className="message-conversation-area flex-grow d-flex flex-column justify-content-between gap-3 w-100 p-2 p-md-4">
      <ConversationsField />
      <div className="send-message-box d-flex justify-content-between align-items-center gap-3">
        <input
          className="flex-grow px-4"
          type="text"
          placeholder="Write a message..."
        />
        <button>SEND</button>
      </div>
    </div>
  );
};

export default MessageConversationArea;
