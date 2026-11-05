import { useEffect, useState } from "react";
import "./Typewriter.css";

const phrases = [
  "Aspiring front-end engineer",
  "Aspiring penetration tester",
  "Building responsive web applications",
];

export default function Typewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    let phrase = 0;
    let length = 0;
    let deleting = false;

    function tick() {
      if (motion.matches) return;
      const current = phrases[phrase];
      length += deleting ? -1 : 1;
      setText(current.slice(0, length));
      let delay = deleting ? 40 : 85;
      if (length === current.length) {
        deleting = true;
        delay = 1800;
      } else if (length === 0) {
        deleting = false;
        phrase = (phrase + 1) % phrases.length;
        delay = 400;
      }
      timer = window.setTimeout(tick, delay);
    }

    function start() {
      window.clearTimeout(timer);
      if (!motion.matches) timer = window.setTimeout(tick, 400);
    }

    start();
    motion.addEventListener("change", start);
    return () => {
      window.clearTimeout(timer);
      motion.removeEventListener("change", start);
    };
  }, []);

  return (
    <span className="typewriter">
      <span className="typewriter-accessible">Aspiring front-end engineer and penetration tester. Building responsive web applications.</span>
      <span className="typewriter-stage" aria-hidden="true">
        {phrases.map(phrase => <span className="typewriter-size" key={phrase}>{phrase}<span className="typewriter-cursor" /></span>)}
        <span className="typewriter-animated">{text.slice(0, -1)}<span className="typewriter-tail">{text.slice(-1)}<span className="typewriter-cursor" /></span></span>
        <span className="typewriter-static">{phrases[0]}</span>
      </span>
    </span>
  );
}
