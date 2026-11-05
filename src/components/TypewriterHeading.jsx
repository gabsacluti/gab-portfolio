import { useEffect, useRef, useState } from "react";
import "./Typewriter.css";

export default function TypewriterHeading({ children }) {
  const heading = useRef(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    let visible = false;
    let count = 0;

    function tick() {
      count += 1;
      setLength(count);
      if (count < children.length) timer = window.setTimeout(tick, 75);
    }

    function start() {
      window.clearTimeout(timer);
      if (visible && !motion.matches && count < children.length) {
        timer = window.setTimeout(tick, 75);
      }
    }

    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        visible = true;
        observer.disconnect();
        start();
      }
    }, { threshold: 0.25 });

    observer.observe(heading.current);
    motion.addEventListener("change", start);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      motion.removeEventListener("change", start);
    };
  }, [children]);

  const text = children.slice(0, length);
  return (
    <span ref={heading} className="typewriter-heading">
      <span className="typewriter-accessible">{children}</span>
      <span className="typewriter-stage" aria-hidden="true">
        <span className="typewriter-size">{children}<span className="typewriter-cursor" /></span>
        <span className="typewriter-animated">{text.slice(0, -1)}<span className="typewriter-tail">{text.slice(-1)}<span className="typewriter-cursor" /></span></span>
        <span className="typewriter-static">{children}</span>
      </span>
    </span>
  );
}
