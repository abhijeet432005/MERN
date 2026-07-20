export const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap');

.font-display {
  font-family: 'Sora', ui-sans-serif, system-ui, sans-serif;
}

.font-body {
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
}

.font-mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}

@keyframes aura-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.85;
  }
}

@keyframes aura-spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.aura-glow {
  animation: aura-pulse 5s ease-in-out infinite;
}

.aura-ring {
  animation: aura-spin-slow 14s linear infinite;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea.aura-input {
  field-sizing: content;
}

html, body, #root {
  height: 100%;
  overflow: hidden;
}
`;
