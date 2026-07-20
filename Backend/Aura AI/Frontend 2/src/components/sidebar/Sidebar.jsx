import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import SidebarHeader from "./SidebarHeader";
import ChatList from "./ChatList";
import UserProfile from "./UserProfile";
import NewChatModal from "./NewChatModal";
import axios from "../../api/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import {
  createChat,
  renameChat,
  deleteChat,
  resetChats,
  setActiveChat,
  setAllChats,
} from "../../store/reducers/chatSlice";
import { logout } from "../../store/reducers/authSlice";
import { resetMessages } from "../../store/reducers/messageSlice";

/**
 * Sidebar — fixed/overlay on mobile, static column on desktop.
 * Height is `h-full` (never `h-screen`) because its parent (`App`)
 * is the single element that owns `h-screen overflow-hidden`. This is
 * what stops the page itself from ever scrolling.
 */
const Sidebar = ({ collapsed, onToggle }) => {
  const [isNewChatModalOpen, setIsNewChatModalOpen] = useState(false);
  const [isLoadingChats, setIsLoadingChats] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const dispatch = useDispatch();
  const { chats, activeChatId } = useSelector((state) => state.chatSlice);

  const createNewChat = async (title) => {
    try {
      const response = await axios.post(
        "/chat/",
        { title },
        { withCredentials: true },
      );

      const chat = response.data.chat;
      // spread the full document (not just _id/title) so `lastActivity` is
      // present — otherwise the new chat sorted into "Older" instead of
      // landing at the top of "Today"
      dispatch(
        createChat({
          ...chat,
          lastActivity: chat.lastActivity ?? new Date().toISOString(),
        }),
      );

      if (window.innerWidth < 1024) onToggle(true);
    } catch (error) {
      console.error("Failed to create chat:", error);
    }
  };

  useEffect(() => {
    setIsLoadingChats(true);
    axios
      .get("/chat/allChats", { withCredentials: true })
      .then((response) => {
        dispatch(setAllChats(response.data.chats.reverse()));
        setLoadError(null);
      })
      .catch((error) => {
        console.error("Failed to load chats:", error);
        setLoadError("Couldn't load your chats.");
      })
      .finally(() => setIsLoadingChats(false));
  }, [dispatch]);

  const handleSelect = (id) => {
    dispatch(setActiveChat(id));
    if (window.innerWidth < 1024) onToggle(true);
  };

  const handleRename = async (id, title) => {
    return
    // dispatch(renameChat({ id, title })); // optimistic
    // console.log("Renaming chat with ID:", id, "to title:", title);
    // try {
    //   const response = await axios.patch(`/chat/${id}`, { title }, { withCredentials: true });
    //   console.log("Chat renamed successfully:", response.data);
    // } catch (error) {
    //   console.error("Failed to rename chat:", error);
    // }
  };

  const handleDelete = async (id) => {
    dispatch(deleteChat(id)); // optimistic
    try {
      await axios.delete(`/chat/${id}`, { withCredentials: true });
    } catch (error) {
      console.error("Failed to delete chat:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout", {}, { withCredentials: true });
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      // clear client state regardless of whether the request succeeded —
      // the user expects to be logged out locally either way
      dispatch(logout());
      dispatch(resetChats());
      dispatch(resetMessages());
    }
  };

  return (
    <>
      {!collapsed && (
        <div
          onClick={() => onToggle(true)}
          className="fixed inset-0 z-30 bg-[#1C1A27]/30 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {collapsed && (
        <button
          type="button"
          onClick={() => onToggle(false)}
          className="fixed left-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-xl border border-[#ECE9F8] bg-white text-[#5847E0] shadow-md dark:border-[#2A2740] dark:bg-[#17141F] dark:text-[#B7AEF0] lg:hidden"
        >
          <Menu size={17} strokeWidth={2.25} />
        </button>
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-full flex-col overflow-hidden border-r border-[#ECE9F8] bg-[#FCFCFF] transition-all duration-300 ease-in-out dark:border-[#211D2E] dark:bg-[#141020] lg:static lg:z-auto ${
          collapsed
            ? "w-[76px] -translate-x-full lg:translate-x-0"
            : "w-[272px] translate-x-0"
        }`}
      >
        <SidebarHeader
          collapsed={collapsed}
          onToggle={() => onToggle(!collapsed)}
          onNewChat={() => setIsNewChatModalOpen(true)}
        />

        <div className="mt-2 min-h-0 flex-1">
          <ChatList
            chats={chats}
            collapsed={collapsed}
            activeId={activeChatId}
            isLoading={isLoadingChats}
            error={loadError}
            onSelect={handleSelect}
            onRename={handleRename}
            onDelete={handleDelete}
          />
        </div>

        <UserProfile collapsed={collapsed} onLogout={handleLogout} />
      </aside>

      <NewChatModal
        open={isNewChatModalOpen}
        onClose={() => setIsNewChatModalOpen(false)}
        onCreate={createNewChat}
      />
    </>
  );
};

export default Sidebar;
