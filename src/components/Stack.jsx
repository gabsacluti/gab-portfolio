import TypewriterHeading from "./TypewriterHeading";
import StackCard from "./StackCard.jsx";
export default function Stack() {
    return (
        <div>
            <h2 className="font-pixel"><TypewriterHeading>tech stack</TypewriterHeading></h2>
            <p>The tools, frameworks, and platforms I utilize in front-end, back-end, infrastructure, and Artificial Intelligence.</p>

            <h3 className="font-pixel">FRONTEND</h3>
            <div className="stack-grid">
                <StackCard technology="HTML"/>
                <StackCard technology="CSS"/>
                <StackCard technology="Tailwind CSS"/>
                <StackCard technology="JavaScript"/>
                <StackCard technology="React"/>
                <StackCard technology="Vite"/>
            </div>

            <h3 className="font-pixel">BACKEND</h3>
            <div className="stack-grid">
                <StackCard technology="Python"/>
                <StackCard technology="PHP"/>
                <StackCard technology="MySQL"/>
                <StackCard technology="PostgreSQL"/>
            </div>

            <h3 className="font-pixel">DEVOPS & CLOUD</h3>
            <div className="stack-grid">
                <StackCard technology="Docker"/>
                <StackCard technology="Oracle VM"/>
                <StackCard technology="AWS"/>
                <StackCard technology="Github Actions"/>
            </div>

            <h3 className="font-pixel">AI & ML</h3>
            <div className="stack-grid">
                <StackCard technology="OpenAI"/>
                <StackCard technology="Codex"/>
                <StackCard technology="Anthrophic"/>
                <StackCard technology="Deepseek"/>
            </div>

            <h3 className="font-pixel">CYBERSECURITY</h3>
            <div className="stack-grid">
                <StackCard technology="NMAP"/>
                <StackCard technology="BurpSuite"/>
                <StackCard technology="Caido"/>
                <StackCard technology="Metasploitable"/>
                <StackCard technology="OpenVAS"/>
                <StackCard technology="OWASP ZAP"/>
                <StackCard technology="Autopsy"/>
                <StackCard technology="Cyberchef" />
            </div>

            <h3 className="font-pixel">DEVELOPER TOOLS</h3>
            <div className="stack-grid">
                <StackCard technology="VS Code"/>
                <StackCard technology="Pycharm"/>
                <StackCard technology="Git"/>
                <StackCard technology="Github"/>
                <StackCard technology="Discord"/>

            </div>

            <h3 className="font-pixel">MEDIA CONTENT GENERATION AND EDITING TOOLS</h3>
            <div className="stack-grid">
                <StackCard technology="Higgsfield AI"/>
                <StackCard technology="ComfyUI"/>
                <StackCard technology="PhotoCraft"/>
                <StackCard technology="Adobe Photoshop"/>
            </div>

        </div>
    );
}