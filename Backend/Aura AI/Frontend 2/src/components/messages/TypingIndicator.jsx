import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-1 px-1 py-1.5">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className="h-1.5 w-1.5 rounded-full bg-[#B7AEF0] dark:bg-[#8B7FE8]"
          style={{
            animation: "aura-pulse 1s ease-in-out infinite",
            animationDelay: `${dot * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
};

export default TypingIndicator;
