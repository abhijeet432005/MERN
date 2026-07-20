import React from "react";
import ChatListItem from "./ChatListItem";

const ChatGroup = ({ label, chats, collapsed, ...itemProps }) => {
  return (
    <div className="flex flex-col gap-1">
      {!collapsed && (
        <p className="font-body px-2.5 pb-1 pt-3 text-[11px] font-600 uppercase tracking-[0.1em] text-[#B2AEC4] dark:text-[#5C5772]">
          {label}
        </p>
      )}

      {collapsed && <div className="mx-auto my-2 h-px w-6 bg-[#ECE9F8] dark:bg-[#2A2740]" />}

      <div className="flex flex-col gap-0.5">
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            collapsed={collapsed}
            {...itemProps}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatGroup;
