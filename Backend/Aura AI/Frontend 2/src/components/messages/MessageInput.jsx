import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Paperclip,
  Globe,
  Mic,
  ArrowUp,
  Plus,
  ChevronDown,
  Square,
} from "lucide-react";

const MessageInput = ({ value, onChange, onSend, isTyping, variant = "docked" }) => {
  const textareaRef = useRef(null);
  const [modelOpen, setModelOpen] = useState(false);

  const autoGrow = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 200) + "px";
  }, []);

  useEffect(() => {
    autoGrow();
  }, [value, autoGrow]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSend();
    }
  };

  return (
    <div
      className={
        variant === "hero"
          ? "w-full"
          : "w-full shrink-0 bg-gradient-to-t from-[#FAFAFF] via-[#FAFAFF]/95 to-transparent pt-6 dark:from-[#100E19] dark:via-[#100E19]/95"
      }
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="group relative rounded-[26px] border border-[#E7E4F5] bg-white shadow-[0_2px_10px_rgba(109,93,246,0.06)] focus-within:border-[#B9AEF7] focus-within:shadow-[0_4px_20px_rgba(109,93,246,0.14)] transition-all duration-200 dark:border-[#2A2740] dark:bg-[#17141F] dark:focus-within:border-[#5847E0] dark:focus-within:shadow-[0_4px_24px_rgba(109,93,246,0.22)]">
          <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask AURA anything…"
            className="aura-input font-body w-full resize-none bg-transparent px-5 pt-4 pb-2 text-[15px] leading-6 text-[#1C1A27] placeholder:text-[#9A96AC] outline-none dark:text-[#F2F0FA] dark:placeholder:text-[#5C5772]"
            style={{ maxHeight: 200 }}
          />

          <div className="flex items-center justify-between gap-2 px-3 pb-3 pt-1">
            <div className="flex items-center gap-1">
              <button
                type="button"
                title="Add attachment"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#6B6780] hover:bg-[#F1EFFC] hover:text-[#5847E0] transition-colors dark:text-[#8A85A3] dark:hover:bg-[#211D2E] dark:hover:text-[#B7AEF0]"
              >
                <Plus size={18} strokeWidth={2} />
              </button>

              <button
                type="button"
                title="Attach file"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#6B6780] hover:bg-[#F1EFFC] hover:text-[#5847E0] transition-colors dark:text-[#8A85A3] dark:hover:bg-[#211D2E] dark:hover:text-[#B7AEF0]"
              >
                <Paperclip size={16} strokeWidth={2} />
              </button>

              <button
                type="button"
                title="Search the web"
                className="hidden sm:flex h-8 items-center gap-1.5 rounded-full px-3 text-[#6B6780] hover:bg-[#F1EFFC] hover:text-[#5847E0] transition-colors text-[13px] font-body font-medium dark:text-[#8A85A3] dark:hover:bg-[#211D2E] dark:hover:text-[#B7AEF0]"
              >
                <Globe size={15} strokeWidth={2} />
                Search
              </button>

              <button
                type="button"
                title="Voice input"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#6B6780] hover:bg-[#F1EFFC] hover:text-[#5847E0] transition-colors dark:text-[#8A85A3] dark:hover:bg-[#211D2E] dark:hover:text-[#B7AEF0]"
              >
                <Mic size={16} strokeWidth={2} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* <div className="relative hidden sm:block">
                <button
                  type="button"
                  onClick={() => setModelOpen((open) => !open)}
                  className="flex items-center gap-1 rounded-full border border-[#ECE9F8] px-3 py-1.5 text-[12.5px] font-mono text-[#6B6780] hover:border-[#D9D3F5] hover:text-[#5847E0] transition-colors dark:border-[#2A2740] dark:text-[#8A85A3] dark:hover:border-[#5847E0] dark:hover:text-[#B7AEF0]"
                >
                  Nova&nbsp;2.4
                  <ChevronDown size={13} strokeWidth={2.25} />
                </button>

                {modelOpen && (
                  <div className="absolute bottom-full right-0 mb-2 w-40 overflow-hidden rounded-xl border border-[#ECE9F8] bg-white py-1 shadow-lg dark:border-[#2A2740] dark:bg-[#1A1626]">
                    {["Nova 2.4", "Nova Mini", "Nova Reasoning"].map((model) => (
                      <button
                        key={model}
                        onClick={() => setModelOpen(false)}
                        className="block w-full px-3 py-2 text-left font-mono text-[12.5px] text-[#3A3650] hover:bg-[#F6F4FD] dark:text-[#E5E2F0] dark:hover:bg-[#211D2E]"
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                )}
              </div> */}

              <button
                type="button"
                onClick={onSend}
                disabled={!value.trim() && !isTyping}
                title={isTyping ? "Working…" : "Send message"}
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-150 ${
                  value.trim() || isTyping
                    ? "bg-gradient-to-br from-[#6D5DF6] to-[#5847E0] text-white shadow-[0_2px_8px_rgba(88,71,224,0.35)] hover:brightness-105 active:scale-95"
                    : "bg-[#EFEDF9] text-[#B7B2CC] cursor-not-allowed dark:bg-[#211D2E] dark:text-[#4A4560]"
                }`}
              >
                {isTyping ? (
                  <Square size={13} strokeWidth={2.5} fill="currentColor" />
                ) : (
                  <ArrowUp size={18} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {variant === "docked" && (
          <p className="font-body pb-3 pt-2 text-center text-[11.5px] text-[#B2AEC4] dark:text-[#5C5772]">
            AURA can make mistakes. Verify important information.
          </p>
        )}
      </div>
    </div>
  );
};

export default MessageInput;
