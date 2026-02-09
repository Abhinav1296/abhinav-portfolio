import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // 1. If there is a hash (like /#work-anchor), scroll to it
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Use 'auto' for instant jump to avoid fighting GSAP
          element.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }, 100); // Small delay to ensure page is rendered
    } 
    // 2. No hash? Just force top of page
    else {
      window.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;