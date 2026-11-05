import { useState } from "react";
import ButtonClickSound from "./components/ButtonClickSound.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Project from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Stack from "./components/Stack.jsx";
import Certifications from "./components/Certifications.jsx";
import Recommendations from "./components/Recommendations.jsx";
import Affiliations from "./components/Affiliations.jsx"
import "./App.css";
export default function App() {

  const [activePage, setActivePage] = useState("about");
  const [soundEnabled, setSoundEnabled] = useState(() => {
    try { return localStorage.getItem("portfolio-sound") !== "off"; }
    catch { return true; }
  });

  function toggleSound() {
    const next = !soundEnabled;
    setSoundEnabled(next);
    try { localStorage.setItem("portfolio-sound", next ? "on" : "off"); }
    catch { /* Keep the toggle working when browser storage is unavailable. */ }
  }

  return (
    <>
        <ButtonClickSound enabled={soundEnabled} />
        <Navbar onNavigate={setActivePage} activePage={activePage} soundEnabled={soundEnabled} onToggleSound={toggleSound} />

        <main>
          {activePage === "about" && <About />}
          {activePage === "projects" && <Project />}
          {activePage === "experience" && <Experience />}
          {activePage === "stack" && <Stack />}
          {activePage === "certifications" && <Certifications />}
          {activePage === "recommendations" && <Recommendations />}
          {activePage === "affiliations" && <Affiliations />}
        </main>
    </>
  );
}
