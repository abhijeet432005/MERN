import { useState, useRef, useEffect } from "react";
import { MessageSquare, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

const ChatListItem = ({
  chat,
  collapsed,
  activeId,
  onSelect,
  onRename,
  onDelete,
}) => {
  const isActive = chat.id === activeId;

  const [menuOpen, setMenuOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(chat.title);

  const inputRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const commitRename = () => {
    const trimmed = draft.trim();
    if (trimmed && trimmed !== chat.title) {
      onRename(chat.id, trimmed);
    }
    setEditing(false);
  };

  if (collapsed) {
    return (
      <div className="group relative flex justify-center">
        <button
          type="button"
          onClick={() => onSelect(chat.id)}
          title={chat.title}
          className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
            isActive
              ? "bg-[#EFEBFF] text-[#5847E0] dark:bg-[#2A2244] dark:text-[#B7AEF0]"
              : "text-[#6B6780] hover:bg-[#F5F3FC] dark:text-[#8A85A3] dark:hover:bg-[#1A1626]"
          }`}
        >
          <MessageSquare size={16} strokeWidth={2} />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`group relative flex items-center gap-2 rounded-xl px-2.5 py-2 transition-colors ${
        isActive
          ? "bg-[#EFEBFF] dark:bg-[#2A2244]"
          : "hover:bg-[#F5F3FC] dark:hover:bg-[#1A1626]"
      }`}
    >
      <MessageSquare
        size={15}
        strokeWidth={2}
        className={`shrink-0 ${
          isActive ? "text-[#5847E0] dark:text-[#B7AEF0]" : "text-[#9A96AC] dark:text-[#5C5772]"
        }`}
      />

      {editing ? (
        <input
          ref={inputRef}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") commitRename();
            if (event.key === "Escape") setEditing(false);
          }}
          onBlur={commitRename}
          className="font-body flex-1 rounded-md border border-[#C9C0F8] bg-white px-1.5 py-0.5 text-[13px] text-[#1C1A27] outline-none dark:border-[#5847E0] dark:bg-[#1F1B2E] dark:text-[#F2F0FA]"
        />
      ) : (
        <button
          type="button"
          onClick={() => onSelect(chat.id)}
          className={`font-body flex-1 truncate text-left text-[13px] ${
            isActive
              ? "font-600 text-[#3A2E9E] dark:text-[#C9C0F8]"
              : "text-[#3A3650] dark:text-[#C7C3D6]"
          }`}
        >
          {chat.title}
        </button>
      )}

      {!editing && (
        <div className="relative shrink-0" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={`flex h-6 w-6 items-center justify-center rounded-md text-[#9A96AC] hover:bg-[#E9E5FB] hover:text-[#5847E0] transition-opacity dark:text-[#6B6780] dark:hover:bg-[#2A2244] dark:hover:text-[#B7AEF0] ${
              menuOpen
                ? "opacity-100 bg-[#E9E5FB] dark:bg-[#2A2244]"
                : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <MoreHorizontal size={14} strokeWidth={2} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-7 z-50 w-36 overflow-hidden rounded-xl border border-[#ECE9F8] bg-white py-1 shadow-lg dark:border-[#2A2740] dark:bg-[#1A1626]">
              <button
                onClick={() => {
                  setEditing(true);
                  setMenuOpen(false);
                }}
                className="font-body flex w-full items-center gap-2 px-3 py-2 text-left text-[12.5px] text-[#3A3650] hover:bg-[#F6F4FD] dark:text-[#E5E2F0] dark:hover:bg-[#211D2E]"
              >
                <Pencil size={13} strokeWidth={2} />
                Rename
              </button>
              <button
                onClick={() => {
                  onDelete(chat.id);
                  setMenuOpen(false);
                }}
                className="font-body flex w-full items-center gap-2 px-3 py-2 text-left text-[12.5px] text-[#E24C4C] hover:bg-[#FDF1F1] dark:text-[#F29B9B] dark:hover:bg-[#2A1414]"
              >
                <Trash2 size={13} strokeWidth={2} />
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatListItem;
