import ExperienceCard from "./ExperienceCard.jsx";
export default function Experience() {
    return (
        <div>
            <h2 className="font-pixel">experience</h2>
                <div id="experience-card">
            
                <ExperienceCard
                title="B2B Support (WETEX 2025)"
                organization="Dubai Electricity & Water Authority"
                location="Dubai, United Arab Emirates"
                startMonth="October"
                startYear="2025"
                descriptions={[
                "Represented SenseMi and ForEVo within DEWA's B2B Support Team, enhancing client engagement.",
                "Facilitated communication between B2B visitors and industry professionals, ensuring smooth business operations.",
                "Gained hands-on experience with clean technology and sustainability solutions, contributing to cross-cultural business coordination."
                ]}
                />

                <ExperienceCard
                title="Cybersecurity Trainee"
                organization="Positive Technologies"
                location="Moscow, Russia"
                startMonth="July-August"
                startYear="2025"
                descriptions={[
                "Completed an intensive ethical hacking training focused on Linux, Windows, and Web application security.",
                "Worked extensively in hands-on environments using Kali Linux, Burp Suite, and standard penetration testing tools.",
                "Participated in simulated attack scenarios to identify and ethically exploit vulnerabilities and strengthen overall system hardening practices."
                ]}
                />

                <ExperienceCard
                title="AI Judge"
                organization="Ministry of Education"
                location="Sharjah, United Arab Emirates"
                startMonth="May"
                startYear="2025"
                descriptions={[
                "Evaluated student performances during the AI National Championship 2024-2025, fostering the development of future AI talent.",
                "Collaborated with Meccademia, TDRA, and ICT Fund under the UAE Ministry of Education to ensure a fair judging process.",
                "Contributed to a national initiative aimed at enhancing AI education in the UAE, showcasing commitment to innovation and youth empowerment."
                ]}
                />

                </div>
        </div>
    );
}