import TypewriterHeading from "./TypewriterHeading";
import RecommendationsCard from "./RecommendationsCard";

export default function Recommendations() {
    return (
        <div>
            <h2 className="font-pixel"><TypewriterHeading>what people say about Gab?</TypewriterHeading></h2>
            <RecommendationsCard
            person=""
            comment=""/>
        </div>
    );
}