import React from "react";
import {
  PanelLeftClose,
  PanelLeftOpen,
  SquarePen,
  Search,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const SidebarHeader = ({ collapsed, onToggle, onNewChat }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`flex shrink-0 flex-col gap-3 px-3 pt-4 ${
        collapsed ? "items-center" : ""
      }`}
    >
      <div
        className={`flex items-center ${
          collapsed ? "flex-col gap-3" : "justify-between"
        }`}
      >
        {!collapsed && (
          <div className="flex items-center gap-2 px-1">
            <span className="bg-gradient-to-br from-[#6D5DF6] to-[#22D3C7] bg-clip-text font-display text-[15px] font-700 text-transparent">
              AURA AI
            </span>
          </div>
        )}

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#6B6780] hover:bg-[#F1EFFC] hover:text-[#5847E0] transition-colors dark:text-[#8A85A3] dark:hover:bg-[#211D2E] dark:hover:text-[#B7AEF0]"
          >
            {isDark ? (
              <Sun size={16} strokeWidth={2} />
            ) : (
              <Moon size={16} strokeWidth={2} />
            )}
          </button>

          <button
            type="button"
            onClick={onToggle}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#6B6780] hover:bg-[#F1EFFC] hover:text-[#5847E0] transition-colors dark:text-[#8A85A3] dark:hover:bg-[#211D2E] dark:hover:text-[#B7AEF0]"
          >
            {collapsed ? (
              <PanelLeftOpen size={18} strokeWidth={2} />
            ) : (
              <PanelLeftClose size={18} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={onNewChat}
        className={`flex w-full items-center gap-2 rounded-xl bg-gradient-to-br from-[#6D5DF6] to-[#5847E0] font-body text-[13.5px] font-600 text-white shadow-[0_2px_8px_rgba(88,71,224,0.28)] transition-transform duration-150 hover:brightness-105 active:scale-[0.98] dark:shadow-[0_2px_12px_rgba(109,93,246,0.35)] ${
          collapsed ? "h-9 w-9 justify-center p-0" : "px-3.5 py-2.5"
        }`}
      >
        <SquarePen size={16} strokeWidth={2.25} />
        {!collapsed && "New chat"}
      </button>

      {!collapsed && (
        <div className="relative">
          <Search
            size={14}
            strokeWidth={2}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#B2AEC4] dark:text-[#5C5772]"
          />
          <input
            type="text"
            placeholder="Search chats"
            className="font-body w-full rounded-xl border border-[#ECE9F8] bg-[#FAFAFF] py-2 pl-8 pr-3 text-[13px] text-[#3A3650] placeholder:text-[#B2AEC4] outline-none transition-colors focus:border-[#C9C0F8] focus:bg-white dark:border-[#2A2740] dark:bg-[#1A1626] dark:text-[#E5E2F0] dark:placeholder:text-[#5C5772] dark:focus:border-[#5847E0] dark:focus:bg-[#1F1B2E]"
          />
        </div>
      )}
    </div>
  );
};

export default SidebarHeader;
