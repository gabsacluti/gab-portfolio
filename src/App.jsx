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

  return (
    <>
        <ButtonClickSound />
        <Navbar onNavigate={setActivePage} activePage={activePage} />

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
