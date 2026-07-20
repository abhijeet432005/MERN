import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Copy, Check } from "lucide-react";
import AuraMark from "../shared/AuraMark";
import TypingIndicator from "./TypingIndicator";
import "highlight.js/styles/github-dark.css";

/* ------------------------------------------------------------------ */
/*  CodeBlock — fenced code with a language chip + copy button         */
/* ------------------------------------------------------------------ */
const CodeBlock = ({ children, ...preProps }) => {
  const [copied, setCopied] = useState(false);

  const codeElement = Array.isArray(children) ? children[0] : children;
  const className = codeElement?.props?.className || "";
  const language = /language-(\w+)/.exec(className)?.[1] || "text";
  const rawCode = codeElement?.props?.children?.toString?.() ?? "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard not available — fail silently
    }
  };

  return (
    <div className="mb-3 mt-1 overflow-hidden rounded-xl border border-[#2A2740] last:mb-0">
      <div className="flex items-center justify-between bg-[#1C1A27] px-3.5 py-2">
        <span className="font-mono text-[11px] uppercase tracking-wide text-[#9A96AC]">
          {language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md px-1.5 py-0.5 font-mono text-[11px] text-[#B7AEF0] hover:bg-white/5 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check size={12} strokeWidth={2.25} />
              Copied
            </>
          ) : (
            <>
              <Copy size={12} strokeWidth={2.25} />
              Copy
            </>
          )}
        </button>
      </div>

      {/* hide scrollbar */}

      <pre
        className="overflow-x-auto no-scrollbar bg-[#0D0B14] p-4 text-[13px] leading-relaxed"
        {...preProps}
      >
        {children}
      </pre>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Markdown element overrides — keeps assistant replies on-brand      */
/*  in both themes                                                     */
/* ------------------------------------------------------------------ */
const markdownComponents = {
  p: ({ children }) => (
    <p className="font-body mb-3 text-[14.5px] leading-relaxed text-[#2A2740] last:mb-0 dark:text-[#D8D4E8]">
      {children}
    </p>
  ),
  h1: ({ children }) => (
    <h1 className="font-display mb-2 mt-4 text-[19px] font-700 text-[#1C1A27] first:mt-0 dark:text-[#F2F0FA]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display mb-2 mt-4 text-[17px] font-700 text-[#1C1A27] first:mt-0 dark:text-[#F2F0FA]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display mb-1.5 mt-3.5 text-[15.5px] font-600 text-[#1C1A27] first:mt-0 dark:text-[#F2F0FA]">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-display mb-1.5 mt-3 text-[14.5px] font-600 text-[#1C1A27] first:mt-0 dark:text-[#F2F0FA]">
      {children}
    </h4>
  ),
  ul: ({ children }) => (
    <ul className="font-body mb-3 ml-4 list-disc space-y-1.5 text-[14.5px] leading-relaxed text-[#2A2740] marker:text-[#B7AEF0] last:mb-0 dark:text-[#D8D4E8]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="font-body mb-3 ml-4 list-decimal space-y-1.5 text-[14.5px] leading-relaxed text-[#2A2740] marker:text-[#B7AEF0] marker:font-600 last:mb-0 dark:text-[#D8D4E8]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[#5847E0] underline decoration-[#C9C0F8] underline-offset-2 hover:decoration-[#5847E0] transition-colors dark:text-[#B7AEF0] dark:decoration-[#4A4374] dark:hover:decoration-[#B7AEF0]"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-700 text-[#1C1A27] dark:text-[#F2F0FA]">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-[#3A3650] dark:text-[#C7C3D6]">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-3 border-l-[3px] border-[#C9C0F8] bg-[#FAFAFF] py-1.5 pl-3.5 pr-2 text-[14px] italic text-[#6B6780] last:mb-0 dark:border-[#4A4374] dark:bg-[#1A1626] dark:text-[#8A85A3]">
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr className="my-4 border-t border-[#ECE9F8] dark:border-[#2A2740]" />
  ),
  table: ({ children }) => (
    <div className="mb-3 overflow-x-auto rounded-xl border border-[#ECE9F8] last:mb-0 dark:border-[#2A2740]">
      <table className="w-full border-collapse text-[13.5px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[#F6F4FD] dark:bg-[#1A1626]">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="font-display border-b border-[#ECE9F8] px-3 py-2 text-left text-[12.5px] font-600 text-[#3A3650] dark:border-[#2A2740] dark:text-[#D8D4E8]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-[#F1EFFC] px-3 py-2 text-[#2A2740] last:border-b-0 dark:border-[#211D2E] dark:text-[#C7C3D6]">
      {children}
    </td>
  ),
  pre: CodeBlock,
  code: ({ inline, className, children, ...props }) => {
    const isInline = inline ?? !/language-/.test(className || "");
    if (isInline) {
      return (
        <code
          className="rounded-md bg-[#F1EFFC] px-1.5 py-0.5 font-mono text-[13px] text-[#5847E0] dark:bg-[#2A2244] dark:text-[#B7AEF0]"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

/* ------------------------------------------------------------------ */
/*  ChatBubble                                                         */
/* ------------------------------------------------------------------ */
const ChatBubble = ({ role, content, loading = false, isNew = false }) => {
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  const isUser = role === "user";

  useEffect(() => {
    if (!isNew || hasAnimated.current || !ref.current) return;
    hasAnimated.current = true;

    gsap.fromTo(
      ref.current,
      { y: 14, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
        clearProps: "transform",
      },
    );
  }, [isNew]);

  if (isUser) {
    return (
      <div ref={ref} className="flex w-full justify-end px-4 sm:px-0">
        <div className="max-w-[85%] sm:max-w-[70%] rounded-[20px] rounded-tr-[6px] bg-gradient-to-br from-[#6D5DF6] to-[#5847E0] px-4 py-3 shadow-[0_2px_10px_rgba(88,71,224,0.22)] dark:shadow-[0_2px_16px_rgba(109,93,246,0.3)]">
          <p className="font-body whitespace-pre-wrap text-[14.5px] leading-relaxed text-white">
            {content}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="flex w-full max-w-full items-start gap-2.5 px-4 sm:px-0"
    >
      <div className="min-w-0 max-w-[100%] rounded-[20px] rounded-tl-[6px] border border-[#ECE9F8] bg-white px-4 py-3 shadow-[0_1px_6px_rgba(109,93,246,0.05)] dark:border-[#211D2E] dark:bg-[#17141F] dark:shadow-[0_1px_10px_rgba(0,0,0,0.3)]">
        {loading ? (
          <div className="flex items-center gap-3">
            <TypingIndicator />
            <div className="flex flex-col">
              <p className="font-body text-[14px] font-medium text-[#2A2740] dark:text-[#D8D4E8]">
                Aura is thinking…
              </p>
              <p className="font-body text-[12px] text-[#B2AEC4] dark:text-[#5C5772]">
                Generating response
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={markdownComponents}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
