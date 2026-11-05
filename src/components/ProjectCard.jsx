export default function ProjectCard({
    title, 
    description
}) {
    return(
        <div className="project-card">
                <h3 className="font-pixel">{title}</h3>
                <p>{description}</p>
                <a href=""></a>
        </div>
    );
}