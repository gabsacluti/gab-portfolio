import { useEffect } from "react";

const soundTargets = "button, [role='button'], input[type='button'], input[type='submit'], input[type='reset'], .sidebar a, .mobile-bar a, .mobile-drawer a";

export default function ButtonClickSound({ enabled }) {
  useEffect(() => {
    if (!enabled) return;
    const audio = new Audio("/sounds/universfield-mouse-click-351398.mp3");
    audio.preload = "auto";
    audio.volume = 0.45;
    const hoverAudio = new Audio("/sounds/denielcz-immersivecontrol-button-click-sound-463065.mp3");
    hoverAudio.preload = "auto";
    hoverAudio.volume = 0.45;

    function playHover(event) {
      if (event.pointerType !== "mouse" || !(event.target instanceof Element)) return;
      const button = event.target.closest(soundTargets);
      if (!button || button.matches(":disabled, [aria-disabled='true']")) return;
      // Moving between a button's icon and label is still the same hover.
      if (event.relatedTarget instanceof Node && button.contains(event.relatedTarget)) return;
      hoverAudio.currentTime = 0;
      hoverAudio.play().catch(() => {
        // Browsers may block hover audio until the visitor first interacts.
      });
    }

    function playClick(event) {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest(soundTargets);
      if (!button || button.matches(":disabled, [aria-disabled='true']")) return;
      if (button.hasAttribute("data-sound-toggle")) return;

      // Restart immediately so rapid clicks also receive audible feedback.
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Audio restrictions or a missing file must not interrupt navigation.
      });
    }

    document.addEventListener("click", playClick, true);
    document.addEventListener("pointerover", playHover, true);
    return () => {
      document.removeEventListener("click", playClick, true);
      document.removeEventListener("pointerover", playHover, true);
      hoverAudio.pause();
      hoverAudio.removeAttribute("src");
      hoverAudio.load();
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    };
  }, [enabled]);

  return null;
}
