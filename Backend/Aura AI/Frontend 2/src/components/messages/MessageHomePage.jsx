import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import MessageInput from "./MessageInput";

const MessageHomePage = ({ name, value, onChange, onSend }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".aura-greeting", { y: 16, opacity: 0, duration: 0.55 })
        .from(".aura-input-hero", { y: 14, opacity: 0, duration: 0.5 }, "-=0.3");
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative flex h-full w-full flex-col items-center overflow-y-auto no-scrollbar px-4 sm:px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300 dark:opacity-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 8%, rgba(109,93,246,0.10) 0%, rgba(109,93,246,0) 70%), radial-gradient(45% 35% at 85% 20%, rgba(34,211,199,0.10) 0%, rgba(34,211,199,0) 70%), #FAFAFF",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 dark:opacity-100"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 8%, rgba(109,93,246,0.16) 0%, rgba(109,93,246,0) 70%), radial-gradient(45% 35% at 85% 20%, rgba(34,211,199,0.10) 0%, rgba(34,211,199,0) 70%), #100E19",
        }}
      />

      <div className="my-auto flex w-full max-w-2xl flex-col items-center">
        <h1 className="aura-greeting font-display text-center text-[32px] sm:text-[40px] font-700 leading-tight tracking-tight text-[#1C1A27] dark:text-[#F2F0FA]">
          What's on your mind,{" "}
          <span className="bg-gradient-to-r from-[#6D5DF6] to-[#22B8AE] bg-clip-text text-transparent capitalize">
            {name}
          </span>
        </h1>

        <p className="font-body mt-3 mb-8 text-center text-[15px] text-[#8A8698] dark:text-[#8A85A3]">
          What would you like to get done today?
        </p>

        <div className="aura-input-hero w-full">
          <MessageInput
            value={value}
            onChange={onChange}
            onSend={onSend}
            isTyping={false}
            variant="hero"
          />
        </div>
      </div>

      <div className="pb-6 shrink-0" />
    </div>
  );
};

export default MessageHomePage;
