export default function RecommendationsCard({
    person,
    comment
}) {
    return(
        <div className="project-card">
                <h3 className="font-pixel">{person}</h3>
                <p>{comment}</p>
        </div>
    );
}