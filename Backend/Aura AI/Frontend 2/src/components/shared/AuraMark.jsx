import React from "react";
import { Sparkles } from "lucide-react";

const AuraMark = ({ size = 32, animated = true }) => {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div
        className={`absolute inset-0 rounded-full blur-md ${
          animated ? "aura-glow" : ""
        }`}
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #A78BFA 0%, #6D5DF6 45%, #22D3C7 100%)",
        }}
      />

      {animated && (
        <div
          className="absolute inset-[3px] rounded-full aura-ring"
          style={{
            background:
              "conic-gradient(from 90deg, #6D5DF6, #22D3C7, #A78BFA, #6D5DF6)",
            maskImage:
              "radial-gradient(circle, transparent 55%, black 58%, black 100%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 55%, black 58%, black 100%)",
          }}
        />
      )}

      <div className="absolute inset-[7px] rounded-full bg-white/90 backdrop-blur-sm shadow-inner dark:bg-[#17141F]/90" />

      <div className="absolute inset-0 flex items-center justify-center">
        <Sparkles
          size={Math.max(12, size * 0.4)}
          strokeWidth={2.25}
          className="text-[#5847E0] dark:text-[#B7AEF0]"
        />
      </div>
    </div>
  );
};

export default AuraMark;
