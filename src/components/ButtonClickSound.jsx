import { useEffect } from "react";

export default function ButtonClickSound() {
  useEffect(() => {
    const audio = new Audio("/sounds/universfield-mouse-click-351398.mp3");
    audio.preload = "auto";
    audio.volume = 0.45;

    function playClick(event) {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest("button, [role='button'], input[type='button'], input[type='submit'], input[type='reset']");
      if (!button || button.matches(":disabled, [aria-disabled='true']")) return;

      // Restart immediately so rapid clicks also receive audible feedback.
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Audio restrictions or a missing file must not interrupt navigation.
      });
    }

    document.addEventListener("click", playClick, true);
    return () => {
      document.removeEventListener("click", playClick, true);
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    };
  }, []);

  return null;
}
