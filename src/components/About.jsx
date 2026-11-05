import TypewriterHeading from "./TypewriterHeading";
import TryHackMeActivity from "./TryHackMeActivity";
import Typewriter from "./Typewriter";
export default function About() {
  return (
    <section id="about">

      <div className="about-intro">
        <div className="about-photo">
          <img
            className="profile-photo"
            src="/images/profile-transparent.png"
            alt="Gabrielle Sacluti"
          />
        </div>

        <div className="about-details">
          <div className="about-heading">
            <h2 className="font-pixel"><TypewriterHeading>Gabrielle Sacluti</TypewriterHeading></h2>
            <p className="about-intro-description font-mono">
              <Typewriter />
            </p>
          </div>
        
          <nav className="about-socials font-pixel" aria-label="Social profiles">
            <a
              href="https://github.com/gabsacluti"
              target="_blank"
              rel="noopener noreferrer">
              github
            </a>

            <a
              href="https://www.linkedin.com/in/gabriellesacluti/"
              target="_blank"
              rel="noopener noreferrer">
              linkedin
            </a>

            <a
              href="https://www.instagram.com/gabbbsclti/"
              target="_blank"
              rel="noopener noreferrer">
              instagram
            </a>
          </nav>
        </div>

      </div>

      <div id="about-description">
        <p className="font-mono">
          I’m Gabrielle Sacluti, an Information Technology graduate from Amity University Dubai with interests in frontend engineering and cybersecurity. I enjoy building web applications and understanding how to make them more secure.
        </p>

        <p className="font-mono">
          My projects include this React portfolio and an AI-based drone detection system that combines hardware and software. During Positive Hack Camp 2025 in Moscow, I gained hands-on experience with Linux, Windows, and web application security using tools such as Kali Linux and Burp Suite.
        </p>
          
        <p className="font-mono">
          I’m currently developing my frontend skills with a focus on responsive layouts, reusable components, and making websites easier to use. I’m interested in opportunities where I can contribute, learn from experienced developers, and keep growing across development and security.
        </p>
      </div>
      
      <TryHackMeActivity />
    </section>
  );
}
