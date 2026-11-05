export default function Navbar ({
     onNavigate 
}) {
    return (
        <header className="sidebar">
            <a
                className="sidebar-name"
                href="#about"
                onClick={(event) => {
                    event.preventDefault();
                    onNavigate("about");
                }}
            >
                Gabrielle Sacluti
            </a>

            <div id="sidebar-links" className="sidebar-links" aria-label="Main navigation">
                <button onClick={() => onNavigate("about")}>
                    About
                </button>

                <button onClick={() => onNavigate("experience")}>
                    Experience
                </button>
                
                <button onClick={() => onNavigate("stack")}>
                    Stack
                </button>

                <button onClick={() => onNavigate("projects")}>
                    Projects
                </button>

                <button onClick={() => onNavigate("certifications")}>
                    Certifications
                </button>

                <button onClick={() => onNavigate("recommendations")}>
                    Recommendations    
                </button>  

                <button onClick={() => onNavigate("affiliations")}>
                    Affiliations
                </button>
            </div>

            <div className="sidebar-contact">
                <p className="sidebar-contact-text">
                    For work, opportunities and any related queries,
                    please reach me at
                </p>

                <a href="mailto:gabriellesac07@icloud.com">
                    gabriellesac07@icloud.com
                </a>
            </div>
        </header>
    );
}