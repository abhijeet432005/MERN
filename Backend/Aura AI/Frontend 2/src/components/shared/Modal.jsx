import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X } from "lucide-react";

const Modal = ({
  open,
  onClose,
  title,
  icon,
  children,
  footer,
  maxWidth = "max-w-md",
}) => {
  const backdropRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "power1.out" },
      );
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 12, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power3.out" },
      );
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      ctx.revert();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1A27]/40 backdrop-blur-sm px-4 dark:bg-black/60"
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        className={`w-full ${maxWidth} overflow-hidden rounded-3xl border border-[#ECE9F8] bg-white shadow-[0_20px_60px_rgba(28,26,39,0.18)] dark:border-[#2A2740] dark:bg-[#17141F] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]`}
      >
        <div className="flex items-center justify-between border-b border-[#F1EFFC] px-5 py-4 dark:border-[#211D2E]">
          <div className="flex items-center gap-2.5">
            {icon}
            <h2 className="font-display text-[16px] font-700 text-[#1C1A27] dark:text-[#F2F0FA]">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#9A96AC] hover:bg-[#F1EFFC] hover:text-[#5847E0] transition-colors dark:text-[#6B6780] dark:hover:bg-[#211D2E] dark:hover:text-[#B7AEF0]"
          >
            <X size={16} strokeWidth={2.25} />
          </button>
        </div>

        <div className="px-5 py-5">{children}</div>

        {footer && (
          <div className="flex items-center justify-end gap-2 border-t border-[#F1EFFC] px-5 py-4 dark:border-[#211D2E]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
