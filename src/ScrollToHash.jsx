import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    const id = decodeURIComponent(hash.replace(/^#/, ""));
    if (!id) return;

    let rafId;
    let attempts = 0;
    const maxAttempts = 30;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      attempts += 1;
      if (attempts >= maxAttempts) return;

      rafId = requestAnimationFrame(tryScroll);
    };

    rafId = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(rafId);
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToHash;
