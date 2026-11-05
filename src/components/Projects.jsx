import TypewriterHeading from "./TypewriterHeading";
import ProjectCard from "./ProjectCard.jsx";
export default function Projects(){
    return (
        <div>
            <h2 className="font-pixel"><TypewriterHeading>projects</TypewriterHeading></h2>
            <div id="projects">

                  <ProjectCard
                  title="Web Application Penetration Testing"
                  description="Performed a disclosed Web App Penetration Test for a start-up Company"
                  />

                  <ProjectCard
                  title="Automated Multi-Sensor Response System for Critical Infrastructure Protection"
                  description="Built an AI-based Drone Detection Network System that uses ESP32, 1080p Webcam, INMP441 and M5 Cardputer to protect Critical Infrastructure to prevent further losses."
                  />

                </div>
        </div>
    );
}