import React, { useEffect, useState, useCallback, useRef } from "react";
import { LogIn, WifiOff } from "lucide-react";
import { Link } from "react-router-dom";
import MessageHomePage from "./MessageHomePage";
import MessageArea from "./MessageArea";
import MessageInput from "./MessageInput";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axiosConfig";
import { useSocket } from "../../context/SocketContext";
import {
  setMessages,
  appendStreamingMessage,
  finishStreamingMessage,
  addMessage,
  setLoading,
  clearStreaming,
} from "../../store/reducers/messageSlice";
import { createChat, touchChat } from "../../store/reducers/chatSlice";

const Messages = () => {
  const dispatch = useDispatch();
  const { socket, isConnected } = useSocket();

  const user = useSelector((state) => state.authSlice.user);
  const isAuthenticated = useSelector(
    (state) => state.authSlice.isAuthenticated,
  );
  const activeChatId = useSelector((state) => state.chatSlice.activeChatId);
  const { messages, streamingMessage, loading } = useSelector(
    (state) => state.messageSlice,
  );

  const [input, setInput] = useState("");
  const [notice, setNotice] = useState(null); // { type: "auth" | "offline" | "error", message }
  const [isCreatingChat, setIsCreatingChat] = useState(false);

  // guards against a message list fetch for chat A resolving after the
  // user has already switched to chat B
  const fetchTokenRef = useRef(0);

  /* -------------------------------------------------------------- */
  /*  Load the active chat's history, and clear any leftover         */
  /*  in-flight streaming state from whatever chat was open before   */
  /* -------------------------------------------------------------- */
  useEffect(() => {
    dispatch(clearStreaming());

    if (!activeChatId) {
      dispatch(setMessages([]));
      return;
    }

    const token = ++fetchTokenRef.current;

    const getMessages = async () => {
      try {
        const response = await axios.get(`/message/${activeChatId}`, {
          withCredentials: true,
        });
        if (fetchTokenRef.current !== token) return; // stale response, chat changed again
        dispatch(setMessages(response.data.messages));
      } catch (error) {
        if (fetchTokenRef.current !== token) return;
        setNotice({
          type: "error",
          message: "Couldn't load this conversation.",
        });
      }
    };

    getMessages();
  }, [activeChatId, dispatch]);

  /* -------------------------------------------------------------- */
  /*  Socket listeners — connection is owned by SocketContext, this  */
  /*  component just subscribes to the events it cares about         */
  /* -------------------------------------------------------------- */
  useEffect(() => {
    if (!socket) return;

    const handleAiResponse = (message) => {
      if (!message?.content) return;
      dispatch(setLoading(false));
      dispatch(appendStreamingMessage(message.content));
    };

    const handleAiComplete = () => {
      dispatch(finishStreamingMessage());
      if (activeChatId) dispatch(touchChat(activeChatId));
    };

    const handleUnauthorized = () => {
      dispatch(setLoading(false));
      setNotice({
        type: "auth",
        message: "Your session expired. Please log in again.",
      });
    };

    socket.on("ai-response", handleAiResponse);
    socket.on("ai-complete", handleAiComplete);
    socket.on("unauthorized", handleUnauthorized);
    socket.on("error", handleUnauthorized);

    return () => {
      socket.off("ai-response", handleAiResponse);
      socket.off("ai-complete", handleAiComplete);
      socket.off("unauthorized", handleUnauthorized);
      socket.off("error", handleUnauthorized);
    };
  }, [socket, dispatch, activeChatId]);

  /* -------------------------------------------------------------- */
  /*  Send flow                                                       */
  /*  1. auth/connection middleware gate                              */
  /*  2. no active chat yet? create one first, then send with its id  */
  /*  3. optimistic user bubble + loading state                       */
  /* -------------------------------------------------------------- */
  const sendMessage = useCallback(async () => {
    const content = input.trim();
    if (!content || isCreatingChat) return;

    if (!isAuthenticated) {
      setNotice({ type: "auth", message: "Please log in to start chatting." });
      return;
    }

    if (!socket || !isConnected) {
      setNotice({
        type: "offline",
        message: "Reconnecting… try sending that again in a moment.",
      });
      return;
    }

    setNotice(null);

    dispatch(setLoading(true));

    let chatId = activeChatId;

    if (!chatId) {
      setIsCreatingChat(true);
      try {
        const title =
          content.length > 48 ? `${content.slice(0, 48)}…` : content;
        const response = await axios.post(
          "/chat/",
          { title },
          { withCredentials: true },
        );
        const chat = response.data.chat;
        chatId = chat._id;
        dispatch(
          createChat({
            ...chat,
            lastActivity: chat.lastActivity ?? new Date().toISOString(),
          }),
        );
      } catch (error) {
        setNotice({
          type: "error",
          message: "Couldn't start a new chat. Try again.",
        });
        setIsCreatingChat(false);
        return;
      }
      setIsCreatingChat(false);
    }

    dispatch(
      addMessage({
        _id: crypto.randomUUID(),
        role: "user",
        content,
      }),
    );

    // dispatch(setLoading(true));
    dispatch(touchChat(chatId));

    socket.emit("ai-message", {
      chat: chatId,
      content,
    });

    setInput("");
  }, [
    input,
    isCreatingChat,
    isAuthenticated,
    socket,
    isConnected,
    activeChatId,
    dispatch,
  ]);

  const hasMessages = messages.length > 0 || streamingMessage.length > 0;

  return (
    <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col bg-[#FAFAFF] dark:bg-[#100E19] relative">
      {notice && (
        <div
          className={`flex shrink-0 items-center justify-center gap-2 px-4 py-2.5 text-[13px] font-body font-medium ${
            notice.type === "auth"
              ? "bg-[#FFF6E5] text-[#8A6100] dark:bg-[#2A2210] dark:text-[#F5C451]"
              : notice.type === "offline"
                ? "bg-[#FDF1F1] text-[#B23B3B] dark:bg-[#2A1414] dark:text-[#F29B9B]"
                : "bg-[#FDF1F1] text-[#B23B3B] dark:bg-[#2A1414] dark:text-[#F29B9B]"
          }`}
        >
          {notice.type === "offline" ? (
            <WifiOff size={14} strokeWidth={2.25} />
          ) : (
            <LogIn size={14} strokeWidth={2.25} />
          )}
          <span>{notice.message}</span>
          {notice.type === "auth" && (
            <Link to="/login" className="font-700 underline underline-offset-2">
              Log in
            </Link>
          )}
        </div>
      )}

      {hasMessages ? (
        <>
          <MessageArea
            messages={messages}
            streamingMessage={streamingMessage}
            loading={loading}
          />

          <MessageInput
            value={input}
            onChange={setInput}
            onSend={sendMessage}
            isTyping={loading || isCreatingChat}
            variant="docked"
          />
        </>
      ) : (
        <MessageHomePage
          name={user || "there"}
          value={input}
          onChange={setInput}
          onSend={sendMessage}
          onQuickStart={setInput}
        />
      )}
    </div>
  );
};

export default Messages;
