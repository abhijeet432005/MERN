import { useEffect } from "react";

/**
 * Sets document.title (and optionally a meta description) per-page.
 * Cheap, dependency-free SEO win for a Vite SPA — no react-helmet needed
 * since we only ever render one page's <head> at a time.
 */
export const useDocumentTitle = (title, description) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} · AURA AI` : "AURA AI";

    let meta;
    if (description) {
      meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description]);
};
