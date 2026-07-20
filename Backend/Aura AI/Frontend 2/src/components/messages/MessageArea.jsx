import React, { useRef, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import ChatBubble from "./ChatBubble";

const MessageArea = ({ messages, streamingMessage, loading }) => {
  const bottomRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "auto",
    });
  }, [messages, streamingMessage, loading]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    // If user is more than 100px away from bottom
    const distanceFromBottom =
      scrollHeight - scrollTop - clientHeight;

    setShowScrollButton(distanceFromBottom > 100);
  };

  return (
    <div
      onScroll={handleScroll}
      className=" min-h-0 flex-1 overflow-y-auto no-scrollbar"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-15 px-0 py-6 sm:px-6">
        {messages.map((message) => (
          <ChatBubble
            key={message._id}
            role={message.role}
            content={message.content}
          />
        ))}

        {loading && <ChatBubble role="assistant" loading />}

        {!loading && streamingMessage && (
          <ChatBubble role="assistant" content={streamingMessage} />
        )}

        <div ref={bottomRef} />
      </div>

      {/* make it visible and center */}

      {showScrollButton && (
        <button
          onClick={() =>
            bottomRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="absolute bottom-40 left-[50%] z-100 -translate-x-1/2 rounded-full border border-[#ECE9F8] bg-white p-2 shadow-lg transition hover:scale-105 dark:border-[#2A2740] dark:bg-[#17141F]"
        >
          <ChevronDown size={20} />
        </button>
      )}
    </div>
  );
};

export default MessageArea;