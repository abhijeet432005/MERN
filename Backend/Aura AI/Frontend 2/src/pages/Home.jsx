import React, { useEffect, useState } from "react";
import GlobalStyles from "../components/shared/GlobalStyles";
import Sidebar from "../components/sidebar/Sidebar";
import Messages from "../components/messages/Messages";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle(null, "Chat with AURA — a fast, focused AI assistant.");

  const [collapsed, setCollapsed] = useState(() => window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="font-body h-screen w-screen overflow-hidden bg-[#FAFAFF] antialiased transition-colors duration-200 dark:bg-[#100E19]">
      <GlobalStyles />

      <div className="flex h-full w-full">
        <Sidebar collapsed={collapsed} onToggle={setCollapsed} />
        <Messages />
      </div>
    </div>
  );
};

export default Home;
