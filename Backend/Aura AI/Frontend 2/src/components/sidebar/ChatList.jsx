import React, { useMemo } from "react";
import ChatGroup from "./ChatGroup";

const GROUP_ORDER = [
  "Today",
  "Yesterday",
  "Previous 7 days",
  "Previous 30 days",
  "Older",
];

const startOfDay = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

// buckets a chat's lastActivity into one of the labels above
const getDateGroup = (lastActivity) => {
  if (!lastActivity) return "Older";

  const today = startOfDay(new Date());
  const target = startOfDay(new Date(lastActivity));
  const diffDays = Math.round((today - target) / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays <= 7) return "Previous 7 days";
  if (diffDays <= 30) return "Previous 30 days";
  return "Older";
};

const ChatList = ({ chats, collapsed, isLoading, error, ...itemProps }) => {
  const grouped = useMemo(() => {
    const list = [...chats]
      // normalize whatever id field the record uses (_id from the API, id if created locally)
      .map((chat) => ({
        id: chat.id ?? chat._id,
        title: chat.title,
        lastActivity: chat.lastActivity,
      }))
      .sort((a, b) => new Date(b.lastActivity) - new Date(a.lastActivity));

    const map = {};
    for (const chat of list) {
      const group = getDateGroup(chat.lastActivity);
      if (!map[group]) {
        map[group] = [];
      }
      map[group].push(chat);
    }
    return map;
  }, [chats]);

  return (
    <div className="h-full overflow-y-auto no-scrollbar px-2 pb-3">
      {isLoading && chats.length === 0 && (
        <div className="flex flex-col gap-1.5 px-2 pt-3">
          {[0, 1, 2, 3, 4].map((row) =>
            collapsed ? (
              <div
                key={row}
                className="mx-auto h-9 w-9 animate-pulse rounded-lg bg-[#F1EFFC] dark:bg-[#211D2E]"
              />
            ) : (
              <div
                key={row}
                className="h-8 w-full animate-pulse rounded-xl bg-[#F1EFFC] dark:bg-[#211D2E]"
              />
            )
          )}
        </div>
      )}

      {!isLoading && error && !collapsed && (
        <p className="font-body px-2.5 pt-6 text-center text-[12.5px] text-[#E24C4C] dark:text-[#F29B9B]">
          {error}
        </p>
      )}

      {!isLoading && !error && chats.length === 0 && !collapsed && (
        <p className="font-body px-2.5 pt-6 text-center text-[12.5px] text-[#B2AEC4] dark:text-[#5C5772]">
          No chats yet — start a new one.
        </p>
      )}

      {GROUP_ORDER.filter((group) => grouped[group]?.length).map((group) => (
        <ChatGroup
          key={group}
          label={group}
          chats={grouped[group]}
          collapsed={collapsed}
          {...itemProps}
        />
      ))}
    </div>
  );
};

export default ChatList;
