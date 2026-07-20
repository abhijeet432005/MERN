import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL ?? "http://localhost:3000";

const SocketContext = createContext(null);

/**
 * Owns a single socket connection for the app's lifetime instead of one
 * being opened/closed every time <Messages> mounts. Only connects once the
 * user is actually authenticated, and tears the connection down on logout.
 */
export const SocketProvider = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.authSlice.isAuthenticated);
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setSocket(null);
      setIsConnected(false);
      return;
    }

    const nextSocket = io(SOCKET_URL, {
      withCredentials: true,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    nextSocket.on("connect", () => setIsConnected(true));
    nextSocket.on("disconnect", () => setIsConnected(false));

    setSocket(nextSocket);

    return () => {
      nextSocket.disconnect();
      setSocket(null);
      setIsConnected(false);
    };
  }, [isAuthenticated]);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const ctx = useContext(SocketContext);
  if (!ctx) throw new Error("useSocket must be used within a SocketProvider");
  return ctx;
};
