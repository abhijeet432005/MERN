import React, { useState, useEffect } from "react";
import { SquarePen } from "lucide-react";
import Modal from "../shared/Modal";

const NewChatModal = ({ open, onClose, onCreate }) => {
  const [title, setTitle] = useState("");

  // start with a clean field every time the modal is opened
  useEffect(() => {
    if (open) setTitle("");
  }, [open]);

  const handleCreate = (chatTitle) => {
    onCreate(chatTitle?.trim() || "New chat");
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Start a new chat"
      icon={
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#6D5DF6] to-[#5847E0] text-white">
          <SquarePen size={15} strokeWidth={2.25} />
        </span>
      }
      footer={
        <>
          <button
            type="button"
            onClick={onClose}
            className="font-body rounded-xl px-4 py-2 text-[13.5px] font-600 text-[#6B6780] hover:bg-[#F5F3FC] transition-colors dark:text-[#8A85A3] dark:hover:bg-[#211D2E]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => handleCreate(title)}
            className="font-body rounded-xl bg-gradient-to-br from-[#6D5DF6] to-[#5847E0] px-4 py-2 text-[13.5px] font-600 text-white shadow-[0_2px_8px_rgba(88,71,224,0.28)] hover:brightness-105 active:scale-[0.98] transition-all"
          >
            Start chat
          </button>
        </>
      }
    >
      <label className="font-body mb-1.5 block text-[12.5px] font-600 text-[#6B6780] dark:text-[#8A85A3]">
        Chat name
      </label>
      <input
        autoFocus
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleCreate(title);
        }}
        placeholder="New chat"
        className="font-body w-full rounded-xl border border-[#ECE9F8] bg-[#FAFAFF] px-3.5 py-2.5 text-[14px] text-[#1C1A27] placeholder:text-[#B2AEC4] outline-none transition-colors focus:border-[#C9C0F8] focus:bg-white dark:border-[#2A2740] dark:bg-[#1A1626] dark:text-[#F2F0FA] dark:placeholder:text-[#5C5772] dark:focus:border-[#5847E0] dark:focus:bg-[#1F1B2E]"
      />
    </Modal>
  );
};

export default NewChatModal;
