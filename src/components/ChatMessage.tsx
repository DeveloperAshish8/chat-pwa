import React from "react";

interface ChatMessageProps {
  message: {
    id: string;
    message: string;
    sender: {
      image: string;
      is_kyc_verified: boolean;
      self: boolean;
      user_id: string;
    };
    time: string;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div
      className={`${
        message.sender.self ? "ml-auto justify-end" : ""
      } flex w-full mt-2 space-x-2 `}
    >
      <div className={` ${message.sender.self ? "hidden" : "flex  mb-2"} `}>
        <img
          src={message.sender.image}
          alt="User Avatar"
          className="flex-shrink-0 min-h-7  min-w-7 max-h-7 max-w-7 rounded-full"
        />
      </div>

      <div
        className={`${
          message.sender.self
            ? "bg-[#1C63D5] text-white p-2 rounded-l-xl rounded-tr-lg w-[287px] shadow-3xl"
            : "bg-white text-[#606060] text-[14px] p-2 rounded-r-lg rounded-bl-xl w-[287px] shadow-3xl"
        }`}
      >
        <p
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: message.message }}
        ></p>
      </div>
    </div>
  );
};

export default ChatMessage;
