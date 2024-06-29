import React, { useState, useEffect, useCallback, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
interface Message {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time: string;
}

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [fetchingMessages, setFetchingMessages] = useState(false);
  const [page, setPage] = useState(0);

  //data fetcing starts
  const fetchMessages = useCallback(async () => {
    try {
      setFetchingMessages(true);
      const response = await fetch(
        `https://qa.corider.in/assignment/chat?page=${page}`
      );
      const data = await response.json();

      if (data && Array.isArray(data.chats)) {
        setMessages((prev) => {
          const combinedMessages = [...prev, ...data.chats];
          return combinedMessages.sort(
            (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
          );
        });
      } else {
        console.error("Fetched data does not contain chats array", data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setFetchingMessages(false);
    }
  }, []);
  //data fetching ends

  //hiting API after every 5 seconds
  useEffect(() => {
    fetchMessages();

    const intervalId = setInterval(() => {
      if (!fetchingMessages) {
        fetchMessages();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [fetchMessages, fetchingMessages]);

  //page switching when scrolled
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop === 0) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="h-[98vh] flex flex-col flex-grow w-full max-w-xl  rounded-lg overflow-hidden">
      <div
        onScroll={handleScroll}
        className="flex flex-col-reverse flex-grow h-0 p-4 overflow-auto "
        style={{ maxHeight: "calc(100vh - 4rem)" }}
      >
        {messages
          .slice()
          .reverse()
          .map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
      </div>
      <div className="mt-auto">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatScreen;
